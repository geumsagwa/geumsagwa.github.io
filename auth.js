// 인증 상태 관리
document.addEventListener('DOMContentLoaded', async () => {
    await updateAuthUI();

    // 인증 상태 변경 감지
    _supabase.auth.onAuthStateChange((event, session) => {
        updateAuthUI();
    });
});

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

    const user = await getCurrentUser();

    if (user) {
        const nickname = getUserNickname(user);
        authArea.innerHTML = `
            <span class="auth-nickname">${nickname}</span>
            <button class="auth-btn auth-logout-btn" onclick="signOut()">로그아웃</button>
        `;
    } else {
        authArea.innerHTML = `
            <a href="login.html" class="auth-btn auth-login-btn">로그인</a>
        `;
    }
}
