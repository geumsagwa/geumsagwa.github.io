// 공개 페이지 목록 (인증 불필요)
const PUBLIC_PAGES = ['index.html', 'login.html', ''];

// 관리자 이메일 (Diary 메뉴 접근 권한)
const ADMIN_EMAIL = 'blue6074@gmail.com';

// 인증 상태 관리
document.addEventListener('DOMContentLoaded', async () => {
    // 페이지 접근 권한 체크
    await requireAuth();

    await updateAuthUI();

    // 인증 상태 변경 감지
    _supabase.auth.onAuthStateChange((event, session) => {
        updateAuthUI();
        // 로그아웃 시 보호 페이지에서 홈으로 이동
        if (event === 'SIGNED_OUT') {
            const page = window.location.pathname.split('/').pop() || '';
            if (!PUBLIC_PAGES.includes(page)) {
                window.location.href = 'index.html';
            }
        }
    });
});

// 보호 페이지 접근 시 인증 체크 → 미인증이면 로그인으로 리다이렉트
async function requireAuth() {
    const page = window.location.pathname.split('/').pop() || '';
    if (PUBLIC_PAGES.includes(page)) return;

    try {
        const user = await getCurrentUser();
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
        // Diary 페이지는 관리자만 접근 가능
        if (page === 'diary.html' && user.email !== ADMIN_EMAIL) {
            window.location.href = 'index.html';
        }
    } catch (e) {
        window.location.href = 'login.html';
    }
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
            authArea.innerHTML = `
                <span class="auth-nickname">${nickname}</span>
                <button class="auth-btn auth-logout-btn" onclick="signOut()">로그아웃</button>
            `;
            updateDiaryMenu(user);
        } else {
            authArea.innerHTML = `
                <a href="login.html" class="auth-btn auth-login-btn">로그인</a>
            `;
            updateDiaryMenu(null);
        }
    } catch (e) {
        authArea.innerHTML = `
            <a href="login.html" class="auth-btn auth-login-btn">로그인</a>
        `;
        updateDiaryMenu(null);
    }
}

// 관리자인 경우에만 Diary 메뉴 표시
function updateDiaryMenu(user) {
    const diaryMenus = document.querySelectorAll('.diary-menu');
    const isAdmin = user && user.email === ADMIN_EMAIL;
    diaryMenus.forEach(el => {
        el.style.display = isAdmin ? '' : 'none';
    });
}
