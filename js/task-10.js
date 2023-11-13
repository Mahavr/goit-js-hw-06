function getRandomHexColor() {
  const red = 0;
  const green = Math.floor(Math.random() * 64) + 64;
  const blue = 0;

  const hexColor = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

  return hexColor;
}

const inputEl = document.querySelector("#controls input");
const containerForBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let boxSize = 30;
let boxesMarkup = "";
containerForBoxes.style.cssText = `display: flex;
flex-direction:column;
     align-items: center;
  justify-self: center;
  `;
function createBoxes(amount) {
  for (let i = 0; i <= amount; i++) {
    const markup = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()} "></div>`;
    boxSize += 10;

    boxesMarkup += markup;
  }
  containerForBoxes.insertAdjacentHTML("beforeend", boxesMarkup);
}

function destroyBoxes() {
  containerForBoxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const numOfBoxes = inputEl.value;
  createBoxes(numOfBoxes);
});
destroyBtn.addEventListener("click", destroyBoxes);
