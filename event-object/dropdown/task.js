const dropdowns = document.querySelectorAll('div.dropdown')
const listItems = document.getElementsByClassName('dropdown__item')

function toggleActive() {
    document.querySelector('ul.dropdown__list').classList.toggle('dropdown__list_active')
}

for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
        toggleActive()
        }
    )
}

for (let i =0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector('div.dropdown__value').textContent = listItems[i].querySelector('a.dropdown__link').textContent.replace(/\s/g, '')
    })
}