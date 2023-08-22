import { teamMembers } from "../base/constants"
import { teamContainer } from "../base/ui"


export const teamMap = () => {
    teamMembers.forEach(member => {
        const memberCard = `
            <div class='team__card swiper-slide'>
                <div class='team__card-image'>
                    <img src=${member.image} alt=${member.jobTitle} />
                </div>

                <div class='team__card-details'>
                    <h3>${member.name}</h3>

                    <p class='color--accent mar--b-2'>${member.jobTitle}</p>
                    <p class='mar--b-2'>${member.bio}</p>

                    <div class='team__card-social flex gap--1'>
                        <img src='/assets/Facebook.svg' alt='facebook link' />
                        <img src='/assets/twitter.svg' alt='twitter link' />
                        <img src='/assets/Instagram.svg' alt='instagram link' />
                        <img src='/assets/WhatsApp.svg' alt='whatsapp link' />
                    </div>
                </div>
            </div>
        `

        teamContainer.insertAdjacentHTML('beforeend', memberCard)
    })
}