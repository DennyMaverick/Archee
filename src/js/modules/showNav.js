import {resetLangList} from "./resetLangList.js"

const burger = document.querySelector(".burger")
const bodyEl = document.querySelector("body")
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavLinks = document.querySelectorAll(".mobile-nav__link")
const langListMobile = mobileNav.querySelector(".lang-list")
const langArrowMobile = mobileNav.querySelector(".lang__arrow")

burger.addEventListener("click", function () {
  if (this.classList.toggle("burger--active")) {
    resetLangList(langArrowMobile, langListMobile)
  }
  mobileNav.classList.toggle("mobile-nav--active")
})

mobileNavLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    burger.classList.remove("burger--active")
    bodyEl.classList.remove("no-scroll")
    mobileNav.classList.remove("mobile-nav--active")

    resetLangList(langArrowMobile, langListMobile)
  })
})

// При изменении ширины окна браузера скрывать модальное окно навигации
window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth > 992) {
    burger.classList.remove("burger--active")
    bodyEl.classList.remove("no-scroll")
    mobileNav.classList.remove("mobile-nav--active")
    resetLangList(langArrowMobile, langListMobile)
  }
})
