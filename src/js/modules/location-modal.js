const cityLangs = {
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

const locationIcon = document.querySelector(".location")
const modalLocation = document.querySelector(".modal-location")
const modalLocationInner = document.querySelector(".modal-location__inner")
const bodyEl = document.querySelector("body")
const modalCityNames = document.querySelectorAll(".modal-location__city-name")
const searchInputLocation = document.querySelector(".search__item--location")
const modalCloseBtns = document.querySelectorAll(".modal__close-btn")
const langName = document.querySelector(".lang__name")

const allLangs = ["ru", "en"]

locationIcon.addEventListener("click", () => {
  modalLocation.classList.add("show")
  bodyEl.classList.add("no-scroll")
  setTimeout(() => {
    modalLocationInner.style.transform = "rotateX(0deg)"
  }, 300)
})

modalCityNames.forEach((city) => {
  city.addEventListener("click", function (event) {
    const dataCity = event.target.dataset.city
    let currentLang = langName.textContent
    let hash = window.location.hash
    hash = hash.substr(1)
    const currentKey = `modal-location-city-${dataCity}`

    if (!allLangs.includes(hash)) {
      if (searchInputLocation && cityLangs[currentKey][currentLang]) {
        searchInputLocation.value = cityLangs[currentKey][currentLang]
      }
    } else {
      if (searchInputLocation && cityLangs[currentKey][hash]) {
        searchInputLocation.value = cityLangs[currentKey][hash]
      }
    }

    modalLocationInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      modalLocation.classList.remove("show")
      bodyEl.classList.remove("no-scroll")
    }, 500)

    resetPicture()
  })
})

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalLocationInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      modalLocation.classList.remove("show")
    }, 600)

    resetPicture()
  })
})

modalLocation.addEventListener("click", function () {
  modalLocationInner.style.transform = "rotateX(90deg)"

  setTimeout(() => {
    bodyEl.classList.remove("no-scroll")
    this.classList.remove("show")
  }, 600)

  resetPicture()
})

modalLocationInner.addEventListener("click", (event) => {
  event.stopPropagation()
})

function resetPicture() {
  const modalPictureImg = document.querySelector(".modal-location__picture")
  const modalPictureWebp = document.querySelector(".modal-location__image picture source")
  setTimeout(() => {
    modalPictureImg.src = `./img/intro/modern-house.png`
    modalPictureWebp.srcset = `./img/intro/modern-house.png`
  }, 500)
}
