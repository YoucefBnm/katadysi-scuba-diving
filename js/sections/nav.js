import { navLinks, navToggleBtn } from "../base/ui"


export const toggleNav = () => {
    navToggleBtn.classList.toggle('open')
    navLinks.classList.toggle('open')
}