const container = document.querySelector(".container");
const addBtn = document.querySelector(".add-btn");

const myLibrary = [];

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.id = Date.now();
  }
}
// instance methods
// for every instance they should have an unique ID

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read-status");

  if (readStatus.checked === true) {
    readStatus = "Read";
  } else readStatus = "Not read yet";

  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);

  return { myLibrary, readStatus };
}

const book1 = new Book("pride and prejudice", "jane austen", "234", true);
console.log(book1);

// rendering function
function renderBook(book, indexOfBook) {
  const card = document.createElement("div");

  Object.keys(book).forEach((key) => {
    const bookEl = document.createElement("p");
    bookEl.textContent = `${book[key]}`;

    card.appendChild(bookEl);
  });

  // create removeBtn
  const removeBtn = document.createElement("button");
  removeBtn.classList.add = ("remove-btn", "property");
  removeBtn.textContent = "Remove";
  card.appendChild(removeBtn);

  function toggle(i) {
    // Book at certain indexOfBook...
    myLibrary[i].readStatus =
      myLibrary[i].readStatus === "Read" ? "Not read yet" : "Read";
    // eslint-disable-next-line no-use-before-define
    updateBooks();
  }
  removeBtn.addEventListener("click", () => removeBook(indexOfBook));
  // Toggle
  const readUI = card.querySelector("p:nth-child(4)");
  readUI.addEventListener("click", () => toggle(indexOfBook));
  readUI.classList.add = "read";
  container.appendChild(card);
  card.style.cssText =
    " box-shadow: 0 0 1rem rgb(0 0 0 / 0.3);background-color: rgb(186, 209, 194); text-align: center; min-width:10rem; min-height: 10rem;border-radius:.5rem; padding: 2rem;";
  document.querySelector("form").reset();
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  // eslint-disable-next-line no-use-before-define
  updateBooks(); //
}

const updateBooks = () => {
  while (container.childElementCount > 1) container.lastChild.remove();
  myLibrary.forEach(renderBook);
};

const modal = document.querySelector(".modal");

addBtn.addEventListener("click", () => {
  modal.showModal();
});

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  addBookToLibrary();
  updateBooks();
});
