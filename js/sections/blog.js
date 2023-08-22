import { blogArticles } from "../base/constants"
import { blogCards } from "../base/ui"

export const postsMap = () => {
    blogArticles.map(article => {
        const articleCard = `
            <div class='blog__card'>
                <div class='blog__card-image'>
                    <img src=${article.image} alt=${article.title} />
                </div>

                <div class='blog__card-title'>
                    <h3 class='heading heading--sm'>${article.title}</h3>
                </div>

                <div class='blog__card-btn'>
                    <a class='btn btn--link btn--link--secondary-2' href='#'>
                        Read more
                    </a>
                </div>
            </div>
        `

        blogCards.insertAdjacentHTML('beforeend', articleCard)
    })
}