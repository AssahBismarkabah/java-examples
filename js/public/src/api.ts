import {Article, ResponseArticle} from "./type.ts";
import buildUrl from "build-url-ts";
import axios from "axios";

const apikey = '18222286e9ee4e7eb26045410f75f845';

// Function to fetch random news in case the user visits the website for the first time
export async function fetchRandomNews(pageSize = 10, country = 'us') {
    try {
        const apiUrl = buildUrl('https://newsapi.org', {
            path: '/v2/top-headlines',
            queryParams: {
                country: country,
                pageSize: pageSize,
                apikey: apikey,
            }
        });

        // fetching data using  async await and api from url
        const response = await axios.get<ResponseArticle>(apiUrl!);

        return response.data.articles as Article[];
    } catch (error) {
        console.error("Error fetching random news:", error);
        return [];
    }
}

// Function to fetch the data rom the below URL
export async function fetchNewsQuery(query: string, pageSize = 10) {
    try {
        const apiUrl = buildUrl('https://newsapi.org', {
            path: '/v2/everything',
            queryParams: {
                q: query,
                pageSize: pageSize,
                apikey: apikey,
            }
        });

        const response = await axios.get(apiUrl!);
        return response.data.articles as Article[];
    } catch (error) {
        console.error("Error fetching random news:", error);
        return [];
    }
}