const hamBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');




hamBtn.addEventListener('click', e=> toggleMobileNav())
overlay.addEventListener('click', e => toggleMobileNav())






function toggleMobileNav(){
  console.log('fired')
  hamBtn.classList.toggle('open');
  overlay.classList.toggle('open');
  mobileNav.classList.toggle('open');
  
  body.classList.toggle('noscroll');
}
