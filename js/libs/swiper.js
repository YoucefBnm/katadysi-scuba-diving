import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

export const swiperBlog = new Swiper('.swiperBlog', {
    modules: [Navigation],
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1040: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        900: {
            slidesPerView: 1.5,
            slidesPerGroup: 1.5
        },

        600: {
            slidesPerView: 2.5,
            slidesPerGroup: 2
        },
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        350: {
            slidesPerView: 1,
            slidesPerGroup: 1
        }
    }
})

export const swiperTestimonials = new Swiper('.swiperTestimonials', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 40,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        750: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1
        }
      }
})

export const teamSwiper = new Swiper('.swiperTeam', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 40,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      750: {
        slidesPerView: 1.5,
        slidesPerGroup: 1
      },
      800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    }
  })