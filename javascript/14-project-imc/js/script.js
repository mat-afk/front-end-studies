const data = [
  {
    min: 0,
    max: 18.4,
    range: "Menor que 18,5",
    classification: "Abaixo do peso",
    obesityLevel: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    range: "Entre 18,5 e 24,9",
    classification: "Normal",
    obesityLevel: "0",
  },
  {
    min: 25,
    max: 29.9,
    range: "Entre 25,0 e 29,9",
    classification: "Sobrepeso",
    obesityLevel: "I",
  },
  {
    min: 30,
    max: 39.9,
    range: "Entre 30,0 e 39,9",
    classification: "Obesidade",
    obesityLevel: "II",
  },
  {
    min: 40,
    max: 99,
    range: "Maior que 40,0",
    classification: "Obesidade grave",
    obesityLevel: "III",
  },
];

const imcTable = document.querySelector("#imc-table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const calculateBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

// Functions

function createTable(data) {
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const range = document.createElement("p");
    range.innerHTML = element.range;

    const classification = document.createElement("p");
    classification.innerHTML = element.classification;

    const obesityLevel = document.createElement("p");
    obesityLevel.innerHTML = element.obesityLevel;

    div.appendChild(range);
    div.appendChild(classification);
    div.appendChild(obesityLevel);

    imcTable.appendChild(div);
  });
}

createTable(data);
