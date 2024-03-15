import {fetchNewsQuery, fetchRandomNews} from "./api.ts";
import {displayBlogs} from "./helper.ts";

export async function onSearch(keyword?: string) {
    try {
        const articles = await (keyword?.length ? fetchNewsQuery(keyword) : fetchRandomNews());
        displayBlogs(articles);
    } catch (error) {
        console.log("Error fetching news by query", error);
    }
}