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

    // 전처리: 첫 번째 제목 제거 + 각주 변환
    let bodyMd = data.body_markdown || '';
    bodyMd = stripFirstTitle(bodyMd);
    bodyMd = preprocessFootnotes(bodyMd);

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
