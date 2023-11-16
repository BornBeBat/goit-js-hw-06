function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("#boxes");
const btnCreate = document.querySelector(`button[data-create]`);
const btnDelete = document.querySelector(`button[data-destroy]`);
const input = document.querySelector("input");
btnCreate.addEventListener("click", () => {
  removeDiv();
  box.append(...createDivPack(input.value));
  input.value = 0;
});
btnDelete.addEventListener("click", removeDiv);

function createDiv(a) {
  const el = document.createElement("div");

  el.style.width = `${30 + a * 10}px`;
  el.style.height = `${30 + a * 10}px`;
  el.style.backgroundColor = getRandomHexColor();
  return el;
}

function createDivPack(number) {
  const newArr = [];
  for (let i = 0; i < number; i++) {
    newArr.push(createDiv(i));
  }
  return newArr;
}

function removeDiv() {
  const elements = box.children;
  for (let i = elements.length - 1; i >= 0; i--) {
    elements[i].remove();
  }
}
