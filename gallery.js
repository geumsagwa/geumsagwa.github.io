// Gallery 카테고리 탭 전환 + 라이트박스
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.gallery-tab');
    const panels = document.querySelectorAll('.gallery-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach(p => p.classList.remove('active'));
            document.querySelector(`.gallery-panel[data-category="${category}"]`).classList.add('active');
        });
    });

    // 라이트박스
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentFrames = [];  // 현재 패널의 액자 목록
    let currentIndex = 0;

    // URL에서 고해상도 변환
    function toHD(el) {
        const bg = el.style.backgroundImage;
        const url = bg.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
        return url.replace(/w=\d+/, 'w=1200').replace(/h=\d+/, 'h=900');
    }

    // 라이트박스에 현재 인덱스 사진 표시
    function showPhoto(index) {
        currentIndex = index;
        const frame = currentFrames[index];
        const photo = frame.querySelector('.frame-photo');
        const caption = frame.querySelector('.frame-caption');

        lightboxImg.src = toHD(photo);
        lightboxCaption.textContent = caption ? caption.textContent : '';

        // 첫/마지막 사진이면 화살표 숨김
        prevBtn.style.visibility = index <= 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = index >= currentFrames.length - 1 ? 'hidden' : 'visible';
    }

    // 액자 클릭 → 라이트박스 열기
    document.querySelectorAll('.exhibit-frame').forEach(frame => {
        frame.addEventListener('click', () => {
            // 현재 활성 패널의 액자 목록 수집
            const activePanel = document.querySelector('.gallery-panel.active');
            currentFrames = Array.from(activePanel.querySelectorAll('.exhibit-frame'));
            currentIndex = currentFrames.indexOf(frame);

            showPhoto(currentIndex);
            lightbox.classList.add('active');
        });
    });

    // 이전 사진
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex > 0) showPhoto(currentIndex - 1);
    });

    // 다음 사진
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex < currentFrames.length - 1) showPhoto(currentIndex + 1);
    });

    // 닫기: 배경 클릭
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-content')) {
            lightbox.classList.remove('active');
        }
    });

    // 키보드: ESC 닫기, ← → 탐색
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            showPhoto(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < currentFrames.length - 1) {
            showPhoto(currentIndex + 1);
        }
    });
});
