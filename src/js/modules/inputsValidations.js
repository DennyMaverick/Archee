let inputs = document.querySelectorAll("input[data-rules]")

for (let input of inputs) {
  input.addEventListener("change", function () {
    let rules = this.dataset.rules
    let value = this.value
    let check

    switch (rules) {
      //* === Phone ===

      case "tel":
        check = !!(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value) && value.search(/\s/) === -1)
        break
      case "budget-input":
        check = !!(/^[0-9]+$/.test(value) && value.length > 3 && value.length <= 7 && value.search(/\s/) === -1)
        break
      case "type-input":
        check = !!(/^[а-яА-Яa-zA-Z]+\s/.test(value) && this.value !== "")
        break
    }
    if (check) {
      this.classList.remove("invalid")
      this.classList.add("valid")
    } else {
      this.classList.remove("valid")
      this.classList.add("invalid")
    }
  })
}
