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

window.addEventListener("click", (e) => {
  const langLists = document.querySelectorAll(".lang-list")
  langLists.forEach((item) => {
    if (item.classList.contains("lang-list__show")) {
      if (!e.target.classList.contains("lang__arrow")) {
        langLists.forEach((item) => {
          item.classList.remove("lang-list__show")
        })
        arrowsDown.forEach((item) => {
          item.classList.remove("lang__arrow-rotate")
        })
      }
    }
  })
})
