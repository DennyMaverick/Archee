const cityTypes = {
  "modal-type-indoor": {
    ru: "Внутренняя Структура",
    en: "Indoor Structure",
  },
  "modal-type-outdoor": {
    ru: "Наружняя Структура",
    en: "Outdoor Structure",
  },
  "modal-type-furniture": {
    ru: "Современная Мебель",
    en: "Modern Furniture",
  },
  "modal-type-kitchen": {
    ru: "Современная Кухня",
    en: "Modern Kitchen",
  },
}

const houseItems = document.querySelectorAll(".house-item")
const modalTabs = document.querySelectorAll(".modal-type__text")
const modalTypeBtn = document.querySelector(".modal-type__btn")
const searchInputType = document.querySelector(".search__item-input-type")
const langName = document.querySelector(".lang__name")
const modalTypeInner = document.querySelector(".modal-type__inner")
const modalType = document.querySelector(".modal-type")
const bodyEl = document.querySelector("body")
const menuTypeList = document.querySelector(".menu-type")

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
  menuTypeList.classList.remove("show")
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
  searchInputType.classList.add("valid")
  searchInputType.classList.remove("invalid")
}
