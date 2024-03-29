//* =========== Объект с переводом страницы ==============

const langs = {
  title: {
    ru: "Проект Archee",
    en: "Archee Project",
  },

  //* ======= Секция Intro

  "intro-title": {
    ru: "Архитектура, которая знает о чем вы мечтаете",
    en: "Architecture that recognizes all your sensibilities",
  },
  "intro-description": {
    ru: "Добро пожаловать в Archee, надежного делового партнера на вашем пути к построению лучшего будущего для всех",
    en: "Welcome to Archee, a reliable business partner on your path to building a better looking future for all.",
  },
  "intro-btn": {
    ru: "подать запрос",
    en: "make an enquiry",
  },
  rate: {
    ru: "Рейтинги",
    en: "Ratings",
  },
  "rate-desc": {
    ru: "Нам доверяют клиенты со всего мира",
    en: "Trusted by Clients From Worldwide",
  },
  "contact-desc": {
    ru: "Если вы спешите, позвоните нам. Мы здесь 24/7, чтобы помочь вам как можно скорее",
    en: "If you're in a hurry, quick call for us. We are here 24/7 to help you asap.",
  },

  //* ========== Навигационное меню ==========

  "nav-home": {
    ru: "домой",
    en: "home",
  },
  "nav-project": {
    ru: "проекты",
    en: "project",
  },
  "nav-services": {
    ru: "сервисы",
    en: "services",
  },
  "nav-about": {
    ru: "о нас",
    en: "about",
  },
  "nav-contact": {
    ru: "связаться",
    en: "contact",
  },
  "nav-mobile-home": {
    ru: "домой",
    en: "home",
  },
  "nav-mobile-project": {
    ru: "проекты",
    en: "project",
  },
  "nav-mobile-services": {
    ru: "сервисы",
    en: "services",
  },
  "nav-mobile-about": {
    ru: "о нас",
    en: "about",
  },
  "nav-mobile-contact": {
    ru: "связаться",
    en: "contact",
  },

  //* ======== Секция Search =========

  "search-title": {
    ru: "Найдите цену, которая вам подходит",
    en: "Search the price you looking for",
  },
  "search-btn": {
    ru: "найти сейчас",
    en: "search now",
  },

  //* ======== Секция преимуществ ========

  "hidden-benefits": {
    ru: "Наши преимущества",
    en: "Our benefits",
  },
  "benefits-title-one": {
    ru: "Арка и Интерьер",
    en: "Arch & Interior",
  },
  "benefits-desc-one": {
    ru: "Мы привносим волшебство в здание и интерьер, чтобы воплотить в жизнь дом вашей мечты.",
    en: "We bring magic in the building and interior to fulfill your dream home.",
  },
  "benefits-title-two": {
    ru: "Дизайн",
    en: "Design",
  },
  "benefits-desc-two": {
    ru: "Креативный дизайн с использованием цифровых продуктов, которые помогут вам продвигать свой бизнес.",
    en: "Creative design with digital products that help you promote your business.",
  },
  "benefits-title-three": {
    ru: "Продукт",
    en: "Product",
  },
  "benefits-desc-three": {
    ru: "Мы создаем самые красивые вещи для дома вашей мечты.",
    en: "We create the most beautiful things for your dream home.",
  },

  //* ======== Секция About =========

  "about-title": {
    ru: "Мы стремимся задавать тенденции вашей современной жизни.",
    en: "We aim to set the trends of your modern living.",
  },
  "about-description": {
    ru: "Более 39 000 человек работают на нас в более чем 70 странах по всему миру. Этот всеобщий охват сочетается со специализированными услугами. Archee позволяет вам создавать неограниченное количество панелей и пользовательских форм недвижимости для сбора потенциальных клиентов и ведения учета всей информации.",
    en: "Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services. Archee allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information.",
  },
  "about-btn": {
    ru: "Связаться сейчас",
    en: "Contact Now",
  },

  //* ========== Проекты ===========

  "projects-title": {
    ru: "Выбранные проекты",
    en: "Selected Projects",
  },
  "project-outdoor-title": {
    ru: "наружная структура",
    en: "outdoor structure",
  },
  "project-outdoor-desc": {
    ru: "Проекты данного типа занимают особое внимание. Так как мы знаем, что большие сооружения могут сделать мир красивее.",
    en: "Projects of this type has unusual attention for us. Cause of we know that big buildings can make the world better.",
  },
  "project-indoor-title": {
    ru: "внутренняя структура",
    en: "indoor structure",
  },
  "project-indoor-desс": {
    ru: "Мы гордимся данными проектами. Мы делаем ваш декор лучше и необычнее.",
    en: "This projects we pride. We make your decor better and unusual.",
  },
  "project-furniture-title": {
    ru: "современная мебель",
    en: "modern furniture",
  },
  "project-furniture-desс": {
    ru: "Мы исполняем ваши желания. Теперь доступно увидеть этот восторг своими глазами!",
    en: "We make your wishes. Now is available to feel it unreal admiration with your eyes!",
  },
  "project-kitchen-title": {
    ru: "современная кухня",
    en: "modern kitchen",
  },
  "project-kitchen-desс": {
    ru: "Мы можем помочь сделать вашу кухню более красивой. И мы знаем как это воплотить в жизнь.",
    en: "We can help to make your kitchen more beautiful. And we know how to do it.",
  },

  //* Заголовок секции Architects

  "architects-title": {
    ru: "Архитекторы Archee",
    en: "Architects of Archee",
  },
  //* =============  Модальное окно Modal-location  ==================

  "modal-location-title": {
    ru: "Выберите город",
    en: "Choose the city",
  },
  "modal-location-city-moskow": {
    ru: "москва",
    en: "moskow",
  },
  "modal-location-city-tokyo": {
    ru: "токио",
    en: "tokyo",
  },
  "modal-location-city-new-york": {
    ru: "Нью Йорк",
    en: "New York",
  },
  "modal-location-city-paris": {
    ru: "париж",
    en: "paris",
  },
  "modal-location-city-roma": {
    ru: "рим",
    en: "roma",
  },
  "modal-location-city-london": {
    ru: "лондон",
    en: "london",
  },
  "modal-location-description": {
    ru: "Каждая достопримечательность какой-либо страны когда-то была лишь идеей, записанной на листке бумаги. Далее, эта идея развивалась, и в конечном счете превратилась в искусство. Команда Archee придерживается мнению, что если есть проект в голове, на листке бумаги, а также есть большое стремление эту идею воплотить в реальность, то все достижимо. Выберите Ваш город, и мы подберем лучший вариант архитектуры, которая точно способна удивлять.",
    en: "Each sight place of any country was once only an insignificant idea, a value on a piece of paper. Further, this idea developed, and eventually built into art. The Archee team believes that if there is a project in the head, on a piece of paper, and there is also a great desire to turn this idea into reality, then everything is achievable. Choose your city, and we will select the best option of the architecture that is sure to surprise.",
  },
  "modal-type-title": {
    ru: "Выберите тип работ",
    en: "Choose the type of works",
  },
  "modal-type-outdoor-title": {
    ru: "Наружная структура",
    en: "Outdoor structure",
  },
  "modal-type-indoor-title": {
    ru: "Внутренняя структура",
    en: "indoor structure",
  },
  "modal-type-furniture-title": {
    ru: "Современная мебель",
    en: "Modern furniture",
  },
  "modal-type-kitchen-title": {
    ru: "Современная кухня",
    en: "Modern kitchen",
  },
  "modal-type-start-text": {
    ru: "Выберите тип необходимых Вам работ, и мы подберем лучший вариант, что способен удивить каждого. Наши архитекторы позаботятся о том, чтобы Вы остались довольны!",
    en: "Choose the type of needed works and we make the best variant for you. You will be plesantly wondered. Our architects will care about you will like it!",
  },
  "modal-type-outdoor": {
    ru: "Работы в стиле наружной структуры завораживают. Если Вам необходимо построить здание для ваших идей: бизнес, отдых, семейный дом, - мы поможем достигнуть Вашей мечты!",
    en: "The works in style of outdure structure are amazing. If you need the building for your ideas: business, rest, family house, - we can help to reach your dream!",
  },
  "modal-type-indoor": {
    ru: "Работы в данном стиле подойдут, если Вам нужно сделать свой дом уютней. Мы подберем лучший вариант для Вашей прихожей, спальни или гостиной.",
    en: "The works in this style will be the greatest solution if you need to do your home more comfortable. We will help to choose the best variant for your hallway, bedroom or living room",
  },
  "modal-type-furniture": {
    ru: "Подобрать красивую мебель для дома - это искусство. И наши архитекторы знают как с этим работать.",
    en: "To choose the beautiful furniture for your home is the art. And our architects know how  to work with it.",
  },
  "modal-type-kitchen": {
    ru: "Если Вы всегда мечтали о том, чтобы сделать свою кухню местом радости, выберите данный тип работ, и наша команда поможет Вам в этом, доверьтесь профессионалам.",
    en: "If you always dreamt of making your kitchen a place of joy choose this type of works and our team will help you with it. Trust the professionals.",
  },
  "modal-type-btn": {
    ru: "Выбрать",
    en: "Select",
  },

  //* Modal-search

  "modal-search-title": {
    ru: "Спасибо за успешное заполнение формы",
    en: "Thank you for the successful filling the form",
  },
  "modal-search-description": {
    ru: "Чтобы начать работу над проектом, нужно уточнить некоторые детали. Напишите пожалуйста Ваш номер телефона в поле ниже. Наши менеджеры свяжутся с Вами в скором времени.",
    en: "For start the project we need to clarify some details. Write your phone number bellow, please. Our menegers will contact with you as soon as possible.",
  },

  //* ====== Секция News ======
  "news-title": {
    ru: "Наши новости",
    en: "Our news",
  },
  "publication-one-title": {
    ru: "как выбрать самый лучший наружный декор ",
    en: "how to choose the best outdoor decor",
  },
  "publication-one-time": {
    ru: "16-е Дек, 2021",
    en: "16th Dec, 2021",
  },
  "publication-one-author": {
    ru: "Естер Ховард",
    en: "Esther Howard",
  },
  "publication-one-description": {
    ru: "Лучшие идеи для строительства наружного типа. Лучшие дизайнерские решения для вашего комфорта. Примеры работ наших проектов.",
    en: "The best ideas for your outdoor building. The best design solutions for your comfort. Demonstrations of our projects. ",
  },
  "publication-two-title": {
    ru: "Чего клиенты хотят от своей кухни: идеальный ассортимент",
    en: "What Clients Want In Their Kitchen: The Perfect Range",
  },
  "publication-two-time": {
    ru: "20-е Дек, 2021",
    en: "20th Dec, 2021",
  },
  "publication-two-author": {
    ru: "Лесли Александер",
    en: "Leslie Alexander",
  },
  "publication-two-description": {
    ru: "Я узнал, что клиенты хотят иметь на своей кухне. Это идеальный ассортимент. Именно потому, что многие из моих клиентов-дизайнеров — любители готовить.",
    en: "I’ve learned that the number one appliance that clients want in their kitchen is the perfect range. That’s because a number of my design clients are cook lovers.",
  },

  //* ======= Footer =======

  "footer-address": {
    ru: "Бахофстрейс 7/1",
    en: "Bahnhofstrasse 7/1",
  },
  "footer-city": {
    ru: "Зурич, Швейцария",
    en: "Zürich, Switzerland",
  },
  "footer-nav-project": {
    ru: "Проекты",
    en: "Project",
  },
  "footer-nav-services": {
    ru: "Сервисы",
    en: "Services",
  },
  "footer-nav-about": {
    ru: "О нас",
    en: "About",
  },

  //* Search popups

  //* Budget-popups

  "search-form-unsuccess-popup-budget": {
    ru: "Только цифры в диапозоне от 4 до 7 символов",
    en: "Only digits in a range from 4 to 7 symbols",
  },

  "search-budget": {
    ru: "Введите Ваш бюджет",
    en: "Insert your budget",
  },

  //* Location-popups

  "search-location-popup-success": {
    ru: "Успешное заполнение",
    en: "Successful filling",
  },

  "search-location-popup-unsuccess": {
    ru: "Совпадений не найдено, кликните на иконку в текстовом поле",
    en: "No matches, click on the icon in this text field",
  },

  //* Type-popups

  "search-type-popup-unsuccess": {
    ru: "Выберите значение из списка или нажмите на иконку справа, чтобы узнать подробней",
    en: "Choose the value from the list bellow or click on the icon right to know more",
  },

  //* search-type-list

  "search-type-list-outdoor": {
    ru: "Наружняя Структура",
    en: "Outdoor Structure",
  },
  "search-type-list-indoor": {
    ru: "Внутренняя Структура",
    en: "Indoor Structure",
  },
  "search-type-list-furniture": {
    ru: "Современная Мебель",
    en: "Modern Furniture",
  },
  "search-type-list-kitchen": {
    ru: "Современная Кухня",
    en: "Modern Kitchen",
  },

  //* Modal-contact"

  "modal-contact-title": {
    ru: "Рады приветствовать!",
    en: "Welcome!",
  },
  "modal-contact-description": {
    ru: "Мы ценим Ваш интерес к архитектуре. Напишите пожалуйста ниже номер Вашего телефона, и мы перезвоним как только сможем.",
    en: "We appreciate your interest in architecture. Please write your phone number below and we'll call you back as soon as posible.",
  },
  "modal-contact-signature": {
    ru: "C любовью к архитектуре, команда Archee.",
    en: "With love to architecture, team Archee.",
  },
  "modal-contact-btn": {
    ru: "Отправить",
    en: "Send",
  },
}

