const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // 1. 현재 슬라이드 비활성화
    slides[currentSlide].classList.remove('active');
    
    // 2. 인덱스 증가
    currentSlide = (currentSlide + 1) % slides.length;
    
    // 3. 브라우저가 클래스 제거를 확실히 인지한 후 다시 추가 (Reflow 강제)
    // 50ms setTimeout 대신 사용 가능
    void slides[currentSlide].offsetWidth; 
    
    setTimeout(() => {
        slides[currentSlide].classList.add('active');
    }, 50);
}

// 초기 실행 (첫 번째 슬라이드 애니메이션 보장)
window.onload = () => {
    slides[0].classList.add('active');
};

setInterval(nextSlide, 5500);