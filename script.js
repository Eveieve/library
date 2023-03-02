let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  // this.info = function () {
  //   return `${this.name} is by ${this.author}, ${this.pages}pages.`;
  // };
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

  const book = new Book(title, author, pages, isRead);
  console.log(book);

  myLibrary.push(book);
  console.log(myLibrary);
  return myLibrary;
}

const container = document.querySelector(".container");
const display = document.querySelector(".display");

function displayBook() {
  const card = document.createElement("div");

  for (const property in myLibrary[myLibrary.length - 1]) {
    console.log(`${property}: ${myLibrary[myLibrary.length - 1][property]}`);
    const bookEl = document.createElement("p");
    bookEl.textContent = `${myLibrary[myLibrary.length - 1][property]}`;

    card.appendChild(bookEl);
  }
  const readToggle = card.querySelector("p:nth-child(4)");
  console.log(readToggle);
  function toggle() {
    if (readToggle.textContent === "Read") {
      myLibrary[myLibrary.length - 1].isRead = "Not read yet";
      readToggle.textContent = "Not read yet";
      console.log(myLibrary[myLibrary.length - 1].isRead);
    } else {
      myLibrary[myLibrary.length - 1].isRead = "Read";
      readToggle.textContent = "Read";
      console.log(myLibrary[myLibrary.length - 1].isRead);
    }
  }

  readToggle.addEventListener("click", toggle);

  container.appendChild(card);
  card.style.cssText =
    "background-color: #3A98B9; text-align: center; min-width:10rem; border-radius:.5rem; padding: 1rem;";

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

submit.addEventListener("click", () => {
  addBookToLibrary();
  displayBook();
});
