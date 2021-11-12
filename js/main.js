const BURGER = document.querySelector('.header-burger')
const MAIN_NAV = document.querySelector('.main-nav')

const CATALOG_BTN = document.querySelector('.catalog-btn')
const CATALOG_MENU = document.querySelector('.main-nav-catalog')

const SEARCH_BTN = document.querySelector('.search-btn')
const SEARCH_FORM = document.querySelector('.main-shop-search')
const SEARCH_BTN_CLOSE = document.querySelector('.search-form-close')


BURGER.addEventListener("click", () => {
    BURGER.classList.toggle('active')
    MAIN_NAV.classList.toggle('active')
    CATALOG_MENU.classList.remove('active')

})


CATALOG_BTN.addEventListener("click", () => {
    CATALOG_MENU.classList.toggle('active')
    CATALOG_BTN.classList.toggle('active')
})

SEARCH_BTN.addEventListener("click", (e) => {
    e.preventDefault();
    SEARCH_FORM.classList.add('active')
})
SEARCH_BTN_CLOSE.addEventListener("click", (e) => {
    e.preventDefault();
    SEARCH_FORM.classList.remove('active')
})
