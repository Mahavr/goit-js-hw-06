const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    outputEl.textContent = event.currentTarget.value;
  } else {
     outputEl.textContent = "Anonymous";
  }
});
