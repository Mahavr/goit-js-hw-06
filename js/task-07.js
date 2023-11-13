const inputEl = document.querySelector(`#font-size-control`);
const inputText = document.querySelector(`#text`);
inputText.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener("input", (event) => {
    console.log(event.target.value);
    inputText.style.fontSize = `${event.target.value}px`;
  
});
