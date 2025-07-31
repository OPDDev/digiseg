const toggleButton = document.querySelector('.toggle-menu');
const navbarLinks = document.querySelector('.menu');
let isActive = false;

$(document).on('scroll', () => {
  if ($(window).scrollTop() > 150) {
    $('header').addClass('activeh');
    $('header h1 a img').addClass('activelogo');
  }
  else if ($(window).scrollTop() <= 150 && !isActive) {
    $('header').removeClass('activeh');
    $('header h1 a img').removeClass('activelogo');
  }
});

toggleButton.addEventListener('click', () => {
  isActive = !isActive;
  navbarLinks.classList.toggle('activecolapseh');
  toggleButton.classList.toggle('activecolapseh');
  
  if (isActive) {
    $('header').addClass('activeh');
  } else if ($(window).scrollTop() <= 80) {
    $('header').removeClass('activeh');
  }
});