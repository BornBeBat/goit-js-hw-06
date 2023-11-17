const colorText = document.querySelector(".color");
const bodyStyle = document.querySelector("body").style;
const btn = document.querySelector(".change-color");

btn.addEventListener("click", clickBtn);

function clickBtn(event) {
  const color = getRandomHexColor();
  bodyStyle.backgroundColor = color;
  colorText.textContent = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
