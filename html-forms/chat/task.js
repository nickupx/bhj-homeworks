const chatWidget = document.querySelector('.chat-widget')
const container = document.querySelector('.chat-widget__messages')
const robotMessages = ['Да что ж вы за человек-то такой', 'Да что вы говорите?', 'Просто невероятно', 'Пришлите ваш запрос по факсу', 'Все операторы заняты']
const input = document.getElementById('chat-widget__input')
let lastActivity

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

function getCurrentTime() {
    const date = new Date()
    const dateTime = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
    return dateTime
}

function scrollTo() {
    container.parentElement.scrollTo(0, parseInt(getComputedStyle(container).height))
 }

function renderMessage(text, isClient) {
    const message = document.createElement('div')
    message.classList.add('message')
    if (isClient) {
        message.classList.add('message_client')
    }
    const msgTime = document.createElement('div')
    msgTime.classList.add('message__time')
    msgTime.textContent = getCurrentTime()
    const msgText = document.createElement('div')
    msgText.classList.add('message__text')
    msgText.textContent = text
    message.appendChild(msgTime)
    message.appendChild(msgText)
    container.appendChild(message)
    scrollTo()
    lastActivity = +new Date()
}

chatWidget.addEventListener('click', (e) => {
    chatWidget.classList.add('chat-widget_active')
    lastActivity = +new Date()
    }
)

const sendClientMsg = () => {
    renderMessage(input.value, true)
    input.value = ''
    setTimeout(sendRobotMsg, 1000)
}

const sendRobotMsg = () => {
    renderMessage(robotMessages[getRandomInt(robotMessages.length)], false)
}

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13 && input.value) {
        sendClientMsg()
    }
})

setInterval(() => {
    if (chatWidget.classList.contains('chat-widget_active') && +new Date() >= lastActivity + 30000) {
        renderMessage('Вы не уснули?', false)
    }
}, 1000)