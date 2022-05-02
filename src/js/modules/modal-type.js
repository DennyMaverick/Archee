const cityTypes = {
  "modal-location-city-moskow": {
    ru: "москва",
    en: "moskow",
  },
  "modal-location-city-tokyo": {
    ru: "токио",
    en: "tokyo",
  },
  "modal-location-city-new-york": {
    ru: "нью йорк",
    en: "new york",
  },
  "modal-location-city-paris": {
    ru: "париж",
    en: "paris",
  },
  "modal-location-city-roma": {
    ru: "рим",
    en: "roma",
  },
  "modal-location-city-london": {
    ru: "лондон",
    en: "london",
  },
}

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

// modalTypeNames.forEach((type) => {
//   type.addEventListener("click", function (event) {
//     const dataCity = event.target.dataset.city
//     let hash = window.location.hash
//     hash = hash.substr(1)
//     const currentKey = `modal-location-city-${dataCity}`
//     if (searchInputLocation && cityLangs[currentKey][hash]) {
//       searchInputLocation.value = cityLangs[currentKey][hash]
//     }

//     modalLocationInner.style.transform = "rotateX(90deg)"

//     setTimeout(() => {
//       modalLocation.classList.remove("show")
//       bodyEl.classList.remove("no-scroll")
//     }, 500)
//   })
// })

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
