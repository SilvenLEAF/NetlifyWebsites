const hamBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');
const overlay = document.querySelector('.overlay');




hamBtn.addEventListener('click', e=>{
  console.log('fired')
  mobileNav.classList.toggle('open');
  hamBtn.classList.toggle('open');
})