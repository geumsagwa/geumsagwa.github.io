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

  // Google/GitHub — 기존 Supabase OAuth
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

// -------- Kakao OAuth (SDK 없이 직접 구현) --------
// authorize: 브라우저에서 REST API 키 + redirect (카카오 문서 정합).
// 토큰 교환: Supabase Edge Function `kakao-token` (client_secret은 서버만).
// Redirect URI: 현재 페이지 전체(origin + pathname)를 카카오 REST API 키 Redirect URI에 등록.

const KAKAO_STATE = 'kakao_login';

let _handlingKakaoCallback = false;

function kakaoRedirectUri() {
  return window.location.origin + window.location.pathname;
}

/** 카카오가 error 쿼리로 되돌려 보낸 경우 (KOE205 등) */
function handleKakaoOAuthErrorReturn() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('state') !== KAKAO_STATE || !params.get('error')) return false;

  _handlingKakaoCallback = true;
  const err = params.get('error');
  let detail = params.get('error_description') || err || '';
  try {
    detail = decodeURIComponent(detail.replace(/\+/g, ' '));
  } catch (_) {
    /* keep raw */
  }

  window.history.replaceState({}, '', window.location.pathname);

  let msg = '카카오 로그인에 실패했습니다.';
  if (err === 'access_denied') {
    msg = '카카오 로그인이 취소되었습니다.';
  } else if (detail) {
    msg += ' ' + detail;
  }
  showMessage('login-message', msg, true);
  return true;
}

async function handleKakaoCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  if (!code || state !== KAKAO_STATE) return;

  _handlingKakaoCallback = true;
  const redir = kakaoRedirectUri();
  window.history.replaceState({}, '', window.location.pathname);

  try {
    const { data: tokenPayload, error: fnError } = await _supabase.functions.invoke('kakao-token', {
      body: { code, redirect_uri: redir },
    });
    if (fnError) {
      let detail = fnError.message || 'Edge Function 호출 실패';
      const body = fnError.context?.body;
      if (typeof body === 'string') {
        try {
          const parsed = JSON.parse(body);
          if (parsed?.error) detail = String(parsed.error);
        } catch (_) {
          /* keep detail */
        }
      } else if (body && typeof body === 'object' && body.error) {
        detail = String(body.error);
      }
      throw new Error(detail);
    }
    if (!tokenPayload?.access_token) {
      const fallback = tokenPayload?.error ? String(tokenPayload.error) : '토큰 응답 없음';
      throw new Error(fallback);
    }
    const accessToken = tokenPayload.access_token;

    const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!userRes.ok) throw new Error('Kakao API 조회 실패');
    const kakaoUser = await userRes.json();
    const kakaoId = kakaoUser.id;
    const nickname = kakaoUser.kakao_account?.profile?.nickname || `kakao_${kakaoId}`;

    const email = `u-${kakaoId}@k.social`;
    const pwKey = `kpw_${kakaoId}`;
    let password = localStorage.getItem(pwKey);

    if (!password) {
      password = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(36).padStart(2, '0')).join('');
      localStorage.setItem(pwKey, password);

      const { data, error: signUpError } = await _supabase.auth.signUp({
        email, password,
        options: { data: { nickname } },
      });
      if (signUpError) throw signUpError;
      if (data?.session) {
        showMessage('login-message', '로그인 성공! 이동 중...', false);
        setTimeout(() => { window.location.href = 'index.html'; }, 600);
        return;
      }
    }

    const { error: signInError } = await _supabase.auth.signInWithPassword({ email, password });
    if (signInError) throw signInError;

    showMessage('login-message', '로그인 성공! 이동 중...', false);
    setTimeout(() => { window.location.href = 'index.html'; }, 600);
  } catch (err) {
    console.error('Kakao callback error:', err);
    const raw = err && err.message ? err.message : String(err);
    showMessage('login-message', '카카오 로그인 처리 중 오류: ' + raw, true);
    _handlingKakaoCallback = false;
  }
}

async function kakaoLogin() {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: KAKAO_REST_API_KEY,
    redirect_uri: kakaoRedirectUri(),
    scope: 'profile_nickname',
    state: KAKAO_STATE,
  });
  window.location.href = `https://kauth.kakao.com/oauth/authorize?${params}`;
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
  if (!handleKakaoOAuthErrorReturn()) {
    handleKakaoCallback();
  }

  document.getElementById('tab-login').addEventListener('click', () => switchTab('login'));
  document.getElementById('tab-signup').addEventListener('click', () => switchTab('signup'));
  document.getElementById('form-login').addEventListener('submit', handleLogin);
  document.getElementById('form-signup').addEventListener('submit', handleSignUp);
  document.querySelectorAll('.js-social-login').forEach((btn) => {
    btn.addEventListener('click', () => socialLogin(btn.dataset.provider));
  });
  // Kakao 콜백 처리 중이 아니고 이미 로그인된 경우만 리다이렉트
  if (!_handlingKakaoCallback) redirectIfLoggedIn();
});
