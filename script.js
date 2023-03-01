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
  let read = document.getElementById("read");

  myLibrary.push(title);
  myLibrary.push(author);
  myLibrary.push(pages);
  if (read.checked === true) {
    myLibrary.push("Read");
  } else myLibrary.push("Not read");
  console.log(myLibrary);
  return myLibrary;
}

const card = document.createElement("div");
const container = document.querySelector(".container");
const display = document.querySelector(".display");

function displayBook() {
  myLibrary.forEach((book) => {
    container.appendChild(card);
    card.style.cssText =
      "background-color: #3A98B9; text-align: center; max-width:10rem; border-radius:.5rem; padding: 1rem;";

    const bookEl = document.createElement("p");
    bookEl.classList.add = "property";
    bookEl.textContent = book;
    card.appendChild(bookEl);
    console.log(bookEl);
  });
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
