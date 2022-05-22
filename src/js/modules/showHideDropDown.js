// drop-down lang
const arrowsDown = document.querySelectorAll(".lang__arrow")

arrowsDown.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    const currentClosestArrowBtn = this.closest(".lang__arrow-btn")
    const currentLangList = currentClosestArrowBtn.nextElementSibling

    currentLangList.classList.toggle("lang-list__show")

    this.classList.toggle("lang__arrow-rotate")
  })
})
