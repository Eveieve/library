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
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("read");
  if (isRead.checked === true) {
    isRead = "Read";
  } else isRead = "Not read yet";

  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);
  console.log(myLibrary.count);
  return myLibrary;
}
const shelf = document.querySelector(".shelf");
const addBtn = document.querySelector(".add");
const modalForm = document.querySelector(".modal");

const form = document.querySelector("form");
// console.log(form);

const displayBooks = () => {
  while (shelf.childElementCount > 1) shelf.lastChild.remove();
  //Call displayBook for element in the array
  myLibrary.forEach(displayBook);
};
addBtn.addEventListener("click", () => {
  modalForm.showModal();
});

form.addEventListener("submit", () => {
  addBookToLibrary();
  form.reset();
  displayBooks();
});

// console.log(shelf);

function displayBook() {
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
