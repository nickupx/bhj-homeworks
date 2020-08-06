const chatWidget = document.querySelector('.chat-widget')
const container = document.querySelector('.chat-widget__messages')
const messages = document.querySelector('.chat-widget__messages')
const input = document.getElementById('chat-widget__input')

let date = new Date()
let dateNormal = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
let lastActivity

chatWidget.addEventListener('click', (e) => {
    chatWidget.classList.add('chat-widget_active')
    lastActivity = +new Date()
    }
)

input.addEventListener('keyup', function(e) {
    console.log(input.value)
    if (e.keyCode === 13) {
        sendClientMessage()
    }
}
)

function sendClientMessage() {
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${dateNormal}</div>
        <div class="message__text">${input.value}</div>
    </div>
    `
    scrollTo()
    setTimeout(sendRobotMessage, 2000)
}

function sendRobotMessage(messageText = 'Добрый день!') {
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${dateNormal}</div>
        <div class="message__text">${messageText}</div>
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
        sendRobotMessage('Не спать!')
    }
}, 1000)