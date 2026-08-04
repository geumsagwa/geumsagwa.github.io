function switchTab(tab) {
  const loginTab = document.getElementById('tab-login');
  const signupTab = document.getElementById('tab-signup');
  const loginForm = document.getElementById('form-login');
  const signupForm = document.getElementById('form-signup');

  if (tab === 'login') {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
  } else {
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
  }

  document.getElementById('login-message').textContent = '';
  document.getElementById('signup-message').textContent = '';
}

function showMessage(elementId, text, isError) {
  const el = document.getElementById(elementId);
  el.textContent = text;
  el.className = 'auth-message ' + (isError ? 'auth-error' : 'auth-success');
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const btn = document.getElementById('login-submit');

  btn.disabled = true;
  btn.textContent = '로그인 중...';

  const { error } = await _supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    let msg = '로그인에 실패했습니다.';
    if (error.message.includes('Invalid login credentials')) {
      msg = '이메일 또는 비밀번호가 올바르지 않습니다.';
    } else if (error.message.includes('Email not confirmed')) {
      msg = '이메일 인증이 완료되지 않았습니다. 메일함을 확인해주세요.';
    }
    showMessage('login-message', msg, true);
  } else {
    showMessage('login-message', '로그인 성공! 이동 중...', false);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  }

  btn.disabled = false;
  btn.textContent = '로그인';
}

async function handleSignUp(e) {
  e.preventDefault();
  const nickname = document.getElementById('signup-nickname').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const passwordConfirm = document.getElementById('signup-password-confirm').value;
  const btn = document.getElementById('signup-submit');

  if (password !== passwordConfirm) {
    showMessage('signup-message', '비밀번호가 일치하지 않습니다.', true);
    return;
  }

  btn.disabled = true;
  btn.textContent = '가입 중...';

  const { data, error } = await _supabase.auth.signUp({
    email,
    password,
    options: {
      data: { nickname },
    },
  });

  if (error) {
    let msg = '회원가입에 실패했습니다.';
    if (error.message.includes('already registered') || error.message.includes('User already registered')) {
      msg = '이미 가입된 이메일입니다.';
    } else if (error.message.includes('Signups not allowed')) {
      msg = '현재 회원가입이 비활성화되어 있습니다. Supabase Auth 설정을 확인해주세요.';
    } else if (error.message.includes('Database error saving new user')) {
      msg = '회원가입 중 DB 트리거/정책 오류가 발생했습니다. 관리자에게 문의해주세요.';
    } else if (error.message.includes('Password')) {
      msg = '비밀번호는 6자 이상이어야 합니다.';
    } else if (error.message.includes('Invalid email')) {
      msg = '이메일 형식이 올바르지 않습니다.';
    }
    showMessage('signup-message', `${msg} (원인: ${error.message})`, true);
    console.error('[signup] error:', error);
  } else if (data.user && data.user.identities && data.user.identities.length === 0) {
    showMessage('signup-message', '이미 가입된 이메일입니다.', true);
  } else {
    showMessage('signup-message', '가입 완료! 이메일 인증 후 로그인해주세요.', false);
    document.getElementById('form-signup').reset();
  }

  btn.disabled = false;
  btn.textContent = '회원가입';
}

async function socialLogin(provider) {
  if (provider === 'kakao') {
    await kakaoLogin();
    return;
  }

  // Google/GitHub — Supabase 표준 OAuth
  const options = {
    redirectTo: new URL('index.html', window.location.href).href,
  };

  const { data, error } = await _supabase.auth.signInWithOAuth({
    provider,
    options,
  });

  if (data?.url) {
    window.location.assign(data.url);
    return;
  }

  if (error) {
    const activeTab = document.querySelector('.auth-tab.active').id;
    const msgId = activeTab === 'tab-login' ? 'login-message' : 'signup-message';
    showMessage(msgId, '소셜 로그인에 실패했습니다: ' + error.message, true);
  }
}


