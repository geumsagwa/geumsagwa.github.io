const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(function() {
        slides[currentSlide].classList.add('active');
    }, 50);
}

setInterval(nextSlide, 5500);
