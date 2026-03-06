document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.blog-tab');
    const panels = document.querySelectorAll('.blog-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach(p => p.classList.remove('active'));
            document.querySelector(`.blog-panel[data-category="${category}"]`).classList.add('active');
        });
    });

    loadBookReviews();
    loadEssays();
    loadAiWritings();
    showWriteButtons();
});

async function loadBookReviews() {
    await loadPostGrid({
        gridId: 'book-review-grid',
        table: 'book_reviews',
        selectFields: 'id, review_title, title, excerpt, card_image_url, created_at',
        emptyMessage: '등록된 서평이 없습니다.',
        errorMessage: '서평을 불러올 수 없습니다.',
        detailPage: 'review.html',
        defaultImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=530&fit=crop&crop=center',
        getDisplayTitle: (row) => row.review_title || row.title
    });
}

async function loadEssays() {
    await loadPostGrid({
        gridId: 'essay-grid',
        table: 'essays',
        selectFields: 'id, title, excerpt, card_image_url, created_at',
        emptyMessage: '등록된 에세이가 없습니다.',
        errorMessage: '에세이를 불러올 수 없습니다.',
        detailPage: 'essay.html',
        defaultImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=530&fit=crop&crop=center'
    });
}

async function loadAiWritings() {
    await loadPostGrid({
        gridId: 'ai-writing-grid',
        table: 'ai_writings',
        selectFields: 'id, title, excerpt, card_image_url, created_at',
        emptyMessage: '등록된 AI Writing이 없습니다.',
        errorMessage: 'AI Writing을 불러올 수 없습니다.',
        detailPage: 'ai-writing.html',
        defaultImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=530&fit=crop&crop=center'
    });
}

async function loadPostGrid(config) {
    const grid = document.getElementById(config.gridId);
    if (!grid) return;

    grid.innerHTML = '<p class="grid-message">불러오는 중...</p>';

    const { data, error } = await _supabase
        .from(config.table)
        .select(config.selectFields)
        .order('created_at', { ascending: false });

    if (error) {
        grid.innerHTML = `<p class="grid-message">${config.errorMessage}</p>`;
        return;
    }

    if (!data || data.length === 0) {
        grid.innerHTML = `<p class="grid-message">${config.emptyMessage}</p>`;
        return;
    }

    grid.innerHTML = data.map((row) => renderPostCard(row, config)).join('');
}

function renderPostCard(row, config) {
    const date = new Date(row.created_at)
        .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .replace(/\s/g, ' ');
    const bgImage = row.card_image_url || config.defaultImage;
    const displayTitle = config.getDisplayTitle ? config.getDisplayTitle(row) : row.title;

    return `<a href="${config.detailPage}?id=${row.id}" class="photo-card">
        <div class="photo-card-img" style="background-image: url('${bgImage}');"></div>
        <div class="photo-card-overlay">
            <span class="photo-card-date">${date}</span>
            <h3 class="photo-card-title">${displayTitle}</h3>
            <p class="photo-card-excerpt">${row.excerpt || ''}</p>
        </div>
    </a>`;
}

async function showWriteButtons() {
    try {
        const user = await getCurrentUser();
        if (!user) return;
        const btns = document.querySelectorAll('.blog-write-btn');
        btns.forEach(btn => btn.style.display = 'inline-block');
    } catch (e) { /* not logged in */ }
}
