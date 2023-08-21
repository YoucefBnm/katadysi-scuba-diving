import { gsap } from 'gsap'
import './sass/main.scss'
import { ScrollTrigger } from 'gsap/all'
import { animateElement, hide } from './js/libs/gsap'
import { navLinks, navToggleBtn } from './js/base/ui'
import { toggleNav } from './js/sections/nav'

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