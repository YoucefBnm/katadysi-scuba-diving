import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/all'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { 
    animateElement, 
    animateNavOnScroll, 
    animateSectionBg, 
    // hide 
} from './js/libs/gsap'
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
        // hide(element)

        ScrollTrigger.create({
            trigger: element,
            onEnter: () => { animateElement(element)},
            scrub: false,
            onEnterBack: () => { animateElement(element, -1)},
            // onLeave: () => { hide(element) },
        })
    })
})

animateSectionBg('.about', '#DEEBE7')
animateSectionBg('.mission', '#F1F1E6')
animateSectionBg('.testimonials', '#195D66')

console.log(window.innerHeight)
ScrollTrigger.create({
    trigger: '.hero',
    start: "top top",
    end: "+=600",
    pin: '.hero__bg',
    scrub: true,
})

const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

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