function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("#boxes");
const btnCreate = document.querySelector(`button[data-create]`);
const btnDelete = document.querySelector(`button[data-destroy]`);
const input = document.querySelector("input");
// Remove arrov function
const destroyBoxes = () => (box.innerHTML = "");

btnCreate.addEventListener("click", () => {
  destroyBoxes();
  box.append(...createBoxes(input.value));
  input.value = 0;
  console.dir(box);
});
btnDelete.addEventListener("click", destroyBoxes);

function createBox(a) {
  const el = document.createElement("div");

  el.style.width = `${30 + a * 10}px`;
  el.style.height = `${30 + a * 10}px`;
  el.style.backgroundColor = getRandomHexColor();
  return el;
}

function createBoxes(number) {
  const newArr = [];
  for (let i = 0; i < number; i++) {
    newArr.push(createBox(i));
  }
  return newArr;
}
