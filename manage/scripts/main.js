const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const mobileNav = document.querySelector('.mobileNav');


hamburger.addEventListener('click', e=> comeMyNav())
overlay.addEventListener('click', e=> comeMyNav())



function comeMyNav(){
  hamburger.classList.toggle('open');
  overlay.classList.toggle('open');
  mobileNav.classList.toggle('open');
  body.classList.toggle('noscroll');
}