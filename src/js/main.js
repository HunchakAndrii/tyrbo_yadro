import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import gsap from 'gsap'

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

const swiper = new Swiper('.my-Swiper', {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  breakpoints: {
    900: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  on: {
    slideChange: e => {
      document.querySelector('.reviews__counter').textContent = `${
        e.activeIndex + 1
      } / ${e.slides.length}`
    },
    init: e => {
      document.querySelector(
        '.reviews__counter'
      ).textContent = `1 / ${e.slides.length}`
    },
  },
})

console.log(swiper)


//................acordion...................//



// document.addEventListener('DOMContentLoaded', function () {
//   var titles = document.querySelectorAll('.accordion__item__title')
//   var contents = document.querySelectorAll('.accordion__item__text')

//   titles.forEach(function (title, index) {
//     title.addEventListener('click', function (event) {
//       // Удаляем класс 'active' у всех заголовков
//       titles.forEach(function (otherTitle) {
//         otherTitle.classList.remove('active')
//       })

//       // Добавляем класс 'active' к текущему заголовку
//       this.classList.toggle('active')

//       if (contents[index].style.display === 'block') {
//         contents[index].style.display = 'none'
//       } else {
//         contents.forEach(function (content) {
//           content.style.display = 'none'
//         })
//         contents[index].style.display = 'block'
//       }
//     })
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  var titles = document.querySelectorAll('.accordion__item__title')
  var contents = document.querySelectorAll('.accordion__item__text')

  titles.forEach((title, index) => {
    title.addEventListener('click', () => {
      console.log(index)
      
      document.querySelectorAll('.accordion__item').forEach((item, i) => {
        if (i === index) {
          if (item.classList.contains('active')) {
            item.classList.remove('active')
            gsap.to(item.querySelector('.accordion__item__text'), {
              height: 0,
              // display: 'none'
            })
          } else {
            item.classList.add('active')
            gsap.to(item.querySelector('.accordion__item__text'), {
              height: 'auto',
              // display: 'block',
            })
          }
        } else {
          item.classList.remove('active')
          gsap.to(item.querySelector('.accordion__item__text'), {
            height: 0,
            // display: 'none'
          })
        }
      })
    })
  })
})
