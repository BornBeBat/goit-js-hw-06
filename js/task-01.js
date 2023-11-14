const categoris = document.querySelector("#categories");
console.log("Number of categories:", categoris.children.length);
const itemList = document.querySelectorAll("#categories ul");
itemList.forEach((item) => {
  console.log("Category:", item.previousElementSibling.textContent);
  console.log("Elements:", item.children.length);
});
