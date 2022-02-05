window.addEventListener('DOMContentLoaded', () => {

  // Слайдер

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: "3",
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    }
  });

  // drop-down lang
  const arrowDown = document.getElementById('lang-arrow');
  const langList = document.querySelector('.lang-list');

  arrowDown.addEventListener('click', function () {
    langList.classList.toggle('lang-list__show');
    this.classList.toggle('lang__arrow-rotate');
  });







});



