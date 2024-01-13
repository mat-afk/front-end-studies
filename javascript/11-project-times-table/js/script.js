// Selecting elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const limitInput = document.querySelector("#limit");

const title = document.querySelector("#multiplication-title span");

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Functions
const createTable = (number, limit) => {
  multiplicationTable.innerHTML = "";

  for (let i = 1; i <= limit; i++) {
    const template = `<div class="row">
        <div class="operation">${number} X ${i} =</div>
        <div class="result">${number * i}</div>
    </div>`;

    const parser = new DOMParser();
    const HTMLTemplate = parser.parseFromString(template, "text/html");

    const row = HTMLTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);

    title.innerHTML = number;
  }
};

// Event listeners
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = parseInt(numberInput.value);
  const limit = parseInt(limitInput.value);

  if (!number || !limit) return;

  createTable(number, limit);
});
