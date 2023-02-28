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

add.addEventListener("click", addBookToLibrary);
