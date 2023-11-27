// Declare variable
const btnDec = document.querySelector(`button[data-action="decrement"]`);
const btnInc = document.querySelector(`button[data-action="increment"]`);
const counterText = document.querySelector("#value");
let counterValue = 0;
// Button Decrement
btnDec.addEventListener("click", () => {
  counterValue -= 1;
  counterText.innerHTML = counterValue;
});
// Button Increment
btnInc.addEventListener("click", () => {
  counterValue += 1;
  counterText.innerHTML = counterValue;
});
