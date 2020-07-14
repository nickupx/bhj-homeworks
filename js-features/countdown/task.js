let interval;

class Timer {
    constructor(seconds) {
        this.seconds = seconds;
    }

    ssToHms(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8);
    }

    start() {
        interval = setInterval(() => {
            if (this.seconds) {
                --this.seconds
                document.getElementById('timer').innerHTML = this.ssToHms(this.seconds)
            } else {
                this.stop()
                this.alert()
            }
             }
        , 1000) 
    }

    stop() {
        clearInterval(interval)
        interval = 0
    }

    alert() {
        window.alert('Вы победили в конкурсе')
    }

    flx(number, titles) { 
        const cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }
}

const hmsToSs = (hms) => {
    let arr = hms.split(':')
    const hh = parseInt(arr[0])
    const mm = parseInt(arr[1])
    const ss = parseInt(arr[2])
    return (hh * 3600) + (mm * 60) + ss
}

const timer = new Timer(hmsToSs(document.getElementById('timer').textContent))

timer.start()