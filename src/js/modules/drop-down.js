// drop-down lang
const arrowsDown = document.querySelectorAll(".lang__arrow")
const langLists = document.querySelectorAll(".lang-list")

arrowsDown.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    langLists.forEach(function (list) {
      list.classList.toggle("lang-list__show")
    })
    this.classList.toggle("lang__arrow-rotate")
  })
})
