import {Article} from "./type.ts";

const apikey = '18222286e9ee4e7eb26045410f75f845';

// Function to fetch random news in case the user visits the website for the first time
export async function fetchRandomNews(pageSize = 20, country = 'us') {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${apikey}`;

        // fetching data using  async await and api from url
        const response = await fetch(apiUrl);

        // storing respose  in json format  in the variable data
        const data = await response.json();

        return data.articles as Article[];
    } catch (error) {
        console.error("Error fetching random news:", error);
        return [];
    }
}

// Function to fetch the data rom the below URL
export async function fetchNewsQuery(query: string, pageSize = 20) {
    try {
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://newsapi.org/v2/everything?q=${encodedQuery}&pageSize=${pageSize}&apiKey=${apikey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        return data.articles as Article[];
    } catch (error) {
        console.error("Error fetching random news:", error);
        return [];
    }
}