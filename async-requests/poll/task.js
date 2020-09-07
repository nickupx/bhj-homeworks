const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText)
        document.getElementById('poll__title').textContent = response.data.title
        const answers = response.data.answers
        let html = ''
        for (item of answers) {
            const str = `
            <button class="poll__answer">${item}</button>
            `
            html += str
        }
        document.getElementById('poll__answers').innerHTML = html
        const buttons = Array.from(document.getElementsByClassName('poll__answer'))
        for (button of buttons) {
            button.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!')
            })
        }
    }
})