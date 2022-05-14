let inputs = document.querySelectorAll("input[data-rules]")

for (let input of inputs) {
  input.addEventListener("blur", function () {
    let rules = this.dataset.rules
    let value = this.value
    let check

    switch (rules) {
      //* === Phone ===

      case "tel":
        check = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)
        break
      case "number":
        check = /^\d+$/.test(value)
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


