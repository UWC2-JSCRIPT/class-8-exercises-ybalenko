const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';



formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const year = yearEl.value;
    const month = monthEl.value;
    const date = dateEl.value;
    const publishedDate = `${year}-${month}-${date}`;

    const url = `${BASE_URL}?published_date=${publishedDate}&api-key=${API_KEY}`;
    // Fetch bestselling books for date and add top 5 to page

    fetch(url)
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);

            var fictionList = null;
            for (let ls of data.results.lists) {
                if (ls.list_id == 1) {
                    fictionList = ls;
                    break;
                }
            }

            var topFive = [];
            for (let book of fictionList.books) {
                topFive.push(book);
                if (topFive.length >= 5) {
                    break;
                }
            }

            var divE = document.getElementById('books-container');
            var ulE = divE.querySelector('ul');
            if (ulE != undefined) {
                ulE.remove();
            }
            ulE = document.createElement('ul');
            divE.appendChild(ulE);

            for (let book of topFive) {
                const bookTitle = book.title;
                const bookAuthor = book.author;
                const bookDescription = book.description;
                var liE = document.createElement('li');
                liE.innerText = `Title: ${bookTitle}\nAuthor: ${bookAuthor}\nDescription: ${bookDescription}`;
                ulE.appendChild(liE);
            }

        })
});

