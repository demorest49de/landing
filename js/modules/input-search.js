import {searchGoodsHandler} from "./restOperations.js";

const debounce = (fn, msec) => {
    let lastCall = 0;
    let lastCallTimerId = NaN;
    
    return (...args) => {
        const previousCall = lastCall;
        lastCall = Date.now();
        
        if (previousCall && ((lastCall - previousCall) < msec)) {
            clearTimeout(lastCallTimerId);
        }
        lastCallTimerId = setTimeout(() => fn(...args), msec);
    };
};

export const handleSearch = ($) => {
    const searchInput = document.querySelector('.nav__input');

    const requestSearchedItems = () => {

        searchGoodsHandler($, searchInput.value)
    };

    const handleRequestSearch = debounce(requestSearchedItems, 400);

    searchInput.addEventListener('input', () => {
        handleRequestSearch();

        console.dir(handleRequestSearch);
    });
};