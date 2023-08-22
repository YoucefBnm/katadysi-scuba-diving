import { testimonials } from "../base/constants"
import { testimonialCards } from "../base/ui"

export const testimonialsMap = () => {

    testimonials.map(testimonial => {
        const testimonialCard = `
            <div class='testimonials__card swiper-slide'>
                <div class='testimonials__card-paragraph mar--b-4'>
                    <blockquote>
                        <p>${testimonial.text}</p>
                    </blockquote>
                </div>

                <div class='testimonials__card-wrap flex gap--2 align--center'>
                    <div class='testimonials__card-image'>
                        <img src=${testimonial.image} alt='katadysi testimonail experience' />
                    </div>

                    <div class='testimonials__card-info flex flex--col gap--1'>
                        <div class='testimonials__card-name'>
                            <h4 class='heading heading--xs'>${testimonial.name}</h4>
                            <p class='text--sm mar--b-2'>${testimonial.state}</p>
                            <div class='testimonials__rating'>
                                <img src='/assets/star.svg' alt='rating icon' />
                                <span>${testimonial.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `

        testimonialCards.insertAdjacentHTML('beforeend', testimonialCard)

    })
}