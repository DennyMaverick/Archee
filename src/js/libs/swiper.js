// Слайдер
import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: "3",
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  }
});
