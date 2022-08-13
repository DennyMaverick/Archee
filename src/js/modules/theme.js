const switchers = document.querySelectorAll(".switcher")
const darkBtn = document.querySelector("[data-theme='dark']")
const lightBtn = document.querySelector("[data-theme='light']")
const themePopup = document.querySelector(".theme__popup")

const themes = {
  header: {
    theme: {
      light: "header--light",
      dark: "header--dark",
    },
  },
  body: {
    theme: {
      light: "body--light",
      dark: "body--dark",
    },
  },
  ".main": {
    theme: {
      light: "main--light",
      dark: "main--dark",
    },
  },
  ".intro": {
    theme: {
      light: "intro--light",
      dark: "intro--dark",
    },
  },
  ".intro__title": {
    theme: {
      light: "intro__title--light",
      dark: "intro__title--dark",
    },
  },
  ".intro__subtitle": {
    theme: {
      light: "intro__subtitle--light",
      dark: "intro__subtitle--dark",
    },
  },
  ".rate__title": {
    theme: {
      light: "rate__title--light",
      dark: "rate__title--dark",
    },
  },
  ".rate__desc": {
    theme: {
      light: "rate__desc--light",
      dark: "rate__desc--dark",
    },
  },
  ".contact__description": {
    theme: {
      light: "contact__description--light",
      dark: "contact__description--dark",
    },
  },
  ".mobile-nav": {
    theme: {
      light: "mobile-nav--light",
      dark: "mobile-nav--dark",
    },
  },
  ".mobile-nav__link": {
    theme: {
      light: "mobile-nav__link--light",
      dark: "mobile-nav__link--dark",
    },
  },
  ".lang__arrow": {
    theme: {
      light: "lang__arrow--light",
      dark: "lang__arrow--dark",
    },
  },
  ".lang": {
    theme: {
      light: "lang--light",
      dark: "lang--dark",
    },
  },
  ".search__form": {
    theme: {
      light: "search__form--light",
      dark: "search__form--dark",
    },
  },
  ".benefits__item-img": {
    theme: {
      light: "benefits__item-img--light",
      dark: "benefits__item-img--dark",
    },
  },
  ".benefits__item-title": {
    theme: {
      light: "benefits__item-title--light",
      dark: "benefits__item-title--dark",
    },
  },
  ".benefits__item-desc": {
    theme: {
      light: "benefits__item-desc--light",
      dark: "benefits__item-desc--dark",
    },
  },
  ".benefits__projects": {
    theme: {
      light: "benefits__projects--light",
      dark: "benefits__projects--dark",
    },
  },
  ".about": {
    theme: {
      light: "about--light",
      dark: "about--dark",
    },
  },
  ".about__title": {
    theme: {
      light: "about__title--light",
      dark: "about__title--dark",
    },
  },
  ".about__description": {
    theme: {
      light: "about__description--light",
      dark: "about__description--dark",
    },
  },
  ".projects__title": {
    theme: {
      light: "projects__title--light",
      dark: "projects__title--dark",
    },
  },
  ".project__title": {
    theme: {
      light: "project__title--light",
      dark: "project__title--dark",
    },
  },
  ".project__description": {
    theme: {
      light: "project__description--light",
      dark: "project__description--dark",
    },
  },
  ".logo__text": {
    theme: {
      light: "logo__text--light",
      dark: "logo__text--dark",
    },
  },
  ".publication__info": {
    theme: {
      light: "publication__info--light",
      dark: "publication__info--dark",
    },
  },
  ".publication__link": {
    theme: {
      light: "publication__link--light",
      dark: "publication__link--dark",
    },
  },
  ".publication__description": {
    theme: {
      light: "publication__description--light",
      dark: "publication__description--dark",
    },
  },
  ".footer": {
    theme: {
      light: "footer--light",
      dark: "footer--dark",
    },
  },
  ".title--decore": {
    theme: {
      light: "title--decore-light",
      dark: "title--decore-dark",
    },
  },
  ".footer__inner": {
    theme: {
      light: "footer__inner--light",
      dark: "footer__inner--dark",
    },
  },
  ".menu-nav__link": {
    theme: {
      light: "menu-nav__link--light",
      dark: "menu-nav__link--dark",
    },
  },
  ".modal__inner": {
    theme: {
      light: "modal__inner--light",
      dark: "modal__inner--dark",
    },
  },
  ".modal-contact__description": {
    theme: {
      light: "modal-contact__description--light",
      dark: "modal-contact__description--dark",
    },
  },
  ".modal-title": {
    theme: {
      light: "modal-title--light",
      dark: "modal-title--dark",
    },
  },
  ".modal__close-icon": {
    theme: {
      light: "modal__close-icon--light",
      dark: "modal__close-icon--dark",
    },
  },
  ".modal-location__inner": {
    theme: {
      light: "modal-location__inner--light",
      dark: "modal-location__inner--dark",
    },
  },
  ".modal-location__cities": {
    theme: {
      light: "modal-location__cities--light",
      dark: "modal-location__cities--dark",
    },
  },
  ".house-item__title": {
    theme: {
      light: "house-item__title--light",
      dark: "house-item__title--dark",
    },
  },
}
function themeSwitch(theme) {
  const switcherLight = document.querySelector(".theme__light")
  const switcherDark = document.querySelector(".theme__dark")
  for (key in themes) {
    const elems = document.querySelectorAll(key)
    elems.forEach((elem) => {
      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {
        elem.classList.remove(`${themes[key].theme.dark}`, `${themes[key].theme.light}`)

        if (theme === "light") {
          elem.classList.add(`${themes[key].theme.light}`)
          switcherLight.classList.add("hide")
          switcherDark.classList.remove("hide")
        } else {
          elem.classList.add(`${themes[key].theme.dark}`)
          switcherDark.classList.add("hide")
          switcherLight.classList.remove("hide")
        }
      }
    })
  }
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function (e) {
    if (e.target.closest(".switcher").dataset.theme === "light") {
      themeSwitch("light")
    } else {
      themeSwitch("dark")
    }
    localStorage.setItem("theme", this.dataset.theme)
  })
})

const activeTheme = localStorage.getItem("theme")

if (activeTheme === null) {
  themeSwitch("dark")
} else {
  themeSwitch(activeTheme)
}

// switchers.forEach((switcher) => {
//   function mouseEnter(event) {
//     if (event.target.closest(".switcher").dataset.theme === "light") {
//       themePopup.innerHTML = "switch to light theme"
//     } else {
//       themePopup.innerHTML = "switch to dark theme"
//     }
//     if (document.documentElement.clientWidth > 991) {
//       themePopup.classList.add("show")
//       themePopup.classList.remove("hide")
//     } else {
//       themePopup.classList.add("hide")

//     }themePopup.classList.remove("show")
//   }
//   switcher.addEventListener("mouseenter", mouseEnter)
// })

// switchers.forEach((switcher) => {
//   switcher.addEventListener("mouseleave", function () {
//     themePopup.classList.remove("show")
//   })
// })
