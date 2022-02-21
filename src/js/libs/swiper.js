// Слайдер
import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      width: 1140
    }
  }
});
