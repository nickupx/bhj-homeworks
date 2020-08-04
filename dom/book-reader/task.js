const sizeButtons = Array.from(document.querySelector('.book__control_font-size').children)
const colorButtons = Array.from(document.querySelector('.book__control_color').getElementsByTagName('a'))
const bgButtons = Array.from(document.querySelector('.book__control_background').getElementsByTagName('a'))

for (button of sizeButtons) {
    button.addEventListener('click', function(e) {
        e.preventDefault()
        if (this.classList.contains('font-size_active')) {
            return
        } else {
            this.parentElement.querySelector('.font-size_active').classList.remove('font-size_active')
            this.classList.add('font-size_active')
                if (!this.dataset.size) {
                    this.closest('.book').querySelector('.book__content').classList.remove('book_fs-big', 'book_fs-small')
                    return
                }
            this.closest('.book').querySelector('.book__content').classList.add('book_fs-' + this.dataset.size)
        }
    })
}

for (button of colorButtons) {
    button.addEventListener('click', function(e) {
        e.preventDefault()
        if (this.classList.contains('color_active')) {
            return
        } else {
            this.parentElement.querySelector('.color_active').classList.remove('color_active')
            this.classList.add('color_active')
            this.closest('.book').querySelector('.book__content').classList.remove('book_color-gray', 'book_color-black', 'book_color-whitesmoke')
            if (!this.dataset.color) {
                this.closest('.book').querySelector('.book__content').classList.add('book_color-black')
                return
            }
            this.closest('.book').querySelector('.book__content').classList.add('book_color-' + this.dataset.color)
        }
    })
}

for (button of bgButtons) {
    button.addEventListener('click', function(e) {
        e.preventDefault()
        if (this.classList.contains('color_active')) {
            return
        } else {
            this.parentElement.querySelector('.color_active').classList.remove('color_active')
            this.classList.add('color_active')
            this.closest('.book').querySelector('.book__content').classList.remove('book_bg-gray', 'book_bg-black')
            if (!this.dataset.color) {
                this.closest('.book').querySelector('.book__content').classList.add('book_color-black')
                return
            }
            this.closest('.book').querySelector('.book__content').classList.add('book_bg-' + this.dataset.color)
        }
    })
}