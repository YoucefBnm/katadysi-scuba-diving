const select = e => document.querySelector(e)
const selectAll = e => document.querySelectorAll(e)

const navbar = select('.nav')
const navToggleBtn = select('.nav__toggle')
const navLinks = select('.nav__navigation')

const aboutCards = select('.about__cards')

const blogCards = select('.blog__cards')

export {
    navbar,
    navToggleBtn,
    navLinks,
    aboutCards,
    blogCards
}