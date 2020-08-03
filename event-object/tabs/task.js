const tabs = Array.from(document.querySelectorAll('.tabs'))

for (tabSet of tabs) {
    const tabTitles = tabSet.querySelector('.tab__navigation').children
    const tabContents = tabSet.querySelector('.tab__contents').children
    for (let i = 0; i < tabTitles.length; i++) {
        tabTitles[i].addEventListener('click', function(e) {
            if (tabContents[i].classList.contains('tab__content_active')) {
                return
            } else {
                for (tab of tabTitles) {
                    if (tab.classList.contains('tab_active')) {
                        tab.classList.remove('tab_active')
                    }
                }
                for (tab of tabContents) {
                    if (tab.classList.contains('tab__content_active')) {
                        tab.classList.remove('tab__content_active')
                    }
                }
                tabTitles[i].classList.add('tab_active')
                tabContents[i].classList.add('tab__content_active')
            }
            
        })
    }
}