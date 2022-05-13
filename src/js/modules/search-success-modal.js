const searchForm = document.querySelector(".search__form")
const modalSearchSuccess = document.querySelector(".modal-search-success")
const bodyEl = document.querySelector("body")
const modalSearchInner = document.querySelector(".modal-search__inner")

searchForm.addEventListener("submit", showModalForm)

function showModalForm() {
  modalSearchSuccess.classList.add("show")
  bodyEl.classList.add("no-scroll")
  console.log("modalSearchInner: ", modalSearchInner)
  setTimeout(() => {
    modalSearchInner.style.transform = "rotateX(0deg)"
  }, 500)
}
