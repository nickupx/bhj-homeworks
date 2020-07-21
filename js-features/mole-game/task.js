const holes = document.getElementsByClassName('hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')


const getHole = index => holes[index]

for (let i = 0; i < holes.length; i++) {
    getHole(i).addEventListener('click', clickCheck)
}

function updateCounter(counter) {
    let num = parseInt(counter.textContent)
    ++num
    counter.textContent = num
    return num
}

function resetCounters() {
    dead.textContent = 0
    lost.textContent = 0
}

function clickCheck() {
    if (this.classList.contains('hole_has-mole')) {
        if (updateCounter(dead) === 10) {
            showAlert('Вы выиграли, ура')
        }
    } else {
        if (updateCounter(lost) === 5) {
            showAlert('Вы проиграли :-(')
        }
    }
}

function showAlert(msg) {
    setTimeout(() => {
        window.alert(msg)
        resetCounters()
        }, 50
    )
}