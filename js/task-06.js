const input = document.querySelector("#validation-input");
const leng = +input.dataset.length;
const classInp = input.classList;
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === leng) {
    classInp.add("valid");
    classInp.remove("invalid");
  } else {
    classInp.add("invalid");
    classInp.remove("valid");
  }
});
