const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')

if(burger) {
  burger.addEventListener('click', e => {
    e.preventDefault()


    burger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
  })
}


// document.querySelector('.burger').addEventListener('click', function() {
//   var mobileMenu = document.querySelector('.mobile-menu');
//   var burger = document.querySelector('.burger');
  
//   if (burger.style.display === 'active') {
//     mobileMenu.style.display = 'active';
//   } else {
//     mobileMenu.style.display = 'none'
//   }
// });


