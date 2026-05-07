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

async function kakaoLogin() {
  const activeTab = document.querySelector('.auth-tab.active');
  const msgId = activeTab?.id === 'tab-signup' ? 'signup-message' : 'login-message';

  if (typeof Kakao === 'undefined' || !Kakao.isInitialized()) {
    showMessage(msgId, 'Kakao SDK가 초기화되지 않았습니다. 페이지를 새로고침해주세요.', true);
    return;
  }

  try {
    // 1. Kakao JS SDK 팝업으로 직접 OAuth (Supabase GoTrue 우회, scope: profile_nickname만)
    const authObj = await new Promise((resolve, reject) => {
      Kakao.Auth.login({
        scope: 'profile_nickname',
        success: resolve,
        fail: (err) => {
          reject(new Error(err.error_description || err.error || err.message || 'Kakao login failed'));
        },
      });
    });

    // 2. Kakao API로 사용자 정보 조회
    const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${authObj.access_token}` },
    });
    if (!userRes.ok) throw new Error('Kakao API 조회 실패');
    const kakaoUser = await userRes.json();
    const kakaoId = kakaoUser.id;
    const nickname = kakaoUser.kakao_account?.profile?.nickname || `kakao_${kakaoId}`;

    // 3. 고유 이메일 생성 (kakao ID 기반, 도달 불가능한 주소)
    const email = `u-${kakaoId}@k.social`;
    const pwKey = `kpw_${kakaoId}`;
    let password = localStorage.getItem(pwKey);

    if (!password) {
      // 최초 방문: 신규 회원가입 (mailer_autoconfirm=true 이므로 세션 즉시 발급)
      password = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(36).padStart(2, '0')).join('');
      localStorage.setItem(pwKey, password);

      const { data, error: signUpError } = await _supabase.auth.signUp({
        email,
        password,
        options: { data: { nickname } },
      });
      if (signUpError) throw signUpError;

      if (data?.session) {
        // auto-confirm으로 이미 로그인됨
        showMessage(msgId, '로그인 성공! 이동 중...', false);
        setTimeout(() => { window.location.href = 'index.html'; }, 800);
        return;
      }
      // session이 없으면 fallthrough → signInWithPassword
    }

    // 4. 재방문 또는 signUp이 세션을 반환하지 않은 경우
    const { error: signInError } = await _supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) throw signInError;

    showMessage(msgId, '로그인 성공! 이동 중...', false);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  } catch (err) {
    const msg = err.message || '알 수 없는 오류';
    if (msg.includes('cancel') || msg.includes('denied') || msg === 'consent_canceled') {
      showMessage(msgId, '카카오 로그인이 취소되었습니다.', true);
    } else {
      showMessage(msgId, '카카오 로그인에 실패했습니다: ' + msg, true);
    }
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
  document.getElementById('tab-login').addEventListener('click', () => switchTab('login'));
  document.getElementById('tab-signup').addEventListener('click', () => switchTab('signup'));
  document.getElementById('form-login').addEventListener('submit', handleLogin);
  document.getElementById('form-signup').addEventListener('submit', handleSignUp);
  document.querySelectorAll('.js-social-login').forEach((btn) => {
    btn.addEventListener('click', () => socialLogin(btn.dataset.provider));
  });
  // Kakao SDK 초기화
  if (typeof Kakao !== 'undefined') {
    Kakao.init('e4915b568634050ccefdf508399a9ec4');
  }
  redirectIfLoggedIn();
});
