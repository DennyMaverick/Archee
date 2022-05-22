const cityLangs = {
  "modal-location-city-moskow": {
    ru: "Москва",
    en: "Moskow",
  },
  "modal-location-city-tokyo": {
    ru: "Токио",
    en: "Tokyo",
  },
  "modal-location-city-new-york": {
    ru: "Нью-Йорк",
    en: "New-York",
  },
  "modal-location-city-paris": {
    ru: "Париж",
    en: "Paris",
  },
  "modal-location-city-roma": {
    ru: "Рим",
    en: "Roma",
  },
  "modal-location-city-london": {
    ru: "Лондон",
    en: "London",
  },
}

const citiesRuLang = ["Москва", "Токио", "Рим", "Лондон", "Париж", "Нью-Йорк"]

const citiesEnLang = ["Moskow", "Tokio", "Roma", "London", "Paris", "New-York"]

const locationIcon = document.querySelector(".location")
const modalLocation = document.querySelector(".modal-location")
const modalLocationCloseBtn = document.querySelector(".modal-location .modal__close-btn")
const modalLocationInner = document.querySelector(".modal-location__inner")
const bodyEl = document.querySelector("body")
const modalCityNames = document.querySelectorAll(".modal-location__city-name")
const searchInputLocation = document.querySelector(".search__item-input-location")
const modalCloseBtns = document.querySelectorAll(".modal__close-btn")
const langName = document.querySelector(".lang__name")
const locationInput = document.getElementById("location-input")
const searchLocationPopupSuccess = document.querySelector(".search__location-popup--success")
const searchLocationPopupUnSuccess = document.querySelector(".search__location-popup--unsuccess")
const menuTypeList = document.querySelector(".menu-type")

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

    searchInputLocation.classList.add("valid")
    searchInputLocation.classList.remove("invalid")
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
    menuTypeList.classList.remove("show")
  })
})

modalLocationCloseBtn.addEventListener("click", () => {
  resetPicture()
})

modalLocation.addEventListener("click", function () {
  resetPicture()
})

function resetPicture() {
  const modalPictureImg = document.querySelector(".modal-location__picture")
  const modalPictureWebp = document.querySelector(".modal-location__image picture source")
  setTimeout(() => {
    modalPictureImg.src = `./img/intro/modern-house.png`
    modalPictureWebp.srcset = `./img/intro/modern-house.png`
  }, 500)
}

locationInput.addEventListener("change", function () {
  let currentLangValue = document.querySelector(".lang__name").innerHTML
  let currentArray = eval(`cities${currentLangValue.charAt(0).toUpperCase() + currentLangValue.slice(1).toLowerCase()}Lang`)
  checkUpperCase = !!(this.value.charAt(0).toUpperCase() == this.value.charAt(0))

  if (!currentArray.includes(this.value)) {
    locationIcon.classList.add("active-icon")
    setTimeout(() => {
      locationIcon.classList.remove("active-icon")
    }, 4000)
    searchLocationPopupUnSuccess.classList.add("search-popup--active")
    setTimeout(() => {
      searchLocationPopupUnSuccess.classList.remove("search-popup--active")
    }, 3000)
    this.classList.add("invalid")
    this.classList.remove("valid")
  } else if (currentArray.includes(this.value) && checkUpperCase) {
    searchLocationPopupSuccess.classList.add("search-popup--active")
    this.classList.remove("invalid")
    this.classList.add("valid")
    setTimeout(() => {
      searchLocationPopupSuccess.classList.remove("search-popup--active")
    }, 3000)
  }
})

locationInput.addEventListener("blur", function () {
  checkSymbols = !!(this.value === "")

  if (checkSymbols) {
    this.classList.add("invalid")
  }
})