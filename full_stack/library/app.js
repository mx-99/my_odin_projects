const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    clearForm();
}

function displayBooks() {
    const books = document.querySelector('.books')
    books.innerHTML = "";
    myLibrary.forEach((obj, index) => {
        const book_cards = document.createElement('div')
        book_cards.className = 'cards'
        book_cards.innerHTML = `
        <h3>${obj.title} <br> By: ${obj.author}</h3>
        <p>${obj.pages} pages ${obj.read ? "Read" : "Not Read"}</p>
        <button data-index="${index}" class="toggle-read">Read Status </button>
        <button data-index="${index}" class="remove-book">Remove </button>`;
        books.appendChild(book_cards)
    });
    attachEventListeners()
}

function attachEventListeners() {
    const toggleReadButtons = document.querySelectorAll('.toggle-read');
    const removeButtons = document.querySelectorAll('.remove-book');

    toggleReadButtons.forEach(button => {
        button.addEventListener('click', toggleRead);
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', removeBook);
    });
}

function toggleRead(event) {
    const index = event.target.dataset.index;
    myLibrary[index].toggleReadStatus();
    displayBooks();
}

function removeBook(event) {
    const index = event.target.dataset.index;
    myLibrary.splice(index, 1)
    displayBooks()
}

function clearForm() {
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("read").checked = false;
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#btn-add");
const closeButton = document.querySelector("#save");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
});


