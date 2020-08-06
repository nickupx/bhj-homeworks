const quantityControls = Array.from(document.getElementsByClassName('product__quantity-controls'))

for (dec of quantityControls) {
    dec.querySelector('.product__quantity-control_dec').addEventListener('click', function(e) {
        value = parseInt(this.nextElementSibling.textContent)
        if (value === 1) {
            return
        }
        value--
        this.nextElementSibling.textContent = value
    })
}

for (inc of quantityControls) {
    inc.querySelector('.product__quantity-control_inc').addEventListener('click', function(e) {
        value = parseInt(this.previousElementSibling.textContent)
        value++
        this.previousElementSibling.textContent = value
    })
}

let cart
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
    renderCart(cart)
} else {
    cart = []
}


const toCartButtons = Array.from(document.getElementsByClassName('product__add'))
for (button of toCartButtons) {
    button.addEventListener('click', function(e) {
        if (cart.length) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === parseInt(this.closest('.product').dataset.id)) {
                cart[i].amount += parseInt(this.previousElementSibling.querySelector('.product__quantity-value').textContent)
                this.previousElementSibling.querySelector('.product__quantity-value').textContent = 1
                renderCart(cart)
                return
                }
            }
        }
        cart.push({id: parseInt(this.closest('.product').dataset.id), amount: parseInt(this.previousElementSibling.querySelector('.product__quantity-value').textContent), image: this.closest('.product').querySelector('.product__image').src})
        this.previousElementSibling.querySelector('.product__quantity-value').textContent = 1
        renderCart(cart)
    })
}

function renderCart(cart) {
    let html = ''
    for (item of cart) {
        html += `
            <div class="cart__product" data-id="${item.id}">
                <img class="cart__product-image" src="${item.image}">
                <div class="cart__product-count">${item.amount}</div>
                <div class="cart__product-delete">&times;</div>
            </div>
        `
    }
    document.querySelector('.cart__products').innerHTML = html

    const crosses = document.querySelectorAll('.cart__product-delete')
    for (cross of crosses) {
        cross.addEventListener('click', function(e) {
            cart = cart.filter(item => item.id != this.parentElement.dataset.id)
            renderCart(cart)
        })
    }

    const cartItems = document.querySelector('.cart__products').children

    for (item of cartItems) {
        item.addEventListener('mouseover', function(e) {
            this.children[2].style.display = 'block'
        })
        item.addEventListener('mouseout', function(e) {
            this.children[2].style.display = 'none'
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    if (!cart.length) {
        document.querySelector('.cart__title').style.display = 'none'
    } else {
        document.querySelector('.cart__title').style.display = 'block'
    }
}