const formInput = document.querySelector("#name-input");
const text = document.querySelector("#name-output");
formInput.addEventListener("input", (event) =>
  formInput.value === ""
    ? (text.textContent = "Anonymous")
    : (text.textContent = event.currentTarget.value)
);
