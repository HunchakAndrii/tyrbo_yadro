import Swiper, { Navigation, Autoplay } from 'swiper'

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
    675: {
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
    // init: e => {
    //   document.querySelector(
    //     '.reviews__counter'
    //   ).textContent = `1 / ${e.slides.length}`
    // },
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

  titles.forEach(function (title, index) {
    title.addEventListener('click', function (event) {
      // Удаляем класс 'active' у всех заголовков
      titles.forEach(function (otherTitle) {
        otherTitle.classList.remove('active')
      })

      // Добавляем класс 'active' к текущему заголовку
      this.classList.toggle('active')

      if (contents[index].style.display === 'block') {
        contents[index].style.display = 'none'
      } else {
        contents.forEach(function (content) {
          content.style.display = 'none'
        })
        contents[index].style.display = 'block'
      }
    })
  })
})
