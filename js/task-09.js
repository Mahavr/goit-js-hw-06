function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
let color = document.querySelector(`.color`);
changeBtn.addEventListener('click', () => {
  let currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  color.textContent = currentColor; 
})
