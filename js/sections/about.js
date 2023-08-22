import { aboutContent } from "../base/constants"
import { aboutCards } from "../base/ui"

export const aboutMap = () => {
    aboutContent.map((item, index) => {
        const aboutCard = `
            <div 
                class='about__card flex flex--col justify--center align--center gap--2 text--center gsap-reveal
                ${index%2===0 ? 'gsap-reveal--left' : 'gsap-reveal--right'}
            '>
                <div class='about__card-icon'>
                    <img src=${item.icon} alt='icon' />
                </div>

                <div class='about__card-title'>
                    <h3 class='heading heading--sm'>${item.title}</h3>
                </div>

                <div class='about__card-paragraph'>
                    <p class='text--sm'>${item.paragraph}</p>
                </div>
            </div>
        `

        aboutCards.insertAdjacentHTML('beforeend', aboutCard)
    })
}