const locationIcon = document.querySelector(".location")
const modalLocation = document.querySelector(".modal-location")
const modalLocationInner = document.querySelector(".modal-location__inner")
const bodyEl = document.querySelector("body")
const modalCityNames = document.querySelectorAll(".modal-location__city-name")
const searchInputLocation = document.querySelector(".search__item--location")
const modalCloseBtn = document.querySelector(".modal-location__close-btn")

locationIcon.addEventListener("click", () => {
  modalLocation.classList.add("show")
  bodyEl.classList.add("no-scroll")
  setTimeout(() => {
    modalLocationInner.style.transform = "rotateX(0deg)"
  }, 300)
})

modalCityNames.forEach((city) => {
  city.addEventListener("click", function (event) {
    const cityName = event.target.dataset.city
    searchInputLocation.value = cityName
    modalLocationInner.style.transform = "rotateX(90deg)"
    bodyEl.classList.remove("no-scroll")
    setTimeout(() => {
      modalLocation.classList.remove("show")
    }, 600)
  })
})

modalCloseBtn.addEventListener("click", () => {
  modalLocationInner.style.transform = "rotateX(90deg)"
  bodyEl.classList.remove("no-scroll")
  setTimeout(() => {
    modalLocation.classList.remove("show")
  }, 600)
})

modalLocation.addEventListener("click", function () {
  modalLocationInner.style.transform = "rotateX(90deg)"
  bodyEl.classList.remove("no-scroll")
  setTimeout(() => {
    this.classList.remove("show")
  }, 600)
})

modalLocationInner.addEventListener("click", (event) => {
  event.stopPropagation()
})
