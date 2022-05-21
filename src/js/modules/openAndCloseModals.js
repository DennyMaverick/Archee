import {resetInputFormStyles} from "./modal-form"

const modalCloseBtns = document.querySelectorAll(".modal__close-btn")
const modals = document.querySelectorAll(".modal")
const bodyEl = document.querySelector("body")
const modalInners = document.querySelectorAll(".modal__inner")
const modalBtns = document.querySelectorAll("[data-modal]")

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentModal = document.querySelector(e.target.dataset.modal)
    const currentModalInner = currentModal.querySelector(".modal__inner")
    currentModal.classList.add("show")

    setTimeout(() => {
      currentModalInner.style.transform = "rotateX(0deg)"
      bodyEl.classList.add("no-scroll")
    }, 600)
  })
})

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentModal = btn.closest(".modal")
    const currentModalInner = currentModal.querySelector(".modal__inner")
    currentModalInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      currentModal.classList.remove("show")
    }, 600)

    resetInputFormStyles()
  })
})

modals.forEach((modal) => {
  modal.addEventListener("click", function () {
    const currentModalInner = this.querySelector(".modal__inner")
    currentModalInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      this.classList.remove("show")
    }, 600)

    resetInputFormStyles()
  })
})

modalInners.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation()
  })
})
