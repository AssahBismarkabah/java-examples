import {Article} from "./type.ts";
import {onSearch} from "./service.ts";

export function createArticleBloc(article: Article) {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement("h2");

    //title.textContent = article.title;
    title.textContent = article.title.length > 30 ? article.title.slice(0, 30) + "......" : article.title;

    const description = document.createElement("p");
    description.textContent = article.description;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener("click", () => {
        window.open(article.url, "_blank")
    });
    return blogCard;
}


export function displayBlogs(articles: Article[]) {
    const blogContainer = document.getElementById('blog-container') as HTMLDivElement;

    blogContainer.innerHTML = "";

    articles.forEach((article) => {
        const blogCard = createArticleBloc(article);
        blogContainer.appendChild(blogCard);
    });
}


export async function shouldSearch() {
    const searchField = document.getElementById('search-input') as HTMLInputElement;

    const query = searchField.value.trim()
    await onSearch(query);
}