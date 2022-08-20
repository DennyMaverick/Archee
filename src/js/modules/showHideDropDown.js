// drop-down lang
const arrowsDown = document.querySelectorAll(".lang__arrow")
const arrowsBtn = document.querySelectorAll(".lang__arrow-btn")

arrowsBtn.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    const currentLangList = this.nextElementSibling
    currentLangList.classList.toggle("lang-list__show")
    this.querySelector(".lang__arrow").classList.toggle("lang__arrow-rotate")
  })
})

window.addEventListener("click", (e) => {
  const langLists = document.querySelectorAll(".lang-list")
  langLists.forEach((item) => {
    if (item.classList.contains("lang-list__show")) {
      if (!e.target.classList.contains("lang__arrow-btn")) {
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
