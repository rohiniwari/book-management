let books = [];  // main array

const imageURL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

// redirect functions
function goHome() {
    window.location.href = "index.html";
}

// Add Book
const form = document.getElementById("bookForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;

        const book = {
            title,
            author,
            category,
            imageUrl: imageURL
        };

        books.push(book);
        renderBooks(books);

        form.reset();
    });
}

// Render UI
function renderBooks(list) {
    const container = document.getElementById("booksContainer");
    container.innerHTML = "";

    list.forEach((book, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${book.imageUrl}" alt="book">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <button onclick="deleteBook(${index})">Delete</button>
        `;

        container.appendChild(card);
    });
}

// Delete Book
function deleteBook(index) {
    books.splice(index, 1);
    renderBooks(books);
}

// Sorting
function sortAZ() {
    books.sort((a, b) => a.title.localeCompare(b.title));
    renderBooks(books);
}

function sortZA() {
    books.sort((a, b) => b.title.localeCompare(a.title));
    renderBooks(books);
}

// Filter
function filterBooks() {
    const value = document.getElementById("filterCategory").value;

    if (value === "All") {
        renderBooks(books);
    } else {
        const filtered = books.filter((b) => b.category === value);
        renderBooks(filtered);
    }
}
