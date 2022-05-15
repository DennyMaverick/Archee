const searchForm = document.querySelector(".search__form")
const searchItems = document.querySelectorAll(".search__item-input")
const modalSearchSuccess = document.querySelector(".modal-search-success")
const bodyEl = document.querySelector("body")
const modalSearchInner = document.querySelector(".modal-search__inner")
const modalSearchForm = document.querySelector(".modal-search__form")
const modalSearchInput = document.querySelector(".modal-search__input")
const modalSearchPopup = document.querySelector(".modal-search__popup")
const modalSearchCloseBtn = document.querySelector(".modal-search-success__close")
const searchItemBudget = document.querySelector(".search__item--budget")
let inputsValid = document.querySelectorAll("input[data-rules]")
const searchItemsInputs = document.querySelectorAll(".search__item-input")
const modalSearchPopupError = document.querySelector(".search__budget-popup--unsuccess")
const modalSearchUnsuccessPopup = document.querySelector(".modal-search__popup--unsuccess")

searchForm.addEventListener("submit", showModalForm)

function showModalForm(event) {
  event.preventDefault()
  if (!searchItemBudget.classList.contains("valid")) {
    modalSearchPopupError.classList.add("budget-popup--active")
    setTimeout(() => {
      modalSearchPopupError.classList.remove("budget-popup--active")
    }, 1200)
    return false
  } else {
    modalSearchSuccess.classList.add("show")
    bodyEl.classList.add("no-scroll")
    setTimeout(() => {
      modalSearchInner.style.transform = "rotateX(0deg)"
    }, 500)
  }
}

modalSearchForm.addEventListener("submit", function (event) {
  //* для тестирования можно оставить event.preventDefault() чтобы форма не отправлялась на сервер и не было перезагрузки страницы ===>

  event.preventDefault()

  if (modalSearchInput.classList.contains("valid")) {
    modalSearchPopup.classList.add("show")
    resetInputStyles()

    setTimeout(() => {
      modalSearchPopup.classList.remove("show")
    }, 2000)
    setTimeout(() => {
      modalSearchInner.style.transform = "rotateX(90deg)"
    }, 7000)
    setTimeout(() => {
      modalSearchSuccess.classList.remove("show")
      bodyEl.classList.remove("no-scroll")
    }, 7500)
  } else {
    modalSearchUnsuccessPopup.classList.add("search-modal-popup--active")

    setTimeout(() => {
      modalSearchUnsuccessPopup.classList.remove("search-modal-popup--active")
    }, 1200)

    return false
  }
})

modalSearchCloseBtn.addEventListener("click", function () {
  modalSearchInner.style.transform = "rotateX(90deg)"
  setTimeout(() => {
    bodyEl.classList.remove("no-scroll")
    modalSearchSuccess.classList.remove("show")
  }, 700)
})

modalSearchSuccess.addEventListener("click", function () {
  modalSearchInner.style.transform = "rotateX(90deg)"
  setTimeout(() => {
    bodyEl.classList.remove("no-scroll")
    modalSearchSuccess.classList.remove("show")
  }, 700)
})

modalSearchInner.addEventListener("click", function (e) {
  e.stopPropagation()
})

function resetInputStyles() {
  inputsValid.forEach((input) => {
    input.value = ""
    input.classList.remove("valid")
    input.classList.remove("invalid")
  })
  searchItemsInputs.forEach((input) => {
    input.value = ""
  })
}
