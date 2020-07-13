const holes = document.getElementsByClassName('hole')

const getHole = index => holes[index]

for (let i = 0; i < holes.length; i++) {
    getHole(i).addEventListener('click', clickCheck)
}

function updateCounter(counter) {
    let num = parseInt(document.getElementById(counter).textContent)
    ++num
    document.getElementById(counter).textContent = num
}

function resetCounters() {
    setTimeout(
        () => {
            document.getElementById('dead').textContent = '0'
            document.getElementById('lost').textContent = '0'
        }, 1000
    )
    
}

function clickCheck() {
    if (this.classList.contains('hole_has-mole')) {
        updateCounter('dead')
        if (document.getElementById('dead').textContent === '2') {
            window.alert('Вы выиграли, ура!')
            resetCounters()
        }
    } else {
        updateCounter('lost')
        if (document.getElementById('lost').textContent === '2') {
            window.alert('Вы проиграли :-(')
            resetCounters()
        }
    }
}