const myLibrary = [];
const addBookButton = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("form span");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
