const categoriesNum = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesNum.length}`);

const categoriesItem = document.querySelectorAll(".item");

categoriesItem.forEach((element) => {
  const categoryTitle = element.firstElementChild.textContent;
  const categoryElementNum = element.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementNum}`);
});
