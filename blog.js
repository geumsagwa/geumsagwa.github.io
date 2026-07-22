document.addEventListener('DOMContentLoaded', async () => {
    await waitForSiteAuthReady();
    const tabs = document.querySelectorAll('.blog-tab');
    const panels = document.querySelectorAll('.blog-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach(p => p.classList.remove('active'));
            document.querySelector(`.blog-panel[data-category="${category}"]`).classList.add('active');
            // URL 업데이트 (히스토리 보존)
            const url = new URL(window.location);
            url.searchParams.set('category', category);
            history.replaceState(null, '', url);
        });
    });

    // URL 파라미터 ?category=essay 등으로 탭 활성화
    const params = new URLSearchParams(window.location.search);
    const activeCategory = params.get('category');
    if (activeCategory) {
        const targetTab = document.querySelector(`.blog-tab[data-category="${activeCategory}"]`);
        if (targetTab) {
            tabs.forEach(t => t.classList.remove('active'));
            targetTab.classList.add('active');
            panels.forEach(p => p.classList.remove('active'));
            const targetPanel = document.querySelector(`.blog-panel[data-category="${activeCategory}"]`);
            if (targetPanel) targetPanel.classList.add('active');
        }
    }

    loadBookReviews();
    loadEssays();
    loadAiWritings();
    showWriteButtons();
});

async function loadBookReviews() {
    await loadPostGrid({
        gridId: 'book-review-grid',
        table: 'book_reviews',
        selectFields: 'id, review_title, title, excerpt, card_image_url, cover_url, created_at',
        emptyMessage: '등록된 서평이 없습니다.',
        errorMessage: '서평을 불러올 수 없습니다.',
        detailPage: 'review.html',
        defaultImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=530&fit=crop&crop=center',
        getDisplayTitle: (row) => row.review_title || row.title
    });
}

async function loadEssays() {
    const grid = document.getElementById('essay-grid');
    if (!grid) return;

    grid.innerHTML = '<p class="grid-message">불러오는 중...</p>';

    const { data, error } = await _supabase
        .from('essays')
        .select('id, title, excerpt, card_image_url, created_at, series, episode_number');

    if (error) {
        grid.innerHTML = `<p class="grid-message">에세이를 불러올 수 없습니다.</p>`;
        return;
    }

    if (!data || data.length === 0) {
        grid.innerHTML = `<p class="grid-message">등록된 에세이가 없습니다.</p>`;
        return;
    }

    // 시리즈별 + 단독 에세이 분리
    const seriesMap = {};
    const standalone = [];

    for (const row of data) {
        if (row.series) {
            if (!seriesMap[row.series]) seriesMap[row.series] = [];
            seriesMap[row.series].push(row);
        } else {
            standalone.push(row);
        }
    }

    // 각 시리즈 내부: episode_number 오름차순
    for (const key of Object.keys(seriesMap)) {
        seriesMap[key].sort((a, b) => {
            if (a.episode_number !== null && b.episode_number !== null) return a.episode_number - b.episode_number;
            if (a.episode_number !== null) return -1;
            if (b.episode_number !== null) return 1;
            return new Date(b.created_at) - new Date(a.created_at);
        });
    }

    // 시리즈 정렬: 회차가 있는 시리즈 우선, 이름순
    const seriesKeys = Object.keys(seriesMap).sort((a, b) => {
        const aHasEp = seriesMap[a].some(r => r.episode_number !== null);
        const bHasEp = seriesMap[b].some(r => r.episode_number !== null);
        if (aHasEp && !bHasEp) return -1;
        if (!aHasEp && bHasEp) return 1;
        return a.localeCompare(b, 'ko');
    });

    // 단독 에세이: created_at 내림차순
    standalone.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const defaultImage = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=530&fit=crop&crop=center';

    // 하나의 photo-grid 안에 모두 배치 (섹션 헤더는 full-width)
    const gridClass = 'photo-grid';
    grid.className = gridClass;

    const items = [];

    function sectionHeader(label, emoji) {
        return `<div style="grid-column:1/-1; padding:0;">
            <h3 style="font-family:'GyeonggiBatang',sans-serif; font-size:1rem; color:#8f7d60; padding:0.5rem 0 0.3rem; border-bottom:1px solid rgba(143,125,96,0.2); margin:0;">${emoji} ${label}</h3>
        </div>`;
    }

    // 시리즈 섹션
    for (const key of seriesKeys) {
        items.push(sectionHeader(key, '📚'));
        for (const row of seriesMap[key]) {
            items.push(renderEssayCard(row, defaultImage));
        }
    }

    // 단독 에세이 섹션
    if (standalone.length > 0) {
        items.push(sectionHeader('에세이', '✍'));
        for (const row of standalone) {
            items.push(renderEssayCard(row, defaultImage));
        }
    }

    grid.innerHTML = items.join('');
}

function renderEssayCard(row, defaultImage) {
    const date = new Date(row.created_at)
        .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .replace(/\s/g, ' ');
    const bgImage = row.card_image_url || defaultImage;
    let displayTitle = row.title || '';
    // 회차 라벨 추가 (제목에 이미 포함되어 있을 수 있으므로 series+episode_number만 별도 표시)
    let badgeHtml = '';
    if (row.series && row.episode_number) {
        badgeHtml = `<span style="position:absolute; top:0.5rem; left:0.5rem; background:#8f7d60; color:#000; font-size:0.65rem; font-weight:700; padding:0.15rem 0.5rem; border-radius:2px; z-index:2; letter-spacing:0.03em;">${row.series} 제${row.episode_number}화</span>`;
    }

    return `<a href="essay.html?id=${row.id}" class="photo-card" style="position:relative;">
        ${badgeHtml}
        <div class="photo-card-img" style="background-image: url('${bgImage}');"></div>
        <div class="photo-card-overlay">
            <span class="photo-card-date">${date}</span>
            <h3 class="photo-card-title">${displayTitle}</h3>
            <p class="photo-card-excerpt">${row.excerpt || ''}</p>
        </div>
    </a>`;
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
    const bgImage = row.cover_url || row.card_image_url || config.defaultImage;
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
