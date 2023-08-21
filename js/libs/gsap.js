import { gsap } from "gsap"

export const animateElement = (element, direction) => {
    direction = direction || 1

    let x = 0
    let y = direction * 100

    if(element.classList.contains('gsap-reveal--left')) {
        x = -100
        y = 0 
    }
    if (element.classList.contains('gsap-reveal--right')) {
        x = 100
        y = 0
    }
    if (element.classList.contains('gsap-reveal--top')) {
        y = -100
        x = 0
    }
    element.style.transform = "translate(" + x + "px, " + y + "px)"
    element.style.opacity = 0

    gsap.fromTo(element, { x: x, y: y, autoAlpha: 0}, {
        duration: 5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
    })
}

export const hide = element => {
    gsap.set(element, { autoAlpha: 0 })
}

