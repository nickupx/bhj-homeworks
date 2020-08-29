const form = document.getElementById('form')
const progress = document.getElementById('progress')

form.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.upload.addEventListener('progress', e => {
        progress.value = e.loaded / e.total
    });
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    xhr.send(formData)
})