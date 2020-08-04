const blocks = document.getElementsByClassName('reveal')

function checkVisibility() {
    for (block of blocks) {
        if (block.getBoundingClientRect().top < window.innerHeight && block.getBoundingClientRect().top > 0 - parseInt(getComputedStyle(block).height)) {
            block.classList.add('reveal_active')
        } else {
            block.classList.remove('reveal_active')
        }
    }
}

document.addEventListener('scroll', checkVisibility)


