function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  box: document.querySelector("#boxes"),
  btnCreate: document.querySelector(`button[data-create]`),
  btnDelete: document.querySelector(`button[data-destroy]`),
  input: document.querySelector("input"),
};
// Remove arrov function
const destroyBoxes = () => (refs.box.innerHTML = "");

refs.btnCreate.addEventListener("click", () => {
  destroyBoxes();
  refs.box.append(...createBoxes(refs.input.value));
  refs.input.value = 0;
  console.dir(box);
});
refs.btnDelete.addEventListener("click", destroyBoxes);

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
