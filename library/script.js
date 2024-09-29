
const myLibrary = [];

function Book(title, author, noPages, read) {
  this.title = title;
  this.author = author;
  this.noPages = noPages;
  this.read = read;
  this.info = function() {
    return title + " by " + author + ", " + noPages + " pages" + ", " + (read ? "finished" : "not finished") + "."; 
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  showBooksOnPage();
}

function showBooksOnPage() {
  const pageText = document.querySelector(".book-list");
  pageText.textContent = "";
  myLibrary.forEach((book, index) => {
    const bookElem = document.createElement("div");
    bookElem.classList += "book";

    const bookText = document.createElement("div");
    bookText.textContent = book.title + " - " + book.author + " - " + book.noPages + " pages"

    const bookCheck = document.createElement("input");
    bookCheck.setAttribute("type", "checkbox");
    bookCheck.checked = book.read;
    bookCheck.onclick = function() {
      book.read = !book.read;
      showBooksOnPage();
    };
    
    const bookDel = document.createElement("button");
    bookDel.classList += "btn-del";
    bookDel.textContent = "delete";
    bookDel.onclick = function() {
      myLibrary.splice(index, 1);
      showBooksOnPage();
    };

    bookElem.append(bookText);
    bookElem.append(bookCheck);
    bookElem.append(bookDel);

    pageText.append(bookElem);
  });
}

function readForm() {
  const form = document.querySelector("form");
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const checkbox = document.querySelector("#read");

  /* Validate here :D */

  addBookToLibrary(new Book(title.value, author.value, pages.value, checkbox.checked));
  // addBookToLibrary(new Book("Exercices de style", "Raymond Queneau", 164, true));
}


/* LISTENERS */
const addBtn = document.querySelector(".btn-add");
const formBox = document.querySelector(".form-box");
addBtn.addEventListener("click", function() {
  if (formBox.style.display == "none")
    formBox.style.display = "";
  else
  formBox.style.display = "none";
});

const subBtn = document.querySelector(".btn-submit");
subBtn.addEventListener("click", function() {
  readForm();
});

const form = document.querySelector("form");
function submitForm(event){
   event.preventDefault(); //Preventing page refresh
}
form.addEventListener('submit', submitForm); //Calling a function during form submission.
// Source: https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript



/* MAIN CODE AND QUERIES */
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
addBookToLibrary(new Book("Chwila/Moment", "Wislawa Szymborska", 89, true));
addBookToLibrary(new Book("Exercices de style", "Raymond Queneau", 164, true));

// for (let i = 0; i < 50; i++) {
//   addBookToLibrary(new Book("Lorem", "Merol", 1515, true));
// }


/* SHOW ON PAGE */
showBooksOnPage();