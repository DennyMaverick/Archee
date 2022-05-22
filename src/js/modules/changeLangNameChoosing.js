// удаление текущей надписи выбора языка в выпадающем списке

let hash = window.location.hash
// начало hash массива строки начинается со второго символа - ru или en
hash = hash.substr(1)
const currentLangListItems = document.querySelectorAll(`.lang-list__${hash}`)

currentLangListItems.forEach((item) => {
  item.classList.add("hide")
})

