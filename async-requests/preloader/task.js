fetch('https://netology-slow-rest.herokuapp.com')
.then((response) => { 
    return response.json()
})
.then((result) => {
    const rates = result.response.Valute
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
})
