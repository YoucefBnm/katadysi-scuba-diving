const select = e => document.querySelector(e)
const selectAll = e => document.querySelectorAll(e)

const navbar = select('.nav')
const navToggleBtn = select('.nav__toggle')
const navLinks = select('.nav__navigation')


export {
    navbar,
    navToggleBtn,
    navLinks
}