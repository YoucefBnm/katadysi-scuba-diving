import Swiper from "swiper";
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';

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