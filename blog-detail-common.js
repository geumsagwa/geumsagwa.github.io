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

    marked.setOptions({ breaks: true, gfm: true });
    const bodyEl = document.getElementById(config.bodyId);
    if (bodyEl) bodyEl.innerHTML = marked.parse(data.body_markdown || '');

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
