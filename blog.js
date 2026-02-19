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
    const grid = document.getElementById('book-review-grid');
    if (!grid) return;

    grid.innerHTML = '<p class="grid-message">불러오는 중...</p>';

    const { data, error } = await _supabase
        .from('book_reviews')
        .select('id, review_title, title, excerpt, card_image_url, created_at')
        .order('created_at', { ascending: false });

    if (error) {
        grid.innerHTML = '<p class="grid-message">서평을 불러올 수 없습니다.</p>';
        return;
    }

    if (!data || data.length === 0) {
        grid.innerHTML = '<p class="grid-message">등록된 서평이 없습니다.</p>';
        return;
    }

    grid.innerHTML = data.map(r => {
        const date = new Date(r.created_at)
            .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
            .replace(/\s/g, ' ');
        const bgImage = r.card_image_url
            || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=530&fit=crop&crop=center';
        const displayTitle = r.review_title || r.title;
        return `<a href="review.html?id=${r.id}" class="photo-card">
            <div class="photo-card-img" style="background-image: url('${bgImage}');"></div>
            <div class="photo-card-overlay">
                <span class="photo-card-date">${date}</span>
                <h3 class="photo-card-title">${displayTitle}</h3>
                <p class="photo-card-excerpt">${r.excerpt || ''}</p>
            </div>
        </a>`;
    }).join('');
}

async function loadEssays() {
    const grid = document.getElementById('essay-grid');
    if (!grid) return;

    grid.innerHTML = '<p class="grid-message">불러오는 중...</p>';

    const { data, error } = await _supabase
        .from('essays')
        .select('id, title, excerpt, card_image_url, created_at')
        .order('created_at', { ascending: false });

    if (error) {
        grid.innerHTML = '<p class="grid-message">에세이를 불러올 수 없습니다.</p>';
        return;
    }

    if (!data || data.length === 0) {
        grid.innerHTML = '<p class="grid-message">등록된 에세이가 없습니다.</p>';
        return;
    }

    grid.innerHTML = data.map(e => {
        const date = new Date(e.created_at)
            .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
            .replace(/\s/g, ' ');
        const bgImage = e.card_image_url
            || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=530&fit=crop&crop=center';
        return `<a href="essay.html?id=${e.id}" class="photo-card">
            <div class="photo-card-img" style="background-image: url('${bgImage}');"></div>
            <div class="photo-card-overlay">
                <span class="photo-card-date">${date}</span>
                <h3 class="photo-card-title">${e.title}</h3>
                <p class="photo-card-excerpt">${e.excerpt || ''}</p>
            </div>
        </a>`;
    }).join('');
}

async function loadAiWritings() {
    const grid = document.getElementById('ai-writing-grid');
    if (!grid) return;

    grid.innerHTML = '<p class="grid-message">불러오는 중...</p>';

    const { data, error } = await _supabase
        .from('ai_writings')
        .select('id, title, excerpt, card_image_url, created_at')
        .order('created_at', { ascending: false });

    if (error) {
        grid.innerHTML = '<p class="grid-message">AI Writing을 불러올 수 없습니다.</p>';
        return;
    }

    if (!data || data.length === 0) {
        grid.innerHTML = '<p class="grid-message">등록된 AI Writing이 없습니다.</p>';
        return;
    }

    grid.innerHTML = data.map(a => {
        const date = new Date(a.created_at)
            .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
            .replace(/\s/g, ' ');
        const bgImage = a.card_image_url
            || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=530&fit=crop&crop=center';
        return `<a href="ai-writing.html?id=${a.id}" class="photo-card">
            <div class="photo-card-img" style="background-image: url('${bgImage}');"></div>
            <div class="photo-card-overlay">
                <span class="photo-card-date">${date}</span>
                <h3 class="photo-card-title">${a.title}</h3>
                <p class="photo-card-excerpt">${a.excerpt || ''}</p>
            </div>
        </a>`;
    }).join('');
}

async function showWriteButtons() {
    try {
        const user = await getCurrentUser();
        if (!user) return;
        const btns = document.querySelectorAll('.blog-write-btn');
        btns.forEach(btn => btn.style.display = 'inline-block');
    } catch (e) { /* not logged in */ }
}