const repeatElems = {
  "benefits-projects": {
    ru: "Проектов",
    en: "Projects",
  },

  //* ====== Секция Architects of Archee / Slider ======

  "title-archee": {
    ru: "Ральф Эдвардс",
    en: "Ralph Edwards",
  },
  "desc-archee": {
    ru: "Архитектор",
    en: "Architect",
  },
  "title-designer": {
    ru: "Коди Фишер",
    en: "Cody Fisher",
  },
  "desc-designer": {
    ru: "Дизайнер по интерьеру",
    en: "Interior Designer",
  },
  "title-manager": {
    ru: "Стюрд Энеки",
    en: "Stewrd Enaky",
  },
  "desc-manager": {
    ru: "Проектный Менеджер",
    en: "Project Manager",
  },

  //* Modal-search-popup

  "search-modal-popup-success": {
    ru: "Ответ успешно записан",
    en: "Your answer is successfully written",
  },

  "search-modal-popup-unsuccess": {
    ru: "Неверные значения",
    en: "Incorrect values",
  },
}

// ====== Секция Search / placeholders

const placeholders = {
  location: {
    ru: "Местоположение",
    en: "Location",
  },
  type: {
    ru: "Тип",
    en: "Type",
  },
  budget: {
    ru: "Бюджет",
    en: "Budget",
  },
  "modal-search-phone": {
    ru: "Введите номер телефона",
    en: "Insert your phone number",
  },
  "modal-contact-phone": {
    ru: "Введите номер телефона",
    en: "Insert your phone number",
  },
}

