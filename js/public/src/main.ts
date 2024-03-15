import './style.css';
import {onSearch} from "./service.ts";
import {shouldSearch} from "./helper.ts";

window.addEventListener('load', async () => {
    const searchButton = document.getElementById('search-button') as HTMLButtonElement;
    const searchForm = document.getElementById('search-form') as HTMLFormElement;

    // Adding event listener for the button tag
    searchButton.addEventListener("click", async () => shouldSearch());

    searchForm.addEventListener('submit', async (event) => {
        // Preventing the default behavior of the form
        event.preventDefault();
        await shouldSearch();
    });

    await onSearch();
});
