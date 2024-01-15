const data = [
  {
    min: 0,
    max: 18.4,
    range: "Menor que 18,5",
    classification: "Abaixo do peso",
    obesityLevel: "0",
    class: "underweight",
  },
  {
    min: 18.5,
    max: 24.9,
    range: "Entre 18,5 e 24,9",
    classification: "Normal",
    obesityLevel: "0",
    class: "normal",
  },
  {
    min: 25,
    max: 29.9,
    range: "Entre 25,0 e 29,9",
    classification: "Sobrepeso",
    obesityLevel: "I",
    class: "overweight",
  },
  {
    min: 30,
    max: 39.9,
    range: "Entre 30,0 e 39,9",
    classification: "Obesidade",
    obesityLevel: "II",
    class: "obesity",
  },
  {
    min: 40,
    max: 99,
    range: "Maior que 40,0",
    classification: "Obesidade grave",
    obesityLevel: "III",
    class: "severe-obesity",
  },
];

const bmiTable = document.querySelector("#bmi-table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const calculateBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

const bmiNumber = document.querySelector("#bmi-number span");
const bmiInfo = document.querySelector("#bmi-info span");

const calculateContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

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

    bmiTable.appendChild(div);
  });
}

function calculateBMI(height, weight) {
  return weight / height ** 2;
}

function replaceInvalidDigits(text) {
  return text.replace(/[^0-9,.]/g, "");
}

function clearInputs() {
  heightInput.value = "";
  weightInput.value = "";
}

// Events

[heightInput, weightInput].forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = replaceInvalidDigits(e.target.value);
  });
});

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  createTable(data);

  const height = heightInput.value.replace(",", ".");
  const weight = weightInput.value.replace(",", ".");

  if (!height || !weight || height <= 0 || weight <= 0) {
    return;
  }

  const bmi = calculateBMI(height, weight);

  data.forEach((element) => {
    if (bmi >= element.min && bmi <= element.max) {
      bmiNumber.innerHTML = bmi.toFixed(2);
      bmiNumber.classList.add(element.class || "normal");

      bmiInfo.innerHTML = element.classification;
      bmiInfo.classList.add(element.class || "normal");
    }
  });

  calculateContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputs();
});
