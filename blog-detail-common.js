// 마크다운 전처리: 각주 문법을 HTML로 변환 (marked.js가 [^n] 문법을 지원하지 않음)
// 1. 본문 중 [^n] 참조 → <sup class="fn-ref"><a href="#fn-{n}">[{n}]</a></sup>
// 2. 말단 [^n]: 정의 → <li id="fn-{n}"><a href="#fn-ref-{n}">[{n}]</a> {내용}</li>
function preprocessFootnotes(markdown) {
  // 각주 정의 수집 ([^n]: ... )
  const fnDefs = {};
  let processed = markdown.replace(/^\[\^(\d+)\]:\s*(.*)$/gm, (match, n, content) => {
    fnDefs[n] = content.trim();
    return ''; // 정의 라인 제거
  });

  // 본문의 [^n] 참조 → sup 태그로 변환
  let refIndex = 0;
  processed = processed.replace(/\[\^(\d+)\]/g, (match, n) => {
    refIndex++;
    return `<sup class="fn-ref"><a href="#fn-${n}" id="fn-ref-${n}">[${n}]</a></sup>`;
  });

  // 각주 목록이 있으면 말단에 추가
  const keys = Object.keys(fnDefs);
  if (keys.length > 0) {
    processed += `\n\n<hr class="fn-sep">\n<ol class="footnotes">\n`;
    for (const n of keys) {
      const content = fnDefs[n].replace(/\n/g, ' ');
      processed += `  <li id="fn-${n}"><a href="#fn-ref-${n}">[${n}]</a> ${content}</li>\n`;
    }
    processed += `</ol>\n`;
  }

  return processed;
}

// 첫 번째 # 제목 라인 제거 (DB title과 중복 방지)
function stripFirstTitle(markdown) {
  return markdown.replace(/^#\s+.*\n?/, '');
}

// 단일 물결(~) 취소선 오인식 방지
// CDN 최신 marked.js는 ~~...~~ 뿐 아니라 단일 ~...~ 도 취소선으로 인식한다.
// (연도 표기 '기원전 585~528경' 같은 단일 ~ 가 2개 있으면 그 사이 전체가 <del>이 되는 문제)
// 의도된 GFM 취소선 ~~...~~ 은 그대로 유지하고, 나머지 단일 ~ 은 HTML 엔티티(&#126;)로 치환한다.
function escapeLoneTildes(markdown) {
  let out = '';
  let i = 0;
  const len = markdown.length;
  while (i < len) {
    // 원고 작성자의 \~ 이스케이프 → 백슬래시 없이 엔티티로 치환
    // (CDN marked.js는 \~ 를 이스케이프로 무시하므로, 백슬래시를 남기면 화면에 \ 가 남는다)
    if (markdown[i] === '\\' && markdown[i + 1] === '~') {
      out += '&#126;';
      i += 2;
      continue;
    }
    if (markdown[i] !== '~') {
      out += markdown[i++];
      continue;
    }
    if (markdown[i + 1] === '~') {
      // 연도·수치 범위 표기(30만~~35만, 19만5천~~20만)처럼 숫자에 붙은 ~~ 는
      // 취소선이 아니라 단순 물결 중복이므로 이스케이프한다.
      const prevCh = markdown[i - 1] || '';
      const nextCh = markdown[i + 2] || '';
      const isNumberRange = /\d/.test(prevCh) || /\d/.test(nextCh);
      if (!isNumberRange) {
        // ~~...~~ 의도된 취소선이면 닫는 ~~ 찾아 통째로 유지
        const close = markdown.indexOf('~~', i + 2);
        if (close !== -1) {
          out += markdown.slice(i, close + 2);
          i = close + 2;
          continue;
        }
      }
      // 숫자에 붙었거나 닫는 ~~ 이 없으면 쌍이 아니므로 각각 이스케이프
      out += '&#126;&#126;';
      i += 2;
      continue;
    }
    // 단일 ~ → 엔티티로 치환 (취소선으로 오인되지 않음)
    out += '&#126;';
    i++;
  }
  return out;
}

async function loadMarkdownPostDetail(config) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        showDetailError(config);
        return;
    }

    const { data, error } = await _supabase
        .from(config.table)
        .select('*')
        .eq('id', id)
        .single();

    if (error || !data) {
        showDetailError(config);
        return;
    }

    document.title = `${data.title} - 생각을 잇다`;

    const titleEl = document.getElementById(config.titleId);
    if (titleEl) titleEl.textContent = data.title || '';

    const dateEl = document.getElementById(config.dateId);
    if (dateEl) {
        const dateStr = new Date(data.created_at).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\s/g, ' ');
        dateEl.textContent = dateStr;
    }

    // 전처리: 첫 번째 제목 제거 + 각주 변환 + 단일 물결 이스케이프
    let bodyMd = data.body_markdown || '';
    bodyMd = stripFirstTitle(bodyMd);
    bodyMd = preprocessFootnotes(bodyMd);
    bodyMd = escapeLoneTildes(bodyMd);

    marked.setOptions({ breaks: true, gfm: true });
    const bodyEl = document.getElementById(config.bodyId);
    if (bodyEl) bodyEl.innerHTML = sanitizeHtml(marked.parse(bodyMd));

    if (typeof config.afterRender === 'function') {
        config.afterRender(data);
    }

    const loadingEl = document.getElementById(config.loadingId);
    const articleEl = document.getElementById(config.articleId);
    if (loadingEl) loadingEl.style.display = 'none';
    if (articleEl) articleEl.style.display = '';

    const user = await getCurrentUser();
    if (user) {
        const editLink = document.getElementById('edit-link');
        if (editLink) {
            editLink.href = `${config.editorPage}?id=${id}`;
            editLink.style.display = 'inline-block';
        }
    }
}

function showDetailError(config) {
    const loadingEl = document.getElementById(config.loadingId);
    const errorEl = document.getElementById(config.errorId);
    if (loadingEl) loadingEl.style.display = 'none';
    if (errorEl) errorEl.style.display = '';
}

function sanitizeHtml(unsafeHtml) {
    const template = document.createElement('template');
    template.innerHTML = unsafeHtml || '';

    template.content
        .querySelectorAll('script,iframe,object,embed,link,meta,style')
        .forEach((el) => el.remove());

    template.content.querySelectorAll('*').forEach((el) => {
        [...el.attributes].forEach((attr) => {
            const name = attr.name.toLowerCase();
            const value = attr.value || '';
            if (name.startsWith('on')) {
                el.removeAttribute(attr.name);
                return;
            }
            if ((name === 'href' || name === 'src') && /^\s*javascript:/i.test(value)) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return template.innerHTML;
}

// ── 본문 이미지 클릭 확대(라이트박스) ──
// .review-body 안의 이미지를 클릭하면 전체 화면 오버레이로 확대 표시하고,
// 오버레이를 다시 클릭하거나 Esc 를 누르면 원래 화면으로 돌아온다.
function initImageLightbox() {
  if (initImageLightbox.done) return;
  initImageLightbox.done = true;

  const overlay = document.createElement('div');
  overlay.className = 'img-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', '이미지 확대 보기');
  const lightImg = document.createElement('img');
  overlay.appendChild(lightImg);

  function open(src) {
    lightImg.src = src;
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    lightImg.removeAttribute('src');
  }
  overlay.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) close();
  });

  // 마크다운 렌더링이 나중에 되어도 동작하도록 document 레벨 이벤트 위임
  document.addEventListener('click', (e) => {
    const img = e.target && e.target.closest ? e.target.closest('.review-body img') : null;
    if (!img) return;
    open(img.currentSrc || img.src);
  });

  document.body.appendChild(overlay);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initImageLightbox);
} else {
  initImageLightbox();
}
