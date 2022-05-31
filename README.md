# Archee

![css/html/javascript](https://github.com/DennyMaverick/Archee/raw/main/src/img/intro/archee.png)

RU:

<p>
  Представляю вашему вниманию проект Archee, что был создан за 1 месяц работы. И я горжусь, что у меня есть данный сайт в моем портфолио. Основные причины, почему я люблю данный проект:
</p>

<ul>
  <li>Я приобрел ценный опыт, работая над проектом: cтал лучше понимать систему сборки gulp на уровне подключения всех нужных плагинов и понимания других тонкостей работы с данным менеджером проектов.</li>
  <li>Получил опыт работы с Pixel Perfect</li>
  <li>Улучшил навык работы с Git</li>
  <li>Открыл несколько новых для меня методов в JavaScript</li>
  <li>Открыл один из способов добавления иностанных языков на сайт</li>
  <li>Улучшил навыки flex-box и адаптивной верстки</li>
  <li>После каждого коммита чувствовал вдохновение, просматривая результат работы на своем смартфоне:)</li>
</ul>  

<p>
  Технологии, что я использовал:
</p>

![sass](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/1.svg)
![css/html/javascript](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/2.svg)
![pixel-perfect](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/3.svg)
![bem-naming](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/4.svg)
![swiper.js](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/5.svg)
![gulp](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/6.svg)
![svg-sprites](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/7.svg)


EN: 

***

<p>
  I'm glad to present the project Archee! This project was created for about 1 month. And I pride that I have it in my portfolio. The main reasons why I love this project:
</p>  

<ul>
  <li>I had got the big experience, working the project: I have become to understand gulp on level of adding all needed plugins and understanding other details with gulp.</li>
  <li>I had got the experience of working with Pixel Perfect</li>
  <li>I had improved the skill of working with Git</li>
  <li>I had opened a few new methods in JavaScript</li>
  <li>I had opened one of the ways how to add foreign languages on a site</li>
  <li>I had improved the skills of flex-box and adaptive layout</li>
  <li>After each commit I felt the inpire, looking the result of work on my smartphone:)</li>
</ul>  
  
<p>  
  The technologies I used:
</p>

![sass](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/1.svg)
![css/html/javascript](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/2.svg)
![pixel-perfect](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/3.svg)
![bem-naming](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/4.svg)
![swiper.js](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/5.svg)
![gulp](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/6.svg)
![svg-sprites](https://github.com/DennyMaverick/Archee/raw/main/img-readme/bages/7.svg)



### Languages


<p>
  User may choose the language and it will be done on all site. All words translate on Russian or English languages, all placeholders in inputs also translate, the text in slider is also correctly translates. To use translation on the page I set the classes, starting with '.lang-' to all elements I want to translate and took the object langs and put there all keys that have the value of according selectors: 
</p>  

```
const langs = {
  title: {
    ru: "Проект Archee",
    en: "Archee Project",
  },

  //* ======= Section Intro

  "intro-title": {
    ru: "Архитектура, которая знает о чем вы мечтаете",
    en: "Architecture that recognizes all your sensibilities",
  },
  "intro-description": {
    ru: "Добро пожаловать в Archee, надежного делового партнера на вашем пути к построению лучшего будущего для всех",
    en: "Welcome to Archee, a reliable business partner on your path to building a better looking future for all.",
  },
```

<p>
  Next I get the value of hash (value = ru or en ) using this code: 
</p>  

```
let hash = window.location.hash

hash = hash.substr(1)
```

<p>
  And next I iterate through the object and set in each element the value that is in the object langs:
</p>

```
// iterate through the object
  for (let key in langs) {
    let elem = document.querySelector(".lang-" + key)
    
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash]
    }
  }
``` 


## Adaptive


<p>
  The site is adaptive and it looks nice on different screens: 
</p>  

![mobile](https://github.com/DennyMaverick/Archee/raw/main/img-readme/archee-mobile.png)
![desktop](https://github.com/DennyMaverick/Archee/raw/main/img-readme/archee-desktop.png)

![search-form](https://github.com/DennyMaverick/Archee/raw/main/img-readme/search-form.png)



## Search Form Validation


В проекте добавлена валидация форм. В секции Search выбора услуг, если одно из полей формы заполнено неверно, появляется всплывающее окно:

![search-form](https://github.com/DennyMaverick/Archee/raw/main/img-readme/search-form-invalid.gif)

Всплывающие окна появляются поочередно. Это достигнуто с помощью данного кода:

```

for (let i = 0; i < searchItems.length; i++) {
      if (!searchItems[i].classList.contains("valid")) {
        searchItems.forEach((item) => {
          item.classList.remove("invalid")
        })
        searchItems[i].classList.add("invalid")
        searchItems[i].focus()
        const inputTypeId = searchItems[i].dataset.type
        const searchPopup = document.querySelector(`.search__${inputTypeId}-popup--unsuccess`)
        searchPopup.classList.add(`search__${inputTypeId}-popup--active`)
        setTimeout(() => {
          searchPopup.classList.remove(`search__${inputTypeId}-popup--active`)
        }, 4000)
        break
      }
    }

```

## Modal windows

Существует определенный список городов в массивах (на русском и английском языках), и если совпадение найдено над полем 'Местоположение' в форме при успешном вводе города высвечивается всплывающее окно:

```

const citiesRuLang = ["Москва", "Токио", "Рим", "Лондон", "Париж", "Нью-Йорк"]

const citiesEnLang = ["Moskow", "Tokio", "Roma", "London", "Paris", "New-York"]

locationInput.addEventListener("change", function () {
   let currentLangValue = document.querySelector(".lang__name").innerHTML
   let currentArray = eval(`cities${currentLangValue.charAt(0).toUpperCase() + currentLangValue.slice(1).toLowerCase()}Lang`)
   checkUpperCase = !!(this.value.charAt(0).toUpperCase() == this.value.charAt(0))

   if (!currentArray.includes(this.value)) {
     locationIcon.classList.add("active-icon")
     setTimeout(() => {
     locationIcon.classList.remove("active-icon")
   }, 4000)
      searchLocationPopupUnSuccess.classList.add("search-popup--active")
      setTimeout(() => {
      searchLocationPopupUnSuccess.classList.remove("search-popup--active")
   }, 3000)
      this.classList.add("invalid")
      this.classList.remove("valid")    
   } else if (currentArray.includes(this.value) && checkUpperCase) {
     searchLocationPopupSuccess.classList.add("search-popup--active")
     this.classList.remove("invalid")
     this.classList.add("valid")
     setTimeout(() => {
     searchLocationPopupSuccess.classList.remove("search-popup--active")
   }, 3000)
  }
 })

```
RU:

***

<p>
  При выборе города, наведя курсор мыши на текст с городом, динамически меняется изображение. При наведении на иконки в форме, они увеличиваются в размере и меняют цвет. Первое достгнуто благодаря CSS-анимации трансформирования, а второе — благодаря использованию Svg-спрайта:
</p>

EN:

***

<p>
  You can see the icons in search form. They resize and change the color when you hover. I used the SVG-sprites for it, changing the property fill and using the animation transform(scale()). When you will click on these icons the modal windows will be opened, where you can change some options:
</p> 



![modal-windows](https://github.com/DennyMaverick/Archee/raw/main/img-readme/modal-windows.gif)

## Modal location


