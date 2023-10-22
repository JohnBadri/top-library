const myLibrary = [];
const addBookButton = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("form span");
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

modal.addEventListener("submit", function (event) {
  const bookName = document.querySelector(".book").value;
  const authorName = document.querySelector(".author").value;
  const numberPages = document.querySelector(".pages").value;
  const haveYouRead = document.getElementById("read").value;
  addBookToLibrary(bookName, authorName, numberPages, haveYouRead);
  modal.close();
});

function Book(name, author, page, read) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(name, author, page, read) {
  const newBook = new Book(name, author, page, read);
  myLibrary.push(newBook);

  const addTr = document.createElement("tr");
  tbody.appendChild(addTr);

  Object.entries(newBook).forEach(([key, value]) => {
    const addInnerTd = document.createElement("td");
    addInnerTd.textContent = value;
    addTr.appendChild(addInnerTd);
  });

  const editStatus = document.createElement("td");
  editStatus.innerHTML = `<button class="status">Change Status</button>`;
  const deleteBook = document.createElement("td");
  deleteBook.innerHTML = `<button class="delete">Delete Book</button>`;

  addTr.append(editStatus, deleteBook);
}