const langListItems = document.querySelectorAll(".lang-list__item")
// Массив всех доступных языков
const allLangs = ["ru", "en"]

langListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // получение hash из строки браузера - #ru или #en

    // получение значения атрибута data-lang (ru или en)
    let lang = this.dataset.lang

    // добавление в строку браузера #ru или #en
    location.href = window.location.pathname + "#" + lang
    // перезагрузка страницы
    location.reload()
  })
})
function changeLang() {
  // Надпись языка по умолчанию
  const langNames = document.querySelectorAll(".lang__name")
  // получение hash из строки браузера - #ru или #en
  let hash = window.location.hash
  // начало hash массива строки начинается со второго символа - ru или en
  hash = hash.substr(1)
  // проверка - если массив из всех доступных языков не содержит hash
  if (!allLangs.includes(hash)) {
    // принудительно записывать в строку браузера путь с языком
    location.href = window.location.pathname + "#ru"
    // перезагрузка страницы
    location.reload()
  }

  // синхронизация надписи языка по умолчанию со значением hash (ru или en)
  langNames.forEach((langName) => {
    langName.textContent = hash
  })

  // перебор массива langs
  for (let key in langs) {
    // получение элементов в html, которые нужно перевести
    let elem = document.querySelector(".lang-" + key)
    // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash]
    }
  }
  // Для плейсхолдеров
  for (let key in placeholders) {
    let elemPlaceholder = document.querySelector(".lang-placeholder-" + key)
    if (elemPlaceholder && placeholders[key][hash]) {
      elemPlaceholder.placeholder = placeholders[key][hash]
    }
  }

  for (let key in repeatElems) {
    let elems = document.querySelectorAll(".lang-" + key)
    elems.forEach(function (elem) {
      if (elem && repeatElems[key][hash]) {
        elem.innerHTML = repeatElems[key][hash]
      }
    })
  }
}
// запуск функции changeLang()
changeLang()
