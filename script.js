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

let userInput;

const add = document.querySelector(".add");

function addBookToLibrary() {
  userInput = prompt("Which?");
  //push userInput into the array, making it an array of book names
  myLibrary.push(userInput);
  console.log(myLibrary);

  return myLibrary;
}

// add.addEventListener("click", addBookToLibrary);

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
const closeModal = document.querySelector(".close");

add.addEventListener("click", () => {
  modal.showModal();
});
