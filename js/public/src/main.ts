import './style.css';

const apikey = '18222286e9ee4e7eb26045410f75f845';

window.addEventListener('load', async () => {
    // API key from News API
    const blogContainer = document.getElementById('blog-container') as HTMLDivElement;

    const searchField = document.getElementById('search-input') as HTMLInputElement;

    const searchButton = document.getElementById('search-button') as HTMLButtonElement;

    //adding event listener for the button tag
    searchButton.addEventListener("click", async () => {
        const query = searchField.value.trim()

        if (query != "") {
            try {
                const articles = await fetchNewsQuery(query)
                dispalyBlogs(articles)
            } catch (error) {
                console.log("Error fetching news by query", error)
            }
        }
    });


    // Function to fetch random news incase the user visits the website for the fisrt time
    async function fetchRandomNews() {
        try {
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apikey}`;

            //fetching data using  async await and api from url

            const response = await fetch(apiUrl);

            //storing respose  in json format  in the variable data
            const data = await response.json();


            return data.articles;
        } catch (error) {
            console.error("Error fetching random news:", error);
            return [];
        }
    }

    //function to fetch the data rom the below uRl
    async function fetchNewsQuery(query: string) {

        try {
            const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apikey}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            return data.articles;
        } catch (error) {
            console.error("Error fetching random news:", error);
            return [];
        }

    }

    // Function to display blogs
    function dispalyBlogs(articles: any[]) {
        blogContainer.innerHTML = "";

        articles.forEach((article) => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            const img = document.createElement("img");
            img.src = article.urlToImage;
            img.alt = article.title;
            const title = document.createElement("h2");

            //title.textContent = article.title;
            const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "......" : article.title;
            title.textContent = truncatedTitle;


            const description = document.createElement("p");
            description.textContent = article.description;

            blogCard.appendChild(img);
            blogCard.appendChild(title);
            blogCard.appendChild(description);
            blogCard.addEventListener("click", () => {

                window.open(article.url, "_blank")
            });


            blogContainer.appendChild(blogCard);
        });
    }

    // Use a init method for fetching news
    async function main() {
        // Initiating function fetchRandomNews
        try {
            const articles = await fetchRandomNews();
            dispalyBlogs(articles);
        } catch (error) {
            console.log("Error fetching random news:", error);
        }
    }

    main();
});
