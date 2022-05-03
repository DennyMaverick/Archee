const typeIcon = document.querySelector(".type")
const modalType = document.querySelector(".modal-type")
const modalTypeInner = document.querySelector(".modal-type__inner")
const bodyEl = document.querySelector("body")
const modalTypeNames = document.querySelectorAll(".modal-type__city-type")
const searchInputType = document.querySelector(".search__item--type")
const modalCloseBtns = document.querySelectorAll(".modal__close-btn")

typeIcon.addEventListener("click", () => {
  modalType.classList.add("show")
  bodyEl.classList.add("no-scroll")
  setTimeout(() => {
    modalTypeInner.style.transform = "rotateX(0deg)"
  }, 300)
})

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalTypeInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      modalType.classList.remove("show")
    }, 600)
  })
})

modalType.addEventListener("click", function () {
  modalTypeInner.style.transform = "rotateX(90deg)"

  setTimeout(() => {
    bodyEl.classList.remove("no-scroll")
    this.classList.remove("show")
  }, 600)
})

modalTypeInner.addEventListener("click", (event) => {
  event.stopPropagation()
})
