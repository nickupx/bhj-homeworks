const signIn = document.getElementById('signin')
const welcome = document.getElementById('welcome')

if (localStorage.getItem('user_id')) {
    welcome.classList.add('welcome_active')
    document.getElementById('user_id').textContent = localStorage.getItem('user_id')
} else {
    signIn.classList.add('signin_active')
}

const form = document.getElementById('signin__form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    xhr.send(data)
    xhr.addEventListener('readystatechange', function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            response = JSON.parse(xhr.responseText)
            if (response.success) {
                signIn.classList.remove('signin_active')
                document.getElementById('user_id').textContent = response.user_id
                welcome.classList.add('welcome_active')
                localStorage.setItem('user_id', response.user_id)
            } else {
                alert('Неверный логин/пароль')
                form.reset()
            }
        }
    })
})

const logoutBtn = document.getElementById('logout__btn')

logoutBtn.addEventListener('click', function(e) {
    welcome.classList.remove('welcome_active')
    signIn.classList.add('signin_active')
    localStorage.removeItem('user_id')
})