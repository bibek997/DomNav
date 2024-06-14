function addBook() {
    const bookTitle = prompt("Enter the book title:");
    if (bookTitle) {
        const ul = document.getElementById('book-list');
        const li = document.createElement('li');
        li.textContent = bookTitle;
        ul.appendChild(li);
    }
}

function searchBook() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const books = document.querySelectorAll('#book-list li');
    books.forEach(book => {
        if (book.textContent.toLowerCase().includes(searchTerm)) {
            book.style.backgroundColor = 'yellow';
        } else {
            book.style.backgroundColor = '';
        }
    });
}

function removeBook() {
    const ul = document.getElementById('book-list');
    const lastBook = ul.lastElementChild;
    if (lastBook && confirm("Are you sure you want to remove the last book?")) {
        ul.removeChild(lastBook);
    }
}

function clearSearchHighlights() {
    const books = document.querySelectorAll('#book-list li');
    books.forEach(book => {
        book.style.backgroundColor = '';
    });
}
