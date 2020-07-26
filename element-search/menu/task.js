
const links = document.getElementsByClassName('menu__link')

for (let i = 0; i < links.length; i++) {
    if (links[i].closest('li.menu__item').querySelector('ul.menu_sub')) {
        links[i].onclick = function() {
            if (document.querySelector('ul.menu_active')) {
                document.querySelector('ul.menu_active').classList.remove('menu_active')
            }
            this.closest('li.menu__item').querySelector('ul.menu_sub').classList.toggle('menu_active')
            return false
        }
    }
}