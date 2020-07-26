const slides = document.getElementsByClassName('slider__item')
const dots = document.getElementsByClassName('slider__dot')

function getActiveSlide() {
    for (let i = 0; i < slides.length; i++)
        if (slides[i].classList.contains('slider__item_active')) {
            return i
        }
}

function showSlide(slide) {
    document.querySelector('div.slider__item_active').classList.remove('slider__item_active')
    slides[slide].classList.add('slider__item_active')
    switchDots()
}

function showNext() {
    if (getActiveSlide() === slides.length - 1) {
        showSlide(0)
    } else {
    showSlide(getActiveSlide() + 1)
    }
}

function showPrev() {
    if (getActiveSlide() === 0) {
        showSlide(slides.length - 1)
    } else {
    showSlide(getActiveSlide() - 1)
    }
}

document.querySelector('div.slider__arrow_next').onclick = showNext
document.querySelector('div.slider__arrow_prev').onclick = showPrev

function renderDots(num) {
    let dotsHtml = ''
    for (let i = 0; i < num; i++) {
        dotsHtml += '<div class="slider__dot"></div>'
    }
    document.querySelector('div.slider__dots').innerHTML = dotsHtml   
    dots[getActiveSlide()].classList.add('slider__dot_active')
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function() {
            showSlide(i)
        }
    }
}

renderDots(slides.length)

function switchDots() {
    document.querySelector('div.slider__dot_active').classList.remove('slider__dot_active')
    dots[getActiveSlide()].classList.add('slider__dot_active')
}

document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        showPrev()
    }
    if (e.keyCode === 39) {
        showNext()
    }
}