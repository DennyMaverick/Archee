const searchForm = document.querySelector(".search__form")
const searchItems = document.querySelectorAll(".search__item-input")
const modalSearchSuccess = document.querySelector(".modal-search-success")
const bodyEl = document.querySelector("body")
const modalSearchInner = document.querySelector(".modal-search__inner")
const modalSearchForm = document.querySelector(".modal-search__form")
const modalSearchInput = document.querySelector(".modal-search__input")
const modalSearchPopup = document.querySelector(".modal-search__popup")
const searchItemLocation = document.querySelector(".search__item--location")
const searchItemBudget = document.querySelector(".search__item-input-budget")
let inputsValid = document.querySelectorAll("input[data-rules]")
const searchItemsInputs = document.querySelectorAll(".search__item-input")
const modalSearchUnsuccessPopup = document.querySelector(".modal-search__popup--unsuccess")
const modalSearchUnsuccessBudgetPopup = document.querySelector(".search__budget-popup--unsuccess")
const searchItemsArray = Array.prototype.slice.call(searchItems)

searchForm.addEventListener("submit", showModalForm)

function showModalForm(event) {
  event.preventDefault()

  function isEveryValid(element) {
    return element.classList.contains("valid")
  }

  if (searchItemsArray.every(isEveryValid)) {
    showModal()
  } else {
    for (let i = 0; i < searchItems.length; i++) {
      if (!searchItems[i].classList.contains("valid")) {
        searchItems.forEach((item) => {
          item.classList.remove("invalid")
        })
        searchItems[i].classList.add("invalid")
        searchItems[i].focus()
        const inputTypeId = searchItems[i].dataset.type
        const searchPopup = document.querySelector(`.search__${inputTypeId}-popup--unsuccess`)
        searchPopup.classList.add(`search__${inputTypeId}-popup--active`)
        setTimeout(() => {
          searchPopup.classList.remove(`search__${inputTypeId}-popup--active`)
        }, 4000)
        break
      }
    }
  }
}

function showModal() {
  modalSearchSuccess.classList.add("show")
  bodyEl.classList.add("no-scroll")
  setTimeout(() => {
    modalSearchInner.style.transform = "rotateX(0deg)"
  }, 500)
}

function showPopupErrorBudget() {
  modalSearchUnsuccessBudgetPopup.classList.add("search-popup--active")
  setTimeout(() => {
    modalSearchUnsuccessBudgetPopup.classList.remove("search-popup--active")
  }, 1200)
}

// modalSearchForm.addEventListener("submit", function (event) {
//   //* для тестирования можно оставить event.preventDefault() чтобы форма не отправлялась на сервер и не было перезагрузки страницы ===>

//   event.preventDefault()

//   if (modalSearchInput.classList.contains("valid")) {
//     modalSearchPopup.classList.add("show")
//     resetInputStyles()

//     setTimeout(() => {
//       modalSearchPopup.classList.remove("show")
//     }, 2000)
//     setTimeout(() => {
//       modalSearchInner.style.transform = "rotateX(90deg)"
//     }, 7000)
//     setTimeout(() => {
//       modalSearchSuccess.classList.remove("show")
//       bodyEl.classList.remove("no-scroll")
//     }, 7500)
//   } else {
//     modalSearchUnsuccessPopup.classList.add("search-modal-popup--active")

//     setTimeout(() => {
//       modalSearchUnsuccessPopup.classList.remove("search-modal-popup--active")
//     }, 1200)
//   }
// })

function resetInputStyles() {
  inputsValid.forEach((input) => {
    input.value = ""
    input.classList.remove("valid")
    input.classList.remove("invalid")
  })
  searchItemsInputs.forEach((input) => {
    input.value = ""
    input.classList.remove("valid")
  })
}
