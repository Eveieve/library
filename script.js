/* eslint-disable operator-linebreak */
const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// function addBookToLibrary() {
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const pages = document.getElementById("pages").value;
//   let readStatus = document.getElementById("read");

//   if (readStatus.checked === true) {
//     readStatus = "Read";
//   } else readStatus = "Not read yet";

//   const book = new Book(title, author, pages, readStatus);

//   myLibrary.push(book);

//   return myLibrary;
// }

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  updateBooks(); //
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
    "cursor: pointer;box-shadow: 0 0 1rem rgb(0 0 0 / 0.3);background-color: rgb(79, 160, 149); color: white; border: none; font-size: medium; font-weight: 700; border-radius: .3rem; width: 8rem; height: 2.5rem";
  remove.textContent = "Remove";
  remove.classList.add = ("removeBtn", "property");
  card.appendChild(remove);

  function toggle(i) {
    // Book at certain indexOfBook...
    myLibrary[i].readStatus =
      myLibrary[i].readStatus === "Read" ? "Not read yet" : "Read";
    // eslint-disable-next-line no-use-before-define

    updateBooks();
  }

  remove.addEventListener("click", () => removeBook(indexOfBook));
  // Toggle
  const readToggle = card.querySelector("p:nth-child(4)");
  readToggle.addEventListener("click", () => toggle(indexOfBook));
  readToggle.classList.add = "read";
  container.appendChild(card);
  card.style.cssText =
    " box-shadow: 0 0 1rem rgb(0 0 0 / 0.3);background-color: rgb(186, 209, 194); text-align: center; min-width:10rem; min-height: 10rem;border-radius:.5rem; padding: 2rem;";

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
