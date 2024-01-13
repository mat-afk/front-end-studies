// Selecting elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const limitInput = document.querySelector("#limit");

// Functions

// Event listeners

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = parseInt(numberInput.value);
  const limit = parseInt(limitInput.value);

  if (!number || !limit) return;
  

  console.log(number, limit);
});
