// Library 카테고리 탭 전환
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.library-tab');
    const panels = document.querySelectorAll('.library-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;

            // 탭 활성화 전환
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 패널 전환
            panels.forEach(p => p.classList.remove('active'));
            document.querySelector(`.library-panel[data-category="${category}"]`).classList.add('active');
        });
    });
});
