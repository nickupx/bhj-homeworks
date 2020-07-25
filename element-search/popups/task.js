const closers = document.getElementsByClassName('modal__close')
for (let i = 0; i < closers.length; i++) {
    closers[i].onclick = function() {
        const modals = document.getElementsByClassName('modal')
        for (let i = 0; i < modals.length; i++)
        modals[i].classList.remove('modal_active')
    }
}

document.getElementById('modal_main').classList.add('modal_active')

document.getElementsByClassName('show-success')[0].onclick = function() {
    document.getElementById('modal_success').classList.add('modal_active')
}

// comment