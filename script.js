const myLibrary = [];
const container = document.querySelector(".container");
const addBookForm = document.querySelector(".add-book-form")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
};


function render() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }

    myLibrary.forEach(book => {
        const card = document.createElement("div")
        const removeButton = document.createElement("button");

        card.className = "book-card";
        card.dataset.id = myLibrary.indexOf(book);
        card.innerHTML =
        `<h3 class="book-title">${book.title}</h3>
        <p class="book-author">By ${book.author}</p>
        <p class="book-pages">${book.pages} pages</p>
        <p class="book-read">${book.read}</p>`

        removeButton.className = "del-btn";
        removeButton.textContent = "Delete";
        removeButton.addEventListener("click", (e) => {
            const i = e.target.parentNode.dataset.id;

            myLibrary.forEach(book => {
                if (myLibrary.indexOf(book) == i) {
                    myLibrary.splice(i, 1);
                    render();
                    return;
                }
            })
        })

        container.appendChild(card);
        card.appendChild(removeButton);
    });
}

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    addBookForm.reset();
    render();
});



// const theHobbit = new Book("The Hobbit", "JRR Tolkien", 284, "Not Read");
// const bible = new Book("The Bible", "Jesus", 666, "Read");

// myLibrary.push(theHobbit);
// myLibrary.push(bible);

// render();
