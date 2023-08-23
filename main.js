import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/all'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { animateElement, animateNavOnScroll, hide } from './js/libs/gsap'
import { navToggleBtn } from './js/base/ui'
import { toggleNav } from './js/sections/nav'
import './sass/main.scss'
import { aboutMap } from './js/sections/about'
import { postsMap } from './js/sections/blog'
import { swiperBlog, swiperTestimonials, teamSwiper } from './js/libs/swiper';
import { testimonialsMap } from './js/sections/testimonials';
import { teamMap } from './js/sections/team';
import { servicesMap } from './js/sections/services';

navToggleBtn.addEventListener('click', toggleNav)

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gsap-reveal').forEach(element => {
        hide(element)

        ScrollTrigger.create({
            trigger: element,
            onEnter: () => { animateElement(element)},
            onEnterBack: () => { animateElement(element, -1)},
            onLeave: () => { hide(element) }
        })
    })
})

gsap.fromTo('.about', 
    {
        scrollTrigger: {
            trigger: '.about',
            backgroundColor: '#fff',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        },
    },
    {
        duration: 5,
        backgroundColor: '#DEEBE7',
    }
)

gsap.fromTo('.mission', 
    {
        scrollTrigger: {
            trigger: '.mission',
            backgroundColor: '#fff',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    },
    {
        duration: 3,
        backgroundColor: '#F1F1E6'
    }
)
gsap.fromTo('.testimonials',
    {
        scrollTrigger: {
            trigger: '.about',
            backgroundColor: '#1A1A1A',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        },
    },
    {
        duration: 5,
        backgroundColor: '#195D66',
    }
)

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

animateNavOnScroll
aboutMap()
servicesMap()
postsMap()
testimonialsMap()
teamMap()
swiperBlog
swiperTestimonials
teamSwiper