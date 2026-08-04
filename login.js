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


// -------- Kakao OAuth (직접 OAuth + 고정 비밀번호) --------
// 카카오 이메일 동의(KOE205)·Supabase OIDC(500) 문제로 표준 OAuth·signInWithIdToken 불가.
// 카카오 OAuth로 닉네임만 받아, 카카오 ID 기반 고정 비밀번호로 Supabase 가입/로그인.
// (localStorage 불필요 → 브라우저/기기 변경에도 로그인 유지)

// KAKAO_REST_API_KEY는 supabase-config.js에서 전역 선언됨 (여기서 재선언 금지)
const KAKAO_STATE_KEY = 'kakao_oauth_state';
const KAKAO_FIXED_SALT = 'kakao_fixed_salt_v1'; // 카카오 ID 기반 고정 비밀번호 소금

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
  try {
    sessionStorage.setItem(KAKAO_STATE_KEY, state);
  } catch (_) {
    /* ignore */
  }
  // 이메일 동의 불필요 (scope: profile_nickname만), nonce 불사용
  const params = new URLSearchParams({
    client_id: KAKAO_REST_API_KEY,
    redirect_uri: kakaoRedirectUri(),
    response_type: 'code',
    scope: 'profile_nickname',
    state,
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
  try {
    sessionStorage.removeItem(KAKAO_STATE_KEY);
  } catch (_) {
    /* ignore */
  }
  window.history.replaceState({}, '', window.location.pathname);

  try {
    // 1) 카카오 code → access_token (Edge Function)
    const { data: tokenPayload, error: fnError } = await _supabase.functions.invoke('kakao-token', {
      body: { code, redirect_uri: kakaoRedirectUri() },
    });
    if (fnError) throw new Error(fnError.message || 'Edge Function 호출 실패');
    if (!tokenPayload?.access_token) throw new Error('카카오 access_token을 받지 못했습니다');

    // 2) 카카오 사용자 정보 (kakaoId, 닉네임)
    const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${tokenPayload.access_token}` },
    });
    if (!userRes.ok) throw new Error('Kakao API 조회 실패');
    const kakaoUser = await userRes.json();
    const kakaoId = kakaoUser.id;
    const nickname = kakaoUser.kakao_account?.profile?.nickname || `kakao_${kakaoId}`;

    // 3) 고정 이메일/비밀번호 (브라우저 무관 동일 → 크로스 브라우저 로그인 유지)
    const email = `u-${kakaoId}@k.social`;
    const password = `kakao_${kakaoId}_${KAKAO_FIXED_SALT}`;

    // 4) 가입 시도 → 이미 가입이면 로그인
    const { data: signUpData, error: signUpError } = await _supabase.auth.signUp({
      email,
      password,
      options: { data: { nickname } },
    });
    if (signUpError) {
      if (/already registered|User already/i.test(signUpError.message || '')) {
        const { error: signInError } = await _supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        showKakaoMessage('로그인 성공! 이동 중...', false);
        setTimeout(() => { window.location.href = 'index.html'; }, 600);
        return;
      }
      throw signUpError;
    }
    if (signUpData?.session) {
      showKakaoMessage('로그인 성공! 이동 중...', false);
      setTimeout(() => { window.location.href = 'index.html'; }, 600);
      return;
    }
    const { error: signInError2 } = await _supabase.auth.signInWithPassword({ email, password });
    if (signInError2) throw signInError2;
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
