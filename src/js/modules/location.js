const modalCities = document.querySelectorAll(".modal-location__city-name")
const modalPictureImg = document.querySelector(".modal-location__picture")
const modalPictureWebp = document.querySelector(".modal-location__image picture source")

modalCities.forEach((item) => {
  item.onmouseenter = (event) => {
    const dataCity = event.target.dataset.city
    modalPictureImg.src = `./img/modals/modal-location/${dataCity}.jpg`
    modalPictureWebp.srcset = `./img/modals/modal-location/${dataCity}.jpg`
  }
})
