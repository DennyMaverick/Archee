const burger = document.querySelector('.burger');
const bodyEl = document.querySelector('body');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

burger.addEventListener('click', function () {
  this.classList.toggle('burger--active');
  bodyEl.classList.toggle('no-scroll');
  mobileNav.classList.toggle('mobile-nav--active');
});

mobileNavLinks.forEach((item) => {
  item.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    bodyEl.classList.remove('no-scroll');
    mobileNav.classList.remove('mobile-nav--active');
  })
});