const dropdowns = document.querySelectorAll('div.dropdown')
const listItems = document.getElementsByClassName('dropdown__item')

for (const dropdown of dropdowns) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
        }
    )
}

for (const listItem of listItems) {
    listItem.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.dropdown__list').previousElementSibling.textContent = listItem.querySelector('.dropdown__link').textContent
    })
}