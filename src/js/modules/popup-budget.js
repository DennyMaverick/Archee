const budgetIcon = document.querySelector(".budget")
const budgetPopup = document.querySelector(".budget-popup")

budgetIcon.addEventListener("click", () => {
  budgetPopup.classList.add("budget-popup--active")
  setTimeout(() => {
    budgetPopup.classList.remove("budget-popup--active")
  }, 1500)
})
