const inputEl = document.querySelector(`#validation-input`);
inputEl.addEventListener("blur", (event) => {
  const eventTarget = event.target;
  if (eventTarget.value.length === parseInt(eventTarget.dataset.length)) {
    eventTarget.classList.remove("invalid");
    eventTarget.classList.add("valid");
  } else {
    eventTarget.classList.remove("valid");
    eventTarget.classList.add("invalid");
    }
 
});

