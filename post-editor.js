document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('post-form');
    const titleInput = document.getElementById('post-title');
    const subtitleInput = document.getElementById('post-subtitle');
    const dateInput = document.getElementById('post-date');
    const contentInput = document.getElementById('post-content');
    const previewArea = document.getElementById('preview-area');
    const previewContent = document.getElementById('preview-content');
    const outputArea = document.getElementById('output-area');
    const outputCode = document.getElementById('output-code');

    // 오늘 날짜 기본값
    dateInput.value = new Date().toISOString().split('T')[0];

    // 카테고리 선택
    const selectBtns = document.querySelectorAll('.editor-select');
    selectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 툴바 버튼
    document.querySelectorAll('.toolbar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            const textarea = contentInput;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selected = textarea.value.substring(start, end);
            let insert = '';

            switch (action) {
                case 'bold':
                    insert = `**${selected || '굵은 텍스트'}**`;
                    break;
                case 'italic':
                    insert = `*${selected || '기울임 텍스트'}*`;
                    break;
                case 'heading':
                    insert = `\n## ${selected || '소제목'}\n`;
                    break;
                case 'quote':
                    insert = `\n> ${selected || '인용문'}\n`;
                    break;
                case 'separator':
                    insert = '\n---\n';
                    break;
            }

            textarea.value = textarea.value.substring(0, start) + insert + textarea.value.substring(end);
            textarea.focus();
        });
    });

    // Markdown → HTML 변환 (간단 버전)
    function markdownToHtml(text) {
        let html = text
            // 빈 줄로 단락 구분
            .split('\n\n')
            .map(block => {
                block = block.trim();
                if (!block) return '';

                // 소제목
                if (block.startsWith('## ')) {
                    return `<h2>${block.substring(3)}</h2>`;
                }
                // 인용
                if (block.startsWith('> ')) {
                    const quoteText = block.replace(/^> ?/gm, '');
                    return `<blockquote>${quoteText}</blockquote>`;
                }
                // 구분선
                if (block === '---' || block === '***') {
                    return '<hr>';
                }
                // 일반 단락
                block = block
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em>$1</em>')
                    .replace(/\n/g, '<br>');
                return `<p>${block}</p>`;
            })
            .filter(b => b)
            .join('\n');

        return html;
    }

    // 날짜 포맷
    function formatDate(dateStr) {
        const d = new Date(dateStr);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}. ${m}. ${day}`;
    }

    // 미리보기
    document.getElementById('btn-preview').addEventListener('click', () => {
        const bodyHtml = markdownToHtml(contentInput.value);
        const title = titleInput.value || '제목 없음';
        const subtitle = subtitleInput.value;
        const date = formatDate(dateInput.value);

        let preview = `<h1 style="font-size:2rem;color:#ddd;margin-bottom:0.5rem;">${title}</h1>`;
        if (subtitle) {
            preview += `<p style="font-size:1.1rem;color:#666;margin-bottom:1rem;">${subtitle}</p>`;
        }
        preview += `<time style="font-size:0.8rem;color:#444;display:block;margin-bottom:3rem;">${date}</time>`;
        preview += bodyHtml;

        previewContent.innerHTML = preview;
        previewArea.style.display = 'block';
        outputArea.style.display = 'none';
        previewArea.scrollIntoView({ behavior: 'smooth' });
    });

    // 미리보기 닫기
    document.getElementById('btn-close-preview').addEventListener('click', () => {
        previewArea.style.display = 'none';
    });

    // HTML 생성
    document.getElementById('btn-save').addEventListener('click', () => {
        const title = titleInput.value || '제목 없음';
        const subtitle = subtitleInput.value;
        const date = formatDate(dateInput.value);
        const bodyHtml = markdownToHtml(contentInput.value);
        const category = document.querySelector('.editor-select.active').dataset.value;

        // blog.html에 넣을 카드 HTML
        const cardHtml = `<a href="#" class="post-card">
    <span class="post-card-number">00</span>
    <div class="post-card-body">
        <h3 class="post-card-title">${title}${subtitle ? ' — ' + subtitle : ''}</h3>
        <p class="post-card-excerpt">${contentInput.value.substring(0, 100).replace(/[#*>\-\n]/g, ' ').trim()}...</p>
        <span class="post-card-date">${date}</span>
    </div>
</a>`;

        // post.html 본문 HTML
        const postHtml = `<!-- 카테고리: ${category === 'book-review' ? 'Book Review' : 'Essay'} -->
<h1 class="post-title">${title}</h1>
${subtitle ? `<p class="post-subtitle">${subtitle}</p>` : ''}
<time class="post-date">${date}</time>

<div class="post-body">
${bodyHtml}
</div>`;

        outputCode.value = `<!-- ===== blog.html 카드 (post-list 안에 추가) ===== -->\n${cardHtml}\n\n<!-- ===== post.html 본문 (post-article 안에 교체) ===== -->\n${postHtml}`;
        outputArea.style.display = 'block';
        previewArea.style.display = 'none';
        outputArea.scrollIntoView({ behavior: 'smooth' });
    });

    // 복사
    document.getElementById('btn-copy').addEventListener('click', () => {
        outputCode.select();
        document.execCommand('copy');

        const btn = document.getElementById('btn-copy');
        const original = btn.textContent;
        btn.textContent = '복사됨!';
        setTimeout(() => { btn.textContent = original; }, 1500);
    });
});
