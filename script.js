let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function removeBook(index) {
  myLibrary = myLibrary.splice(index, 1);
  displayBooks();
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

function displayBook(book, index) {
  const eachBook = document.createElement("div");
  //give eachBook an index
  eachBook.dataset.index = index;

  eachBook.classList.add("eachBook");
  // document.body.appendChild(eachBook);
  shelf.appendChild(eachBook);

  for (const property in book) {
    const bookProperty = document.createElement("p");
    //loop through properties of each Book item
    bookProperty.textContent = `${book[property]}`;
    eachBook.appendChild(bookProperty);
  }

  //Create remove button when display each Book too!
  //All that are happening within eachBook card , goes here
  const removeBtn = document.createElement("button");

  removeBtn.style.cssText =
    "background-color: rgb(79, 160, 149); color: white; border: none; font-size: medium; font-weight: 700; border-radius: .3rem; width: 8rem; height: 2.5rem";
  removeBtn.textContent = "Remove";
  // removeBtn.classList.add = ("removeBtn", "property");
  eachBook.appendChild(removeBtn);
  removeBtn.addEventListener("click", () => {
    removeBook(index);
  });
  //Toggle
  const readToggle = eachBook.querySelector("p:nth-child(4)");

  console.log(readToggle); //null why???
  card.style.cssText =
    "background-color: rgb(186, 209, 194); text-align: center; min-width:10rem; border-radius:.5rem; padding: 2rem;";

  readToggle.addEventListener("click", () => toggle(index));

  document.querySelector("form").reset();
}

addBtn.addEventListener("click", () => {
  modalForm.showModal();
});

form.addEventListener("submit", () => {
  addBookToLibrary();
  displayBook();
});
