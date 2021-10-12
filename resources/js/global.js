const navigation = document.querySelector('.navigation');
const navigationCollapse = document.querySelector('.navigation__collapse');
const searchBtn = document.querySelector('.search-box');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const popupOverlayClose = document.querySelector('.popup-overlay span');
const header = document.querySelector('header');
const themeSwitch = document.querySelector('.theme-switch');
const responsiveMenuIcon = document.querySelector('.hamburger-menu');

searchBtn.addEventListener('click', function() {
  popupOverlay.classList.add('show');
});

function closePopup() {
  popupOverlay.classList.remove('show');
}

popupOverlayClose.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);
popup.addEventListener('click', e => e.stopPropagation());

// navigation padding on scroll
window.addEventListener('scroll', function() {
  if (this.scrollY) {
    navigation.style.padding = '1.5rem 0';
  } else {
    navigation.style.padding = '2rem 0';
  }
});
// header margin
header.style.marginTop = `${navigation.clientHeight - 2}px`;
window.addEventListener('resize', function() {
  header.style.marginTop = `${navigation.clientHeight - 2}px`;
});

// theme color
themeSwitch.addEventListener('click', function() {
  this.classList.toggle('rotate');
  this.children[0].classList.toggle('fa-sun');
  this.children[0].classList.toggle('fa-moon');
  document.body.classList.toggle('dark');

  // select theme from local storage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});
const themeFromStorage = localStorage.getItem('theme');
if (themeFromStorage) {
  themeSwitch.classList.toggle('rotate');
  themeSwitch.children[0].classList.toggle('fa-sun');
  themeSwitch.children[0].classList.toggle('fa-moon');
  document.body.classList.add('dark');
}

// hamburger menu
responsiveMenuIcon.addEventListener('click', () => {
  navigationCollapse.classList.toggle('show');
});
