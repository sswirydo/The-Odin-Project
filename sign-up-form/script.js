
const submit_btn = document.querySelector(".btn-create");
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("blur", () => {
    input.classList.add("touched");
  });
});

submit_btn.addEventListener("click", () => {
  inputs.forEach(input => {
    if (! input.checkValidity()) {
      input.style.borderColor = "red";
    }
  })
});


/* TODO: password - confirm password validation :D */ 
