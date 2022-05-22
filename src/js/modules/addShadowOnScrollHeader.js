import {resetLangList} from "./resetLangList.js"

const BLACK_COLOR = "#020202"
const header = document.querySelector(".header")
const headerInner = document.querySelector(".header__inner")

const langListMobile = headerInner.querySelector(".lang-list")
const langArrowMobile = headerInner.querySelector(".lang__arrow")

window.addEventListener("scroll", addShadowOnScrollHeader)

function addShadowOnScrollHeader() {
  let shadowColor = BLACK_COLOR
  const scrollSize = window.pageYOffset
  const pixels = 0
  if (scrollSize > pixels) {
    header.style.boxShadow = `2px 2px 10px ${shadowColor}`
    resetLangList(langArrowMobile, langListMobile)
  } else {
    header.style.boxShadow = "none"
  }
}
