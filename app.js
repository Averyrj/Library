let myLibrary = [];
const newTitle = document.getElementById("title")
const newAuthor = document.getElementById("author")

const newBook = new Book(newTitle.value, newAuthor.value)

function Book(title, author) {
    this.title = title
    this.author = author
    console.log(title, author)
}

function addBookToLibrary() {
    // do stuff here
}

const tester = new Book('eye of the world', 'robert jordan')