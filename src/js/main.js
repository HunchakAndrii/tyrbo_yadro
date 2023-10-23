const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')


if(burger) {
  burger.addEventListener('click', e => {
    e.preventDefault()


    burger.classList.toggle('active')
    mobileMenu.classList.toggle('active')

  })
}


const popup = document.querySelector('.popup')
const openPopup = document.querySelector('#open-popup')
const openPopupMobile = document.querySelector('#open-popup-mobile')
const btnClose = document.querySelector('.btn-close')


if (openPopup && popup) {
  openPopup.addEventListener('click', e => {
    e.preventDefault()

    popup.classList.toggle('show')
    console.log(popup)
  })
}

if (openPopupMobile && popup) {
  openPopupMobile.addEventListener('click', e => {
    e.preventDefault()

    popup.classList.toggle('show')
    console.log(popup)
  })
}

if (btnClose && popup) {
  btnClose.addEventListener('click', e => {
    e.preventDefault()

    popup.classList.toggle('show')
    console.log(popup)
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


