let counterValue = 0;
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector("#value");
decrementBtn.addEventListener("click", changeValue);
incrementBtn.addEventListener("click", changeValue);

function changeValue(event) {
  const counter = event.currentTarget;

  if (counter.dataset.action === "decrement") {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }
  valueEl.textContent = counterValue;
}