// -------- Kakao OAuth (직접 OAuth + signInWithIdToken) --------
// 카카오 이메일 동의(KOE205) 문제로 Supabase 표준 OAuth 대신 직접 OAuth 사용.
// OpenID Connect로 id_token을 받아 Supabase 세션 생성 (이메일 요청 없음, localStorage 불필요).

// KAKAO_REST_API_KEY는 supabase-config.js에서 전역 선언됨 (여기서 재선언 금지)
const KAKAO_STATE_KEY = 'kakao_oauth_state';
const KAKAO_NONCE_KEY = 'kakao_oauth_nonce';

function kakaoRedirectUri() {
  return window.location.origin + window.location.pathname;
}

function kakaoAuthMessageId() {
  try {
    const active = document.querySelector('.auth-tab.active');
    return active && active.id === 'tab-signup' ? 'signup-message' : 'login-message';
  } catch (_) {
    return 'login-message';
  }
}

function showKakaoMessage(text, isError) {
  const id = kakaoAuthMessageId();
  if (id === 'signup-message') switchTab('signup');
  else switchTab('login');
  showMessage(id, text, isError);
}

function kakaoRandomToken() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(36).padStart(2, '0')).join('');
}

async function kakaoLogin() {
  const state = kakaoRandomToken();
  const nonce = kakaoRandomToken();
  try {
    sessionStorage.setItem(KAKAO_STATE_KEY, state);
    sessionStorage.setItem(KAKAO_NONCE_KEY, nonce);
  } catch (_) {
    /* ignore */
  }
  const params = new URLSearchParams({
    client_id: KAKAO_REST_API_KEY,
    redirect_uri: kakaoRedirectUri(),
    response_type: 'code',
    scope: 'openid profile_nickname',
    state,
    nonce,
  });
  window.location.href = `https://kauth.kakao.com/oauth/authorize?${params}`;
}

async function handleKakaoCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  if (!code || !state) return;

  const savedState = sessionStorage.getItem(KAKAO_STATE_KEY);
  if (savedState && state !== savedState) return;
  const nonce = sessionStorage.getItem(KAKAO_NONCE_KEY) || undefined;
  try {
    sessionStorage.removeItem(KAKAO_STATE_KEY);
    sessionStorage.removeItem(KAKAO_NONCE_KEY);
  } catch (_) {
    /* ignore */
  }
  window.history.replaceState({}, '', window.location.pathname);

  try {
    const { data: tokenPayload, error: fnError } = await _supabase.functions.invoke('kakao-token', {
      body: { code, redirect_uri: kakaoRedirectUri() },
    });
    if (fnError) throw new Error(fnError.message || 'Edge Function 호출 실패');
    if (!tokenPayload?.id_token) throw new Error('카카오 ID 토큰을 받지 못했습니다 (OpenID Connect 확인 필요)');

    const { error } = await _supabase.auth.signInWithIdToken({
      provider: 'kakao',
      token: tokenPayload.id_token,
      nonce,
    });
    if (error) throw error;

    showKakaoMessage('로그인 성공! 이동 중...', false);
    setTimeout(() => { window.location.href = 'index.html'; }, 600);
  } catch (err) {
    console.error('Kakao callback error:', err);
    const raw = err && err.message ? err.message : String(err);
    showKakaoMessage('카카오 로그인 처리 중 오류: ' + raw, true);
  }
}

async function redirectIfLoggedIn() {
  const {
    data: { session },
  } = await _supabase.auth.getSession();
  if (session) {
    window.location.href = 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handleKakaoCallback();
  document.getElementById('tab-login').addEventListener('click', () => switchTab('login'));
  document.getElementById('tab-signup').addEventListener('click', () => switchTab('signup'));
  document.getElementById('form-login').addEventListener('submit', handleLogin);
  document.getElementById('form-signup').addEventListener('submit', handleSignUp);
  document.querySelectorAll('.js-social-login').forEach((btn) => {
    btn.addEventListener('click', () => socialLogin(btn.dataset.provider));
  });
  redirectIfLoggedIn();
});
