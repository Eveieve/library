/* eslint-disable operator-linebreak */
const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let isRead = document.getElementById("read");

  if (isRead.checked === true) {
    isRead = "Read";
  } else isRead = "Not read yet";

  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);

  return myLibrary;
}

const container = document.querySelector(".container");
const add = document.querySelector(".add");

function displayBook(book, indexOfBook) {
  const card = document.createElement("div");
  for (const property in book) {
    const bookEl = document.createElement("p");

    bookEl.textContent = `${book[property]}`;
    console.log(indexOfBook); // already knows indexOfBook of each thing!
    card.appendChild(bookEl);
  }

  // create removeBtn
  const remove = document.createElement("button");

  remove.style.cssText =
    "background-color: rgb(79, 160, 149); color: white; border: none; font-size: medium; font-weight: 700; border-radius: .3rem; width: 8rem; height: 2.5rem";
  remove.textContent = "Remove";
  remove.classList.add = ("removeBtn", "property");
  card.appendChild(remove);

  function removeBook(i) {
    myLibrary.splice(i, 1);
    // eslint-disable-next-line no-use-before-define
    updateBooks(); //
  }

  function toggle(i) {
    // Book at certain indexOfBook...
    myLibrary[i].isRead =
      myLibrary[i].isRead === "Read" ? "Not read yet" : "Read";
    // eslint-disable-next-line no-use-before-define
    updateBooks();
  }

  remove.addEventListener("click", () => removeBook(indexOfBook));
  // Toggle
  const readToggle = card.querySelector("p:nth-child(4)");
  readToggle.addEventListener("click", () => toggle(indexOfBook));

  container.appendChild(card);
  card.style.cssText =
    "background-color: rgb(186, 209, 194); text-align: center; min-width:10rem; border-radius:.5rem; padding: 2rem;";

  document.querySelector("form").reset();
}
const updateBooks = () => {
  while (container.childElementCount > 1) container.lastChild.remove();
  myLibrary.forEach(displayBook);
};

const modal = document.querySelector(".modal");

add.addEventListener("click", () => {
  modal.showModal();
});

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  addBookToLibrary();
  updateBooks();
});
