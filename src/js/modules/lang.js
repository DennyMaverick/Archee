// Массив языков
const langs = {
  title: {
    ru: "Проект Archee",
    en: "Archee Project",
  },
  "intro-title": {
    ru: "Архитектура, которая знает о чем вы мечтаете",
    en: "Architecture that recognizes all your sensibilities",
  },
  "intro-description": {
    ru: "Добро пожаловать в Archee, надежного делового партнера на вашем пути к построению лучшего будущего для всех",
    en: "Welcome to Archee, a reliable business partner on your path to building a better looking future for all.",
  },
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
    ru: "контакты",
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
  "nav-mobile-home": {
    ru: "о нас",
    en: "about",
  },
  "nav-mobile-home": {
    ru: "контакты",
    en: "contact",
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
};

const langListItems = document.querySelectorAll(".lang-list__item");
// Массив всех доступных языков
const allLangs = ["ru", "en"];

langListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // получение значения атрибута data-lang (ru или en)
    let lang = this.dataset.lang;
    // добавление в строку браузера #ru или #en
    location.href = window.location.pathname + "#" + lang;
    // перезагрузка страницы
    location.reload();
  });
});
function changeLang() {
  // Надпись языка по умолчанию
  const langName = document.querySelector(".lang__name");
  // получение hash из строки браузера - #ru или #en
  let hash = window.location.hash;
  // начало hash массива строки начинается со второго символа - ru или en
  hash = hash.substr(1);
  // проверка - если массив из всех доступных языков не содержит hash
  if (!allLangs.includes(hash)) {
    // принудительно записывать в строку браузера путь с языком
    location.href = window.location.pathname + "#ru";
    // перезагрузка страницы
    location.reload();
  }
  // синхронизация надписи языка по умолчанию со значением hash (ru или en)
  langName.textContent = hash;
  // перебор массива langs
  for (let key in langs) {
    // получение элемента в html, который нужно перевести
    let elem = document.querySelector(".lang-" + key);
    // если элемент существует, то заменить содержание контента в элементе на тот контент, который взят из массива langs
    if (elem) {
      elem.innerHTML = langs[key][hash];
    }
  }
}
// запуск функции changeLang()
changeLang();
