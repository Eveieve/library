let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.remove = "Remove";
}

const add = document.querySelector(".add");

function removeBook(index) {
  myLibrary = myLibrary.splice(index, 1);
  displayBooks(); //different from displayBook?
}

function toggle(index) {
  myLibrary[index].isRead =
    myLibrary[index].isRead === "Read" ? "Not read yet" : "Read";
  displayBooks();
}

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

  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);

  return myLibrary;
}

const addBtn = document.querySelector(".add");
// console.log(addBtn);
const modalForm = document.querySelector(".modal");
// console.log(modalForm);

const form = document.querySelector("form");
// console.log(form);
addBtn.addEventListener("click", () => {
  modalForm.showModal();
});

form.addEventListener("submit", () => {
  addBookToLibrary();
  form.reset();
  displayBooks();
});
const shelf = document.querySelector(".shelf");

// console.log(shelf);

function displayBooks() {
  //Remove the whole shelf except modal html element
  while (shelf.childElementCount > 1) shelf.lastChild.remove();
  // console.log(shelf);
  //loop through array and create Book for each element

  const eachBook = document.createElement("div");
  eachBook.classList.add("eachBook");
  document.body.appendChild(eachBook);

  for (const property in myLibrary[myLibrary.length - 1]) {
    const bookProperty = document.createElement("p");
    bookProperty.textContent = `${myLibrary[myLibrary.length - 1][property]}`;
    eachBook.appendChild(bookProperty);
  }

  const removeBtn = document.querySelector(".eachBook p:nth-child(5)");

  removeBtn.addEventListener("click", () => {
    removeCard();
  });
}

function removeCard(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}
