let counter = parseInt(document.getElementById('clicker__counter').textContent)
let clicksSeq = []

const clicker = () => {
    counter++
    clicksSeq.push(+new Date())
    if (clicksSeq.length > 2) {
        clicksSeq.shift()
    }
    if (clicksSeq.length === 1) {
        document.getElementById('click-speed').textContent = '---'
    } else {
        document.getElementById('click-speed').textContent = (1 / ((clicksSeq[1] - clicksSeq[0]) / 1000)).toFixed(4)
    }
    
    document.getElementById('clicker__counter').textContent = counter
    if (counter % 2) {
        document.getElementById('cookie').style.width = '250px'
    } else {
        document.getElementById('cookie').style.width = '200px'
    }



}

document.getElementById('cookie').addEventListener('click', clicker)

