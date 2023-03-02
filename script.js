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

const add = document.querySelector(".add");

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("read");

  if (isRead.checked === true) {
    isRead = "Read";
  } else isRead = "Not read yet";

  //Create book object for each add
  //Need to put numbers on objects?
  const book = new Book(title, author, pages, isRead);
  console.log(book);
  myLibrary.push(book.title, book.author, book.pages, book.isRead);

  // myLibrary.push(title);
  // myLibrary.push(author);
  // myLibrary.push(pages);

  console.log(myLibrary);
  return myLibrary;
}

const container = document.querySelector(".container");
const display = document.querySelector(".display");

function displayBook() {
  const card = document.createElement("div");

  myLibrary.forEach((book) => {
    const bookEl = document.createElement("p");
    bookEl.classList.add = "property";
    bookEl.textContent = book;
    card.appendChild(bookEl);
    console.log(bookEl);
  });
  container.appendChild(card);
  card.style.cssText =
    "background-color: #3A98B9; text-align: center; min-width:10rem; border-radius:.5rem; padding: 1rem;";

  myLibrary = [];
  document.querySelector("form").reset();

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.classList.add = ("removeBtn", "property");
  card.appendChild(remove);

  function removeCard() {
    card.remove();
  }
  remove.addEventListener("click", removeCard);
}

const modal = document.querySelector(".modal");

add.addEventListener("click", () => {
  modal.showModal();
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", addBookToLibrary);
submit.addEventListener("click", displayBook);
