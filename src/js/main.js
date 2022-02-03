// Слайдер

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: "3",
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  }
});