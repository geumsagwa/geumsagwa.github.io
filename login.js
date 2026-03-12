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
  const { error } = await _supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: window.location.origin + '/index.html',
    },
  });

  if (error) {
    const activeTab = document.querySelector('.auth-tab.active').id;
    const msgId = activeTab === 'tab-login' ? 'login-message' : 'signup-message';
    showMessage(msgId, '소셜 로그인에 실패했습니다: ' + error.message, true);
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
  redirectIfLoggedIn();
});
