let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.remove = "Remove";
}

const add = document.querySelector(".add");

function addBookToLibrary() {
  //get values of each input
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("read");
  //assign value for checkbox on whether it's checked or not
  if (isRead.checked === true) {
    isRead = "Read";
  } else isRead = "Not read yet";

  const book = new Book();

  myLibrary.push(book);

  return myLibrary;
}

//get values from the modal input
//grab add book button from html and make it a DOM
//add a eventlistner to listen for click
//when clicked, open up the modal

const addBtn = document.querySelector(".add");
console.log(addBtn);
const modalForm = document.querySelector(".modal");
console.log(modalForm);

const form = document.querySelector("form");
console.log(form);
addBtn.addEventListener("click", () => {
  modalForm.showModal();
  addBookToLibrary();
  form.reset();
  //displayBooks in the myLibraryarray
});
