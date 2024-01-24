const myLibrary = [];

const container = document.querySelector(".container");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {

};

function render() {
    myLibrary.forEach(book => {
        const card = document.createElement("div")
        card.dataset.id = myLibrary.indexOf(book);
        container.appendChild(card);
        
        card.innerHTML =
        `<h3 class="book-title">${book.title}</h3>
        <p class="book-author">By ${book.author}</p>
        <p class="book-pages">${book.pages} pages</p>
        <p class="book-read">${book.read}</p>`
    });
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 284, "Not Read");
const bible = new Book("The Bible", "Jesus", 666, "Read");

myLibrary.push(theHobbit);
myLibrary.push(bible);

render();
