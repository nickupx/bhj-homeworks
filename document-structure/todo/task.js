const form = document.querySelector('.tasks__control')
const input = document.getElementById('task__input')

let tasks
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    renderTasks(tasks)
} else {
    tasks = []
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
        tasks.push(input.value)
        renderTasks(tasks)
        form.reset()
        updateLocalStorage()
    }
})

function renderTasks(tasks) {
    let html = ''
    for (let i = 0; i < tasks.length; i++) {
        html += `
            <div class="task" data-id="${i}">
                <div class="task__title">
                ${tasks[i]}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `
    }
    document.getElementById('tasks__list').innerHTML = html

    const removeLinks = document.getElementsByClassName('task__remove')
    for (link of removeLinks) {
        link.addEventListener('click', function(e) {
            this.parentElement.remove()
            tasks.splice(this.parentElement.dataset.id, 1)
            updateLocalStorage()
        })
    }
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}