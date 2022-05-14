const cityTypes = {
  "modal-type-indoor": {
    ru: "внутренняя структура",
    en: "indoor structure",
  },
  "modal-type-outdoor": {
    ru: "наружняя структура",
    en: "outdoor structure",
  },
  "modal-type-furniture": {
    ru: "современная мебель",
    en: "modern furniture",
  },
  "modal-type-kitchen": {
    ru: "современная кухня",
    en: "modern kitchen",
  },
}

const houseItems = document.querySelectorAll(".house-item")
const modalTabs = document.querySelectorAll(".modal-type__text")
const modalTypeBtn = document.querySelector(".modal-type__btn")
const searchInputType = document.querySelector(".search__item--type")
const langName = document.querySelector(".lang__name")
const modalTypeInner = document.querySelector(".modal-type__inner")
const modalType = document.querySelector(".modal-type")
const bodyEl = document.querySelector("body")



//* При клике на кнопку 'Принять' в модальном окне modal-type происходит закрытие модального окна с отображением значения выбранного типа работ в поле input в секции === search ===

//* При смене языка все работает корректно, когда hash в строке браузера изменен на якорь ссылки, значение типа работ в поле input отображается корректно

modalTypeBtn.addEventListener("click", (event) => {
  const modalContentInner = event.target.closest(".modal__inner")

  const allLangs = ["ru", "en"]

  const currentTexts = modalContentInner.querySelectorAll(".modal-type__text")
  currentTexts.forEach((item) => {
    if (!item.classList.contains("hide")) {
      let currentLang = langName.textContent

      const itemId = item.id

      const currentKey = `modal-type-${itemId}`

      let hash = window.location.hash

      hash = hash.substr(1)

      if (!allLangs.includes(hash)) {
        if (searchInputType && cityTypes[currentKey][currentLang]) {
          searchInputType.value = cityTypes[currentKey][currentLang]
        }
      } else {
        if (searchInputType && cityTypes[currentKey][hash]) {
          searchInputType.value = cityTypes[currentKey][hash]
        }
      }
    }
  })

  modalTypeInner.style.transform = "rotateX(90deg)"

  setTimeout(() => {
    modalType.classList.remove("show")
    bodyEl.classList.remove("no-scroll")
  }, 500)

  resetModalType()
})

//* Плавный скролл вниз при клике на иконки типов работ

houseItems.forEach((item) => {
  item.addEventListener("click", function () {
    const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    modalType.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    })
  })
})

function resetModalType() {
  const modalTypeTexts = document.querySelectorAll(".modal-type__text")
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
