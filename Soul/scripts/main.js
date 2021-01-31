const overlay = document.querySelector('.overlay');
const mobileNav = document.querySelector('.mobileNav');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');



hamburger.addEventListener('click', e=> comeMyNav());
overlay.addEventListener('click', e=> comeMyNav());



function comeMyNav(){
  overlay.classList.toggle('open');
  mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open');
  body.classList.toggle('noscroll');
}