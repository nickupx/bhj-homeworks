function countChecked(arr) {
    let subCheckCount = 0
    for (check of arr) {
        if (check.checked) {
            subCheckCount++
        }
    }
    return subCheckCount
}

const arr = Array.from(document.querySelector('.interests_main').querySelectorAll('.interest__check'))

for (item of arr) {
    item.addEventListener('change', function(e) {
        const subs = this.closest('label').nextElementSibling
        const sibls = Array.from(this.closest('.interests').querySelectorAll('.interest__check'))
        if (subs) {
            const subChecks = Array.from(subs.querySelectorAll('.interest__check'))
            if (this.checked) {
                for (sub of subChecks) {
                    sub.checked = true
                }
            } else {
                for (sub of subChecks) {
                    sub.checked = false
                    }
                }
        } else {
            const parent = this.closest('.interests').parentElement.firstElementChild.querySelector('.interest__check')
            if (!countChecked(sibls)) {
                parent.checked = false
            } else if (countChecked(sibls) === sibls.length) {
                parent.checked = true
                }
            }
        }    
    )
}