// 공개 페이지 목록 (인증 불필요)
const PUBLIC_PAGES = ['index.html', 'login.html', ''];

// [2026-08-13 4단계] 페이지별 최소 필요 역할
//   member < staff < manager < admin
const PAGE_MIN_ROLE = {
  'diary.html': 'admin',
  'admin.html': 'manager',
  'essay-editor.html': 'staff',
  'review-editor.html': 'staff',
  'ai-writing-editor.html': 'staff',
};

// 역할 순위 (숫자 클수록 높음)
const ROLE_RANK = { member: 0, staff: 1, manager: 2, admin: 3 };

let memberCache = null;

// requireAuth + updateAuthUI 1차 완료 후 resolve — DB/Storage를 쓰는 스크립트는 이후에 실행할 것 (경쟁 상태 방지)
let _resolveSiteAuthReady;
window.__siteAuthReadyPromise = new Promise((resolve) => {
  _resolveSiteAuthReady = resolve;
});

function waitForSiteAuthReady() {
  return window.__siteAuthReadyPromise || Promise.resolve();
}

function resetMemberCache() {
    memberCache = null;
}

async function getCurrentMember(force = false) {
    if (!force && memberCache) return memberCache;

    const user = await getCurrentUser();
    if (!user) {
        memberCache = null;
        return null;
    }

    const { data, error } = await _supabase
        .from('members')
        .select('id, user_id, email, nickname, status, role')
        .eq('user_id', user.id)
        .maybeSingle();

    if (error) {
        console.error('멤버 조회 실패:', error);
        memberCache = null;
        return null;
    }

    memberCache = data || null;
    return memberCache;
}

// 현재 승인된 회원의 역할 (없으면 'member')
async function getCurrentRole() {
    const member = await getCurrentMember();
    return (member && member.status === 'approved' && member.role) || 'member';
}

// 최소 역할 이상인지 판정 (member < staff < manager < admin)
async function hasMinRole(minRole) {
    const role = await getCurrentRole();
    return (ROLE_RANK[role] ?? 0) >= (ROLE_RANK[minRole] ?? 0);
}

async function isCurrentUserAdmin() {
    const member = await getCurrentMember();
    return !!(member && member.status === 'approved' && member.role === 'admin');
}

async function isCurrentUserManager() {
    const member = await getCurrentMember();
    return !!(member && member.status === 'approved' && (member.role === 'manager' || member.role === 'admin'));
}

async function isCurrentUserStaff() {
    const member = await getCurrentMember();
    return !!(member && member.status === 'approved' && ['staff', 'manager', 'admin'].includes(member.role));
}

// 인증 상태 관리
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await requireAuth();
        await updateAuthUI();

        _supabase.auth.onAuthStateChange((event, session) => {
            resetMemberCache();
            updateAuthUI();
            if (event === 'SIGNED_OUT') {
                const page = window.location.pathname.split('/').pop() || '';
                if (!PUBLIC_PAGES.includes(page)) {
                    window.location.href = 'index.html';
                }
            }
        });
    } finally {
        _resolveSiteAuthReady();
    }
});

// 보호 페이지 접근 시 인증 체크 → 미인증이면 로그인, 역할 부족 시 홈으로 리다이렉트
async function requireAuth() {
    const page = window.location.pathname.split('/').pop() || '';
    if (PUBLIC_PAGES.includes(page)) return;

    try {
        const user = await getCurrentUser();
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
        const minRole = PAGE_MIN_ROLE[page];
        if (minRole) {
            const ok = await hasMinRole(minRole);
            if (!ok) {
                window.location.href = 'index.html';
                return;
            }
        }
    } catch (e) {
        window.location.href = 'login.html';
    }
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

function renderLoggedInAuthArea(authArea, nickname) {
    authArea.innerHTML = `
        <span class="auth-nickname">${escapeHtml(nickname)}</span>
        <button class="auth-btn auth-logout-btn" onclick="signOut()">로그아웃</button>
        ${getThemeToggleHTML()}
    `;
}

function renderLoggedOutAuthArea(authArea) {
    authArea.innerHTML = `
        <a href="login.html" class="auth-btn auth-login-btn">로그인</a>
        ${getThemeToggleHTML()}
    `;
}

// 회원가입
async function signUp(email, password, nickname) {
    const { data, error } = await _supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { nickname: nickname || '익명' }
        }
    });
    return { data, error };
}

// 로그인
async function signIn(email, password) {
    const { data, error } = await _supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    return { data, error };
}

// 로그아웃
async function signOut() {
    const { error } = await _supabase.auth.signOut();
    if (!error) {
        window.location.href = 'index.html';
    }
    return { error };
}

// 현재 사용자 가져오기
async function getCurrentUser() {
    const { data: { user } } = await _supabase.auth.getUser();
    return user;
}

// 현재 세션 가져오기
async function getSession() {
    const { data: { session } } = await _supabase.auth.getSession();
    return session;
}

// 사용자 닉네임 가져오기
function getUserNickname(user) {
    if (!user) return null;
    return user.user_metadata?.nickname || user.email?.split('@')[0] || '사용자';
}

// 네비게이션 바 인증 UI 업데이트
async function updateAuthUI() {
    const authArea = document.getElementById('auth-area');
    if (!authArea) return;

    try {
        const user = await getCurrentUser();

        if (user) {
            const nickname = getUserNickname(user);
            renderLoggedInAuthArea(authArea, nickname);
            await ensureMemberRow(user);
            await updateAdminMenus();
        } else {
            renderLoggedOutAuthArea(authArea);
            await updateAdminMenus();
        }
    } catch (e) {
        renderLoggedOutAuthArea(authArea);
        await updateAdminMenus();
    }
}

// 역할별 메뉴 표시 — Diary: admin만 · 관리: manager 이상
async function updateAdminMenus() {
    const isAdmin = await isCurrentUserAdmin();
    document.querySelectorAll('.diary-menu').forEach(el => {
        el.style.display = isAdmin ? '' : 'none';
    });
    const isManager = await isCurrentUserManager();
    document.querySelectorAll('.admin-menu').forEach(el => {
        el.style.display = isManager ? '' : 'none';
    });
}

// 로그인 시 members 테이블에 자동 등록 (없으면 생성)
async function ensureMemberRow(user) {
    if (!user) return;
    try {
        const { data } = await _supabase
            .from('members')
            .select('id, status, role')
            .eq('user_id', user.id)
            .maybeSingle();

        if (!data) {
            const { error } = await _supabase.from('members').insert({
                user_id: user.id,
                email: user.email,
                nickname: user.user_metadata?.nickname || user.email?.split('@')[0] || '익명',
                status: 'pending',
                role: 'member'
            });
            if (error) {
                console.error('members 생성 실패:', error);
                return;
            }
        }
        resetMemberCache();
    } catch (e) {
        console.error('회원 등록 확인 실패:', e);
    }
}

// 다크/라이트 테마 토글
function getThemeLabel() {
    return document.documentElement.classList.contains('light-mode') ? '다크모드' : '라이트모드';
}

function toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    const btn = document.querySelector('.theme-toggle-btn');
    if (btn) btn.textContent = getThemeLabel();
}

function getThemeToggleHTML() {
    return `<button class="theme-toggle-btn" onclick="toggleTheme()">${getThemeLabel()}</button>`;
}
