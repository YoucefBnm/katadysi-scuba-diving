import { blogArticles } from "../base/constants"
import { blogCards } from "../base/ui"

export const postsMap = () => {
    blogArticles.map(article => {
        const articleCard = `
            <div class='blog__card swiper-slide'>
                <div class='blog__card-image'>
                    <img src=${article.image} alt=${article.title} />
                </div>

                <div class='blog__card-text'>
                    <div class='blog__card-title color--white mar--b-2'>
                        <h3 class='heading heading--xs'>${article.title}</h3>
                    </div>

                    <div class='blog__card-btn'>
                        <a class='btn btn--link btn--link--accent' href='#'>
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        `

        blogCards.insertAdjacentHTML('beforeend', articleCard)
    })
}