const hamBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');
const overlay = document.querySelector('.overlay');




hamBtn.addEventListener('click', e=>{
  console.log('fired')
  mobileNav.classList.toggle('open');
  hamBtn.classList.toggle('open');
  overlay.classList.toggle('open');
})


overlay.addEventListener('click', e=>{
  console.log('fired')
  mobileNav.classList.toggle('open');
  hamBtn.classList.toggle('open');
  overlay.classList.toggle('open');
})