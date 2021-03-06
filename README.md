# Archee

![css/html/javascript](https://github.com/DennyMaverick/Archee/raw/main/src/img/intro/archee.png)

RU:

<p>
  Представляю вашему вниманию проект Archee, что был создан за 1 месяц работы. И я горжусь, что у меня есть данный сайт в портфолио. Основные причины, почему я люблю данный проект:
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


RU:

***

<p>
  Пользователь может выбрать язык и он будет применен на сайте. Каждое слово на сайте переводится на русский и английский языки, в том числе плейсхолдеры в полях input и надписи в слайдере. Чтобы использовать перевод на странице сайта я установил классы, начиная с  '.lang-' ко всем элементам, которым требовался перевод. Далее нужно взять объект 'langs' и положить туда все ключи, что имеют значение соответствующим селекторам: 
</p>

```
const langs = {
  title: {
    ru: "Проект Archee",
    en: "Archee Project",
  },
  //
  //* ======= Section Intro
  //
  "intro-title": {
    ru: "Архитектура, которая знает о чем вы мечтаете",
    en: "Architecture that recognizes all your sensibilities",
  },
  //
  "intro-description": {
    ru: "Добро пожаловать в Archee, надежного делового партнера на вашем пути к построению лучшего будущего для всех",
    en: "Welcome to Archee, a reliable business partner on your path to building a better looking future for all.",
  },
```

EN:

***

<p>
  User may choose the language and it will be done on all site. All words translate on Russian or English languages, all placeholders in inputs are also translated, the text in slider is also correctly translated. To use translation on the landing page I set the classes, starting with '.lang-' to all elements I want to take the object 'langs' and put there all keys that have the value of according selectors: 
</p>  

```
const langs = {
  title: {
    ru: "Проект Archee",
    en: "Archee Project",
  },
  //
  //* ======= Section Intro
  //
  "intro-title": {
    ru: "Архитектура, которая знает о чем вы мечтаете",
    en: "Architecture that recognizes all your sensibilities",
  },
  //
  "intro-description": {
    ru: "Добро пожаловать в Archee, надежного делового партнера на вашем пути к построению лучшего будущего для всех",
    en: "Welcome to Archee, a reliable business partner on your path to building a better looking future for all.",
  },
```

RU:

***

<p>
  Дальше нужно получить значение хэш (value = ru или en ) используя следующий код: 
</p> 

```
let hash = window.location.hash
//
hash = hash.substr(1)
```

EN:

***

<p>
  Next I get the value of hash (value = ru or en ) using this code: 
</p>  

```
let hash = window.location.hash
//
hash = hash.substr(1)
```

RU:

***

<p>
  Затем я прохожу по объекту и устанавливаю  каждому элементу значение, которое лежит в объекте 'langs':
</p>

```
// iterate through the object
  for (let key in langs) {
    let elem = document.querySelector(".lang-" + key)
    //
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash]
    }
  }
``` 

EN:

***

<p>
  And next I iterate through the object and set to each element the value that is in the object 'langs':
</p>

```
// iterate through the object
  for (let key in langs) {
    let elem = document.querySelector(".lang-" + key)
    //
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash]
    }
  }
``` 


## Adaptive

RU:

***

<p>
  Сайт адаптивен и смотрится красиво на различных устройствах (начиная с Galaxy Fold и заканчивая настольными ПК): 
</p> 

EN:

***

<p>
  The site is adaptive and it looks nice on different screens (starting with Galaxy Fold and ending PC): 
</p>  

![mobile](https://github.com/DennyMaverick/Archee/raw/main/img-readme/archee-mobile.png)
![desktop](https://github.com/DennyMaverick/Archee/raw/main/img-readme/archee-desktop.png)

![search-form](https://github.com/DennyMaverick/Archee/raw/main/img-readme/search-form.png)



## Search Form Validation

RU:

***

В проекте добавлена валидация форм. В секции Search выбора услуг, если одно из полей формы заполнено неверно, появляется всплывающее окно:

![search-form](https://github.com/DennyMaverick/Archee/raw/main/img-readme/search-form-invalid.gif)

Всплывающие окна появляются поочередно. Это достигнуто с помощью данного кода:

```

for (let i = 0; i < searchItems.length; i++) {
      if (!searchItems[i].classList.contains("valid")) {
        searchItems.forEach((item) => {
          item.classList.remove("invalid")
        })
        //
        searchItems[i].classList.add("invalid")
        searchItems[i].focus()
        //
        const inputTypeId = searchItems[i].dataset.type
        const searchPopup = document.querySelector(`.search__${inputTypeId}-popup--unsuccess`)
        searchPopup.classList.add(`search__${inputTypeId}-popup--active`)
        //
        setTimeout(() => {
          searchPopup.classList.remove(`search__${inputTypeId}-popup--active`)
        }, 4000)
        break
      }
    }

```

EN:

***

The validation of forms also have added to the project. The pop-up window in a section Search appears if one of the field of the form is filled incorrectly:

![search-form](https://github.com/DennyMaverick/Archee/raw/main/img-readme/search-form-invalid.gif)

The pop-up windows appear for each other. It has reached for this code:

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

## Модальные окна

### Поле 'Местоположение'

RU:

***

Существует определенный список городов в массивах (на русском и английском языках), и если совпадение найдено над полем 'Местоположение' в форме при успешном вводе города высвечивается всплывающее окно:

```

const citiesRuLang = ["Москва", "Токио", "Рим", "Лондон", "Париж", "Нью-Йорк"]

const citiesEnLang = ["Moskow", "Tokio", "Roma", "London", "Paris", "New-York"]

locationInput.addEventListener("change", function () {
   let currentLangValue = document.querySelector(".lang__name").innerHTML
   let currentArray = eval(`cities${currentLangValue.charAt(0).toUpperCase() + currentLangValue.slice(1).toLowerCase()}Lang`)
   checkUpperCase = !!(this.value.charAt(0).toUpperCase() == this.value.charAt(0))
  //
   if (!currentArray.includes(this.value)) {
     locationIcon.classList.add("active-icon")
     setTimeout(() => {
     locationIcon.classList.remove("active-icon")
   }, 4000)
   //
      searchLocationPopupUnSuccess.classList.add("search-popup--active")
      setTimeout(() => {
      searchLocationPopupUnSuccess.classList.remove("search-popup--active")
   }, 3000)
   //
      this.classList.add("invalid")
      this.classList.remove("valid")  
   //
   } else if (currentArray.includes(this.value) && checkUpperCase) {
     searchLocationPopupSuccess.classList.add("search-popup--active")
     this.classList.remove("invalid")
     this.classList.add("valid")
     setTimeout(() => {
     searchLocationPopupSuccess.classList.remove("search-popup--active")
   }, 3000)
   //
  }
 })

```

## Modal windows

### Field 'Location'

EN:

***

The list of the cities exists in the Arrays (in English and in Russian), and if the accordance has found the pop-up window appears above the field 'Location':

```

const citiesRuLang = ["Москва", "Токио", "Рим", "Лондон", "Париж", "Нью-Йорк"]

const citiesEnLang = ["Moskow", "Tokio", "Roma", "London", "Paris", "New-York"]

locationInput.addEventListener("change", function () {
   let currentLangValue = document.querySelector(".lang__name").innerHTML
   let currentArray = eval(`cities${currentLangValue.charAt(0).toUpperCase() + currentLangValue.slice(1).toLowerCase()}Lang`)
   checkUpperCase = !!(this.value.charAt(0).toUpperCase() == this.value.charAt(0))
  //
   if (!currentArray.includes(this.value)) {
     locationIcon.classList.add("active-icon")
     setTimeout(() => {
     locationIcon.classList.remove("active-icon")
   }, 4000)
   //
      searchLocationPopupUnSuccess.classList.add("search-popup--active")
      setTimeout(() => {
      searchLocationPopupUnSuccess.classList.remove("search-popup--active")
   }, 3000)
   //
      this.classList.add("invalid")
      this.classList.remove("valid")  
   //
   } else if (currentArray.includes(this.value) && checkUpperCase) {
     searchLocationPopupSuccess.classList.add("search-popup--active")
     this.classList.remove("invalid")
     this.classList.add("valid")
     setTimeout(() => {
     searchLocationPopupSuccess.classList.remove("search-popup--active")
   }, 3000)
   //
  }
 })

```

### Универсальный скрипт закрытия и открытия модальных окон

RU:

***

В проекте во всех модальных реализован универсальный скрипт закрытия модальных окон (вне модального окна или на крестик). И если есть повторяющиеся модальные окна, также реализовано одно универсальное окно, доступ к которому открывается через дата-атрибут кнопки: 

```
// закрытие вне модального окна

modals.forEach((modal) => {
  modal.addEventListener("click", function () {
    const currentModalInner = this.querySelector(".modal__inner")
    currentModalInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      this.classList.remove("show")
    }, 600)

    resetInputFormStyles()
  })
})

//закрытие модального окна по крестику

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentModal = btn.closest(".modal")
    const currentModalInner = currentModal.querySelector(".modal__inner")
    currentModalInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      currentModal.classList.remove("show")
    }, 600)

    resetInputFormStyles()
  })
})

// открытие модального окна

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentModal = document.querySelector(e.target.dataset.modal)
    const currentModalInner = currentModal.querySelector(".modal__inner")
    currentModal.classList.add("show")

    setTimeout(() => {
    
    // анимация при открытии модального окна
    
      currentModalInner.style.transform = "rotateX(0deg)"
      bodyEl.classList.add("no-scroll")
    }, 600)
  })
})

//запрет всплытия события click

modalInners.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation()
  })
})

```

### The universal script of closing and opening of modal windows

EN:

***

The universal script was made for closing the modal windows (outside the window or on a cross). Also the modal window was made if the modal windows repeat. The access opens throught the data-atribute of the button:

```
// closing the modal window when the click is outside

modals.forEach((modal) => {
  modal.addEventListener("click", function () {
    const currentModalInner = this.querySelector(".modal__inner")
    currentModalInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      this.classList.remove("show")
    }, 600)

    resetInputFormStyles()
  })
})

// closing the modal window when the cross is clicked

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentModal = btn.closest(".modal")
    const currentModalInner = currentModal.querySelector(".modal__inner")
    currentModalInner.style.transform = "rotateX(90deg)"

    setTimeout(() => {
      bodyEl.classList.remove("no-scroll")
      currentModal.classList.remove("show")
    }, 600)

    resetInputFormStyles()
  })
})

// opening the modal window

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentModal = document.querySelector(e.target.dataset.modal)
    const currentModalInner = currentModal.querySelector(".modal__inner")
    currentModal.classList.add("show")

    setTimeout(() => {
    
    // animation when the modal window is opening
    
      currentModalInner.style.transform = "rotateX(0deg)"
      bodyEl.classList.add("no-scroll")
    }, 600)
  })
})

//to forbide the surfacing the event 'click'

modalInners.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation()
  })
})

```


RU:

***

<p>
  При выборе города, наведя курсор мыши на текст с городом, динамически меняется изображение. При наведении на иконки в форме, они увеличиваются в размере и меняют цвет. Первое достгнуто благодаря CSS-анимации трансформирования, а второе — благодаря использованию Svg-спрайта:
</p>

![modal-windows](https://github.com/DennyMaverick/Archee/raw/main/img-readme/modal-windows.gif)

EN:

***

<p>
  You can see the icons in search form. They resize and change the color when you hover. I used the SVG-sprites for it, changing the property fill and using the animation transform(scale()). When you will click on these icons the modal windows will be opened, where you can change some options:
</p> 



![modal-windows](https://github.com/DennyMaverick/Archee/raw/main/img-readme/modal-windows.gif)

### GIT

![GIT](https://github.com/DennyMaverick/Archee/raw/main/img-readme/git.png)

RU:

Работая над проектом, я использовал систему контроля версий GIT. Это помогло сконцентрироваться на работе и структурировать процесс. 

***

EN:

***

Working on project, I used to the system of control versions GIT. It helped to concentrate on work and to structure the process.

### Gulp

RU:

***

Проект имеет следующую структуру:

<ul>
  <li>config</li>
    <ul>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> app.js </li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> path.js </li>
    </ul>
  <li> <img src="./img-readme/node.png" alt="" width="14" height="15"> node_modules</li>
  <li> <img src="./img-readme/public.png" alt="" width="14" height="15"> public</li>
  <li> <img src="./img-readme/src-folder.png" alt="" width="14" height="15"> src</li>
    <ul>
      <li> <img src="./img-readme/font.png" alt="" width="14" height="15"> font</li>
      <li> <img src="./img-readme/html.png" alt="" width="14" height="15"> html</li>
      <li> <img src="./img-readme/img.png" alt="" width="14" height="15"> img</li>
      <li> <img src="./img-readme/js-folder.png" alt="" width="14" height="15"> js</li>
      <li> <img src="./img-readme/sass.png" alt="" width="14" height="15"> sass</li>
    </ul>  
  <li> <img src="./img-readme/task.png" alt="" width="14" height="15"> task</li>
    <ul>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> clear.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> css.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> favicon.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> font.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> html.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> img.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> js.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> libs.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> scss.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> server.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> svgsprite.js</li>
    </ul>
  <li> <img src="./img-readme/git.png" alt="" width="14" height="15"> .gitignore</li>
  <li> <img src="./img-readme/gulp.png" alt="" width="14" height="15"> gulpfile.js</li>
  <li> <img src="./img-readme/package-json.png" alt="" width="14" height="15"> package.json</li>
</ul>

Существует два файла конфигурации: app.js и path.js. Они нужны для того, чтобы gulp-сборка была универсальна. Каждый раз, начиная новый проект, нужно зайти в эти файлы и поменять нужные данные. app.js содержит настройки плагинов:

![app.js файл](https://github.com/DennyMaverick/Archee/raw/main/img-readme/app.jpg)

path.js содержит пути до входных и выходных данных, а также пути отслеживания watch:

![path.js файл](https://github.com/DennyMaverick/Archee/raw/main/img-readme/path.jpg)

SVG-sprite был сгенерирован с помощью gulp. Использовалась следующая задача:

```

const { src, dest } = require("gulp");

// Конфигурация
// Configuration

const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
// Plugins

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');
const svgcheerio = require('gulp-cheerio');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');

// Обработка JavaScript
// JavaScript processing

const svgsprite = () => {
  return src(path.svgsprite.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JavaScript",
          message: error.message,
        })),
      })
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      svgcheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill")
          $("[stroke]").removeAttr("stroke")
          $("[style]").removeAttr("style")
        },
        parserOptions: {xmlMode: true},
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
          },
        },
      })
    )
    .pipe(dest(path.svgsprite.dest))
}

module.exports = svgsprite;

```

<p>
  В начале возникли сложности с генерированием  SVG-спрайта: все работало как нужно, однако gulp формировал кроме SVG-спрайта все изображения svg:
</p>

![svg-sprite](https://github.com/DennyMaverick/Archee/raw/main/img-readme/sprite.jpg)

Это решилось, добавив эти изображения в исключение в задаче img.

![sprite-img](https://github.com/DennyMaverick/Archee/raw/main/img-readme/sprite-img.jpg)

## Dark / Light Theme

RU:

В проекте реализована функция переключения тем. Существует две цветовые схемы: светлая и темная:

![light-and-dark-theme](https://github.com/DennyMaverick/Archee/raw/main/img-readme/light-dark-theme.gif)

Переключение тем реализовано на JavaScript. Подробное описание вы можете найти в данном проекте: https://github.com/DennyMaverick/Web-templates. 

***

EN:

The function of themes switching was made in the project Archee. Two color schemes do exist: light and dark:

![light-and-dark-theme](https://github.com/DennyMaverick/Archee/raw/main/img-readme/light-dark-theme.gif)

Themes switching was made on JavaScript. Detailed description you can see in this project: https://github.com/DennyMaverick/Web-templates.

***

Посмотреть на проект Archee вы можете по данной ссылке: https://dennymaverick.github.io/Archee/

Также вы можете ознакомиться с другими моими проектами:

https://github.com/DennyMaverick/Web-templates    <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> 

https://github.com/DennyMaverick/Dream-On-Wheels  <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> 

https://github.com/DennyMaverick/Oxygen           <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> 

С любовью к web-разработке, Денис ;)

EN:

***

The project has next structure:

<ul>
  <li>config</li>
    <ul>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> app.js </li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> path.js </li>
    </ul>
  <li> <img src="./img-readme/node.png" alt="" width="14" height="15"> node_modules</li>
  <li> <img src="./img-readme/public.png" alt="" width="14" height="15"> public</li>
  <li> <img src="./img-readme/src-folder.png" alt="" width="14" height="15"> src</li>
    <ul>
      <li> <img src="./img-readme/font.png" alt="" width="14" height="15"> font</li>
      <li> <img src="./img-readme/html.png" alt="" width="14" height="15"> html</li>
      <li> <img src="./img-readme/img.png" alt="" width="14" height="15"> img</li>
      <li> <img src="./img-readme/js-folder.png" alt="" width="14" height="15"> js</li>
      <li> <img src="./img-readme/sass.png" alt="" width="14" height="15"> sass</li>
    </ul>  
  <li> <img src="./img-readme/task.png" alt="" width="14" height="15"> task</li>
    <ul>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> clear.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> css.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> favicon.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> font.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> html.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> img.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> js.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> libs.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> scss.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> server.js</li>
      <li> <img src="./img-readme/js-file.png" alt="" width="14" height="15"> svgsprite.js</li>
    </ul>
  <li> <img src="./img-readme/git.png" alt="" width="14" height="15"> .gitignore</li>
  <li> <img src="./img-readme/gulp.png" alt="" width="14" height="15"> gulpfile.js</li>
  <li> <img src="./img-readme/package-json.png" alt="" width="14" height="15"> package.json</li>
</ul>

The two files of configuration do exist: app.js и path.js. They need to the gulp-build became the universal. Every time, starting new project, it needs to enter in these files and change the needed information. app.js consists of the configuration of plugins:

![app.js файл](https://github.com/DennyMaverick/Archee/raw/main/img-readme/app.jpg)

path.js consists of the paths to input and output data and also the paths of watching:

![path.js файл](https://github.com/DennyMaverick/Archee/raw/main/img-readme/path.jpg)

SVG-sprite was genegated for gulp. The task for this:

```

const { src, dest } = require("gulp");

// Configuration

const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');
const svgcheerio = require('gulp-cheerio');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');

// JavaScript processing

const svgsprite = () => {
  return src(path.svgsprite.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JavaScript",
          message: error.message,
        })),
      })
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      svgcheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill")
          $("[stroke]").removeAttr("stroke")
          $("[style]").removeAttr("style")
        },
        parserOptions: {xmlMode: true},
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
          },
        },
      })
    )
    .pipe(dest(path.svgsprite.dest))
}

module.exports = svgsprite;

```

<p>
  First, the dificulties have appear. The dificulties with the generation of SVG-sprite: all warked correctly but gulp formed all the images besides of SVG-sprie:
</p>

![svg-sprite](https://github.com/DennyMaverick/Archee/raw/main/img-readme/sprite.jpg)

It was solved, adding all these images as exeption in the task 'img'.

![sprite-img](https://github.com/DennyMaverick/Archee/raw/main/img-readme/sprite-img.jpg)

You can see the Archee project to link: https://dennymaverick.github.io/Archee/

Also you can see other projects in my collection:

https://github.com/DennyMaverick/Web-templates    <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> 

https://github.com/DennyMaverick/Dream-On-Wheels  <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> 

https://github.com/DennyMaverick/Oxygen           <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-filled.png" alt="star filled" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> <img src="./img-readme/star-empty.png" alt="star empty" width="13" height="13"> 

With love to web-developing, Denny ;)
