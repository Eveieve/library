let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
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

  myLibrary.push(book);

  return myLibrary;
}

const container = document.querySelector(".container");
const display = document.querySelector(".display");

function displayBook() {
  const card = document.createElement("div");

  for (const property in myLibrary[myLibrary.length - 1]) {
    const bookEl = document.createElement("p");
    bookEl.textContent = `${myLibrary[myLibrary.length - 1][property]}`;

    card.appendChild(bookEl);
  }

  const readToggle = card.querySelector("p:nth-child(4)");

  function toggle() {
    if (readToggle.textContent === "Read") {
      myLibrary[myLibrary.length - 1].isRead = "Not read yet";
      readToggle.textContent = "Not read yet";
    } else {
      myLibrary[myLibrary.length - 1].isRead = "Read";
      readToggle.textContent = "Read";
    }
  }

  readToggle.addEventListener("click", toggle);

  container.appendChild(card);
  card.style.cssText =
    "background-color: rgb(186, 209, 194); text-align: center; min-width:10rem; border-radius:.5rem; padding: 2rem;";

  document.querySelector("form").reset();

  const remove = document.createElement("button");
  remove.style.cssText =
    "background-color: rgb(79, 160, 149); color: white; border: none; font-size: medium; font-weight: 700; border-radius: .3rem; width: 8rem; height: 2.5rem";
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

submit.addEventListener("submit", () => {
  addBookToLibrary();
  displayBook();
});
