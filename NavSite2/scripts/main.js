const hamBtn = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const mobileNav = document.querySelector('.mobileNav');
const body = document.querySelector('body');



hamBtn.addEventListener('click', e=> toggleMobileNav());
overlay.addEventListener('click', e=> toggleMobileNav());




function toggleMobileNav(){
  hamBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
  overlay.classList.toggle('open');
  body.classList.toggle('noscroll');
}