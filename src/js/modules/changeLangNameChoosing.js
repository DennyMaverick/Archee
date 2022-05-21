// удаление текущей надписи выбора языка в выпадающем списке

let hash = window.location.hash
// начало hash массива строки начинается со второго символа - ru или en
hash = hash.substr(1)
const currentLangListItem = document.querySelector(`.lang-list__${hash}`)

currentLangListItem.classList.add("hide")
