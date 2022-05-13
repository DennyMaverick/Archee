const houseItems = document.querySelectorAll(".house-item")
const modalTabs = document.querySelectorAll(".modal-type__text")
const modalTypeBtn = document.querySelector(".modal-type__btn")

houseItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const contentId = event.target.closest(".house-item").dataset.type
    const currentContent = document.querySelector("#" + contentId)

    modalTabs.forEach((tab) => {
      tab.classList.add("hide")
    })

    currentContent.classList.remove("hide")

    houseItems.forEach((item) => {
      item.classList.remove("house-item--active")
    })
    this.classList.add("house-item--active")

    modalTypeBtn.classList.remove("hide-btn")
  })
})
