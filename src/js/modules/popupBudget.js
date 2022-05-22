const budgetIcon = document.querySelector(".budget")
const budgetPopup = document.querySelector(".search__budget-popup-natification")

budgetIcon.addEventListener("click", () => {
  budgetPopup.classList.add("search__budget-popup--active")
  setTimeout(() => {
    budgetPopup.classList.remove("search__budget-popup--active")
  }, 1500)
})
