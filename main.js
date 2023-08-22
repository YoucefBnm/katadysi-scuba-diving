import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'

import { ScrollTrigger } from 'gsap/all'
import { animateElement, hide } from './js/libs/gsap'
import { navToggleBtn } from './js/base/ui'
import { toggleNav } from './js/sections/nav'
import './sass/main.scss'
import { aboutMap } from './js/sections/about'
import { postsMap } from './js/sections/blog'

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
const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

aboutMap()
postsMap()