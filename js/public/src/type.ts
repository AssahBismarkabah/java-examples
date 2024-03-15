export type Article = {
    urlToImage: string;
    title: string;
    description: string;
    url: string;
}

export type ResponseArticle = {
    articles: Article[];
}