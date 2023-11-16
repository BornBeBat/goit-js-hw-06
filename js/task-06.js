const input = document.querySelector("#validation-input");
const classInp = input.classList;
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    classInp.add("valid");
    classInp.remove("invalid");
  } else if (event.currentTarget.value.length === 0) {
    classInp.remove("invalid");
    classInp.remove("valid");
  } else {
    classInp.add("invalid");
    classInp.remove("valid");
  }
});
