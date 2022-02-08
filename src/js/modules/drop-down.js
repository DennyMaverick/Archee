// drop-down lang
const arrowDown = document.getElementById('lang-arrow');
const langList = document.querySelector('.lang-list');

arrowDown.addEventListener('click', function () {
  langList.classList.toggle('lang-list__show');
  this.classList.toggle('lang__arrow-rotate');
});
