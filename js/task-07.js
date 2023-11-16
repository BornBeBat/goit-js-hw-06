const sizeControl = document.querySelector("#font-size-control");

const text = sizeControl.nextElementSibling.nextElementSibling;

sizeControl.addEventListener("input", (event) => {
  text.style.fontSize = `${sizeControl.value}px`;
});
