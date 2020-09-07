const form = document.getElementById('form')
const textarea = document.getElementById('editor')

if (localStorage.getItem('text')) {
    textarea.value = localStorage.getItem('text')
}
textarea.addEventListener('input', e => {
    console.log(textarea.value)
    localStorage.setItem('text', textarea.value)
})

document.getElementById('button-clear').addEventListener('click', () => {
    form.reset()
    localStorage.removeItem('text')
})