const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.send()

const checkResponse = setInterval(() => {
    if (xhr.readyState === 4) {
        clearInterval(checkResponse)
        const response = JSON.parse(xhr.responseText)
        const rates = response.response.Valute

        let html = ''
        for (item in rates) {
            let str = `
            <div class="item">
                <div class="item__code">${rates[item].CharCode}</div>
                <div class="item__value">${rates[item].Value}</div>
                <div class="item__currency">&#8381;</div>
            </div>
            `
            html += str
        }
        document.getElementById('loader').classList.remove('loader_active')
        document.getElementById('items').innerHTML = html
    }
}, 1000)