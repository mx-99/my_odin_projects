const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title},${this.author},${this.pages},${this.read}`

    }
}

function addBookToLibrary() {
    let title = prompt("enter title")
    let author = prompt("enter author")
     let pages = prompt("enter how many pages ")
     let read = prompt("did you read this book 'yes or no'")
     let newBook = new book(title, author, pages, read)
     myLibrary.push(newBook)
 }