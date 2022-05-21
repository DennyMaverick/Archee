const typeIcon = document.querySelector(".type")
const modalType = document.querySelector(".modal-type")
const modalTypeInner = document.querySelector(".modal-type__inner")
const bodyEl = document.querySelector("body")
const modalTypeNames = document.querySelectorAll(".modal-type__city-type")
const searchInputType = document.querySelector(".search__item-input-type")
const modalTypeCloseBtn = document.querySelector(".modal-type .modal__close-btn")
const modalTypeBtn = document.querySelector(".modal-type__btn")
const searchTypeMenu = document.querySelector(".search__type-menu")
const searchTypeListItems = document.querySelectorAll(".search-type-list__text")
const menuTypeList = document.querySelector(".menu-type")
const menuTypeClose = document.querySelector(".menu-type__close")
const modals = document.querySelectorAll(".modal")

typeIcon.addEventListener("click", () => {
  modalType.classList.add("show")
  bodyEl.classList.add("no-scroll")
  setTimeout(() => {
    modalTypeInner.style.transform = "rotateX(0deg)"
  }, 300)
})

modalTypeCloseBtn.addEventListener("click", () => {
  menuTypeList.classList.remove("show")
  resetModalType()
})

modalType.addEventListener("click", function () {
  menuTypeList.classList.remove("show")
  resetModalType()
})

function resetModalType() {
  const modalTypeTexts = document.querySelectorAll(".modal-type__text")
  const houseItems = document.querySelectorAll(".house-item")
  const modalTypeStart = document.querySelector(".modal-type__text-start")
  setTimeout(() => {
    modalTypeTexts.forEach((text) => {
      text.classList.add("hide")
    })
    modalTypeStart.classList.remove("hide")

    houseItems.forEach((item) => {
      item.classList.remove("house-item--active")
    })
    modalTypeBtn.classList.add("hide-btn")
  }, 500)
}

searchInputType.addEventListener("focus", function () {
  searchTypeMenu.classList.add("show")
  menuTypeClose.classList.add("show")
})

searchTypeListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    searchTypeMenu.classList.remove("show")
    menuTypeClose.classList.remove("show")
    searchInputType.value = this.innerHTML
    searchInputType.classList.add("valid")
    searchInputType.classList.remove("invalid")
  })
})

menuTypeClose.addEventListener("click", function () {
  searchTypeMenu.classList.remove("show")
  menuTypeClose.classList.remove("show")
})

searchInputType.addEventListener("input", function (event) {
  event.target.value = ""
})

searchInputType.addEventListener("blur", function () {
  menuTypeList.classList.remove("show")
})

modals.forEach((item) => {
  item.addEventListener("click", function () {
    menuTypeList.classList.remove("show")
  })
})