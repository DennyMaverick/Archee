const modalForms = document.querySelectorAll("[data-form]")
const bodyEl = document.querySelector("body")
let inputsValid = document.querySelectorAll("input[data-type]")
const searchItemsFormInputs = document.querySelectorAll(".modal-form__input")

modalForms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    //* для тестирования можно оставить event.preventDefault() чтобы форма не отправлялась на сервер и не было перезагрузки страницы ===>
    event.preventDefault()

    const currentFormInput = event.target.querySelector(".modal-form__input")

    const currentModal = event.target.closest(".modal")
    const currentModalInner = currentModal.querySelector(".modal__inner")
    const currentModalFormSuccessfulPopup = currentModal.querySelector(".modal-form__successful-popup")
    const currentModalFormUnSuccessfulPopup = currentModal.querySelector(".modal-form__unsuccessful-popup")

    if (currentFormInput.classList.contains("valid")) {
      currentModalFormSuccessfulPopup.classList.add("show")
      // resetInputStyles()

      setTimeout(() => {
        currentModalFormSuccessfulPopup.classList.remove("show")
      }, 2000)
      setTimeout(() => {
        currentModalInner.style.transform = "rotateX(90deg)"
      }, 7000)
      setTimeout(() => {
        currentModal.classList.remove("show")
        bodyEl.classList.remove("no-scroll")
      }, 7500)
      resetInputFormStyles()
    } else {
      currentModalFormUnSuccessfulPopup.classList.add("modal-form-popup--active")

      setTimeout(() => {
        currentModalFormUnSuccessfulPopup.classList.remove("modal-form-popup--active")
      }, 1200)
    }
  })
})

export function resetInputFormStyles() {
  inputsValid.forEach((input) => {
    input.value = ""
    input.classList.remove("valid")
    input.classList.remove("invalid")
  })
  searchItemsFormInputs.forEach((input) => {
    input.value = ""
    input.classList.remove("valid")
    input.classList.remove("invalid")
  })
}
