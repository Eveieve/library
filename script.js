let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.name} is by ${this.author}, ${this.pages}pages.`;
  };
}

let title = "";

const add = document.querySelector(".add");

function addBookToLibrary() {
  title = document.getElementById("title").value;
  myLibrary.push(title);
  console.log(myLibrary);
  return myLibrary;
}

const list = document.querySelector(".list");

const display = document.querySelector(".display");

display.addEventListener("click", displayBook);

function displayBook() {
  myLibrary.forEach((book) => {
    const bookEl = document.createElement("p");
    bookEl.textContent = book;
    list.appendChild(bookEl);
    console.log(bookEl);
  });
}

const modal = document.querySelector(".modal");

add.addEventListener("click", () => {
  modal.showModal();
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", addBookToLibrary);
submit.addEventListener("click", displayBook);
