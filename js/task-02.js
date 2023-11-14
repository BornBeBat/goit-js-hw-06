const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arrEl = [];
ingredients.forEach((item, ind) => {
  arrEl[ind] = document.createElement("li");
  arrEl[ind].textContent = `${item}`;
  arrEl[ind].classList.add("item");
});
document.querySelector("#ingredients").append(...arrEl);
