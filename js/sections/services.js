import { services } from "../base/constants"
import { servicesCards } from "../base/ui"

export const servicesMap = () => {

    services.map(service => {

        const serviceCard = `
        <div class='services__card flex flex--col gap--2'>
            <div class='services__card-header flex align--end gap--2'>
                <div class='services__card-icon flex align--center justify--center'>
                    <img src=${service.icon} alt='icon' />
                </div>
                <h3 class='heading heading--sm'>${service.title}</h3>
            </div>

            <div class='services__card-body'>
                <p class='mar--b-2'>${service.paragraph}</p>
                <a class='btn btn--link btn--link--accent'>
                    Discover
                </a>
            </div>
        </div>
    `

    servicesCards.insertAdjacentHTML('beforeend', serviceCard)

    })
}