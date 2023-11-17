const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arrEl = ingredients.map((item) => {
  const current = document.createElement("li");
  current.textContent = `${item}`;
  current.classList.add("item");
  return current;
});
document.querySelector("#ingredients").append(...arrEl);
