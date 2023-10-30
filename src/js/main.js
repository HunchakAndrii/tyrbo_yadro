import Swiper from 'swiper'

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')

if (burger) {
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

// .............slider.....................//

var swiper = new Swiper('.my-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//................acordion...................//

// $(document).ready(function () {
//   $('.accordion__item__title').click(function (even) {
//     $(this).toggleClass('.active').next().slideToggle(300)
//   })
// })

// document.addEventListener('DOMContentLoaded', function () {
//   var titles = document.querySelectorAll('.accordion__item__title')

//   titles.forEach(function (title) {
//     title.addEventListener('click', function (event) {
//       this.classList.toggle('active')
//       var content = this.nextElementSibling

//       if (content.style.display === 'block') {
//         content.style.display = 'none'
//       } else {
//         content.style.display = 'block'
//       }
//     })
//   })
// })

// document.querySelectorAll('.accordion__item__title').forEach((item) =>
//   item.addEventListener('click', () => {
//     const parent = item.parentNode;

//     if (parent.classList.contains('accordion__item--active')) {
//       parent.classList.remove('accordion__item--active')
//     } else {
//       document
//         .querySelectorAll('.accordion__item')
//         .forEach((child) => child.classList.remove('accordion__item--active'))

//         parent.classList.add('accordion__item--active')
//     }
//   })
// )

document.querySelectorAll('.accordion__item__title').forEach(el => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling
    console.log('test1')
  })
})

console.log('hfjkdshfvcsdl,kv')
