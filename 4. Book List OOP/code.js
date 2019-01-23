class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

class UI {
    constructor() {}
    addBookToList(book) {

        const list = document.querySelector("#book-list");
        //creating row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = '#' class = 'delete'>X</a></td>
            `;
        list.appendChild(row);
        //clearing fields after insertion
        this.clearFields();


    }
    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    showAlert(text, className) {
        const alert = document.createElement('div');
        //adding type of alert
        alert.className = `alert ${className}`;
        //adding text
        alert.appendChild(document.createTextNode(text));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(alert, form);
        setTimeout(this.removeAlert, 3000);
    }
    removeAlert() {
        document.querySelector('.alert').remove();
        //console.log(alert);
    }
    deletebook(book) {
        if (confirm('Are You Sure ?......')) {
            book.parentElement.parentElement.remove();
            this.showAlert('Book Successfully Deleted...', 'success');
        }
    }
}

//Main ui object
const ui = new UI();

class ForLocalStorage {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = ForLocalStorage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = ForLocalStorage.getBooks();
        books.forEach(function (book) {
            ui.addBookToList(book);
        });
    }

    static removeBook(isbn) {
        let books = ForLocalStorage.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', ForLocalStorage.displayBooks);

document.querySelector('#submitBtn').addEventListener('click', function (e) {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    if (title !== '' && author !== '' && isbn != '') {
        //creating book object
        const book = new Book(title, author, isbn);
        ui.addBookToList(book);
        ForLocalStorage.addBook(book);
        ui.showAlert('Book added successfully :)', 'success');
    } else {
        ui.showAlert('Please Fill the required fields.....', 'error');
    }

    e.preventDefault()
});

document.querySelector('#book-list').addEventListener('click', function (e) {
    if (e.target.className == 'delete') {

        ui.deletebook(e.target);
        ForLocalStorage.removeBook(e.target.parentElement.previousElementSibling.textContent);
    }
    e.preventDefault();
});