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

  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);

  return myLibrary;
}

//get values from the modal input
//grab add book button from html and make it a DOM
//add a eventListener to listen for click
//when clicked, open up the modal

const addBtn = document.querySelector(".add");
console.log(addBtn);
const modalForm = document.querySelector(".modal");
console.log(modalForm);

const form = document.querySelector("form");
console.log(form);
addBtn.addEventListener("click", () => {
  modalForm.showModal();
});

form.addEventListener("submit", () => {
  addBookToLibrary();
  form.reset();
  //displayBooks in the myLibrary array
  displayBooks();
});
const shelf = document.querySelector(".shelf");

console.log(shelf);

function displayBooks() {
  //Remove the whole shelf except modal html element
  // > = was the problem!
  while (shelf.childElementCount > 1) shelf.lastChild.remove();
  console.log(shelf);
  //loop through array and create Book for each element
  myLibrary.forEach((element) => {
    const eachBook = document.createElement("div");
    eachBook.classList.add("eachBook");
    document.body.appendChild(eachBook);
    for (const property in element) {
      //create DOM element for each Book's property
      const bookProperty = document.createElement("p");
      //Insert text for each Book's property
      bookProperty.textContent = `${element[property]}`;
      //append the Book's property DOM to the eachBook card

      eachBook.appendChild(bookProperty);
      console.log(`${property}: ${element[property]}`);
    }
  });

  const removeBtn = document.querySelector(".eachBook p:nth-child(5)");
  // removeBtn.addEventListener("click");
  console.log(removeBtn);
}
