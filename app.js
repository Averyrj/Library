let myLibrary = [];

function Book(title, author) {
    this.title = title
    this.author = author
    console.log(title, author)
}

function submitFunction() {
    document.getElementById("form1").submit();
    const newTitle = document.getElementById("title").value;
    const newAuthor = document.getElementById("author").value;
    const newBook = new Book(newTitle, newAuthor)
    myLibrary.push(newBook)
    console.log(myLibrary[0])
}



const tester = new Book('eye of the world', 'robert jordan')