const holes = document.getElementsByClassName('hole')

const getHole = index => holes[index]

for (let i = 0; i < holes.length; i++) {
    getHole(i).addEventListener('click', clickCheck)
}

function updateCounter(counter) {
    let num = parseInt(document.getElementById(counter).textContent)
    ++num
    document.getElementById(counter).textContent = num
    return num
}

function resetCounters() {
    document.getElementById('dead').textContent = '0'
    document.getElementById('lost').textContent = '0'
}

function clickCheck() {
    if (this.classList.contains('hole_has-mole')) {
        if (updateCounter('dead') === 10) {
            showAlert('Вы выиграли, ура')
        }
    } else {
        if (updateCounter('lost') === 5) {
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