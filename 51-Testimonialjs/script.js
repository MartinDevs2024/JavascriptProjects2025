//Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
//Buttons
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;
//First thing
//slides.forEach((s,i) =>s.style.transform = `translateX(${100 * i}%)`);
// start slide

const createDots = function() {
    slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML('beforeend', 
        `<button class="dots__dot" data-slide="${i}"></button>`)
    });
}
createDots();

const activateDot = function(slide) {
    document.querySelectorAll('.dots_dot').forEach
    (dot =>dot.classList.remove
    ('dots__dot--active'));   
    
    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active")
}
activateDot(0);

const goToSlide = function(slide) {
    slides.forEach((s,i) =>(s.style.transform = `translateX(${100 
    * (i - slide)}%`)
    );
}
goToSlide(0);
//Next Slide
const nextSlide = function() {
    if(curSlide === maxSlide -1) {
        curSlide =0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
}
const prevSlide = function() {
    if(curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
}

// Slide Right 
// curSlide = -1, -100%, 0%, 100%, 200%
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

//Dots 
document.addEventListener('keydown', function(e) {
   if(e.key === 'ArrowLeft') prevSlide();
      e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("dots__dot")) {
        const {slide} = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
})

