function showModal() {
    setTimeout(() => document.getElementById('subscribe-modal').classList.add('modal_active'), 1000)
}

const closers = document.getElementsByClassName('modal__close')
for (closer of closers) {
    closer.onclick = function() {
        this.closest('.modal').classList.remove('modal_active')
        document.cookie = 'closed=true'
    }
}

function getCookie(name) {
    const value = "; " + document.cookie
    let parts = value.split("; " + name + "=")
    if (parts.length === 2) {
        return parts.pop().split(";").shift()
    }
}

if (getCookie('closed') === undefined) {
    showModal()
}