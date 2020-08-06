const chatWidget = document.querySelector('.chat-widget')
const container = document.querySelector('.chat-widget__messages')
const messages = document.querySelector('.chat-widget__messages')
const robotMessages = ['Да что ж вы за человек-то такой', 'Да что вы говорите?', 'Просто невероятно', 'Пришлите ваш запрос по факсу', 'Все операторы заняты']
const input = document.getElementById('chat-widget__input')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

function getCurrentTime() {
    const date = new Date()
    const dateNormal = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
    return dateNormal
}

let lastActivity

chatWidget.addEventListener('click', (e) => {
    chatWidget.classList.add('chat-widget_active')
    lastActivity = +new Date()
    }
)

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13 && input.value) {
        sendClientMessage()
        input.value = ''
    }
})

function sendClientMessage() {
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${input.value}</div>
    </div>
    `
    scrollTo()
    setTimeout(sendRobotMessage, 2000)
}

function sendRobotMessage() {
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${robotMessages[getRandomInt(robotMessages.length)]}</div>
    </div>
    `
    scrollTo()
}

function scrollTo() {
    container.parentElement.scrollTo(0, parseInt(getComputedStyle(container).height))
    lastActivity = +new Date()
 }

setInterval(() => {
    if (chatWidget.classList.contains('chat-widget_active') && +new Date() >= lastActivity + 30000) {
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">Больше ничего не хотите написать?</div>
        </div>
        `
        scrollTo()
    }
}, 1000)
