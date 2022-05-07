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

modalTypeBtn.addEventListener("click", (event) => {
  const modalContentInner = event.target.closest(".modal__inner")
  const modalTypeInner = document.querySelector(".modal-type__inner")
  const modalType = document.querySelector(".modal-type")
  const bodyEl = document.querySelector("body")

  const currentTexts = modalContentInner.querySelectorAll(".modal-type__text")
  currentTexts.forEach((item) => {
    if (!item.classList.contains("hide")) {
      const itemId = item.id
      let hash = window.location.hash
      hash = hash.substr(1)
      const currentKey = `modal-type-${itemId}`
      if (searchInputType && cityTypes[currentKey][hash]) {
        searchInputType.value = cityTypes[currentKey][hash]
      }
    }
  })

  modalTypeInner.style.transform = "rotateX(90deg)"

  setTimeout(() => {
    modalType.classList.remove("show")
    bodyEl.classList.remove("no-scroll")
  }, 500)
})

houseItems.forEach((item) => {
  item.addEventListener("click", function () {
    const modalType = document.querySelector(".modal-type")
    const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    modalType.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    })
  })
})
