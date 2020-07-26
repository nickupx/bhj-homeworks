const slides = document.getElementsByClassName('slider__item')
const dots = document.getElementsByClassName('slider__dot')

function getActiveSlide() {
    const slides = document.getElementsByClassName('slider__item')
    for (let i = 0; i < slides.length; i++)
        if (slides[i].classList.contains('slider__item_active')) {
            return i
        }
}

function showSlide(slide) {
    document.querySelector('div.slider__item_active').classList.remove('slider__item_active')
    slides[slide].classList.add('slider__item_active')
}

function showNext() {
    if (getActiveSlide() === slides.length - 1) {
        showSlide(0)
        switchDots()
    } else {
    showSlide(getActiveSlide() + 1)
    switchDots()
    }
}

function showPrev() {
    if (getActiveSlide() === 0) {
        showSlide(slides.length - 1)
        switchDots()
    } else {
    showSlide(getActiveSlide() - 1)
    switchDots()
    }
}

document.querySelector('div.slider__arrow_next').onclick = showNext
document.querySelector('div.slider__arrow_prev').onclick = showPrev

function renderDots(num) {
    let dotsHtml = '<div class="slider__dot"></div>'
    for (let i = 0; i < num - 1; i++) {
        dotsHtml += '<div class="slider__dot"></div>'
    }
    document.querySelector('div.slider__dots').innerHTML = dotsHtml   
    dots[getActiveSlide()].classList.add('slider__dot_active')
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function() {
            showSlide(i)
            switchDots()
        }
    }
}

renderDots(slides.length)

function switchDots() {
    document.querySelector('div.slider__dot_active').classList.remove('slider__dot_active')
    dots[getActiveSlide()].classList.add('slider__dot_active')
}

document.onkeydown = function(e) {
    console.log(e)
    if (e.keyCode === 37) {
        showPrev()
    }
    if (e.keyCode === 39) {
        showNext()
    }
}