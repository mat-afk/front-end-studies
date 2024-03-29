// Strict
"use strict";

// greet = "Hello World!";
const greet = "Hello World!";

// const undefined = 0;

// delete [].length;

// Log
let a = 1;
let b = 2;

for (let i = 0; i < b; i++) {
  a += i + 2;
  console.log(a);
}

// Debugger
// debugger;

let c = 1;
let d = 2;

for (let i = 0; i < d; i++) {
  c += d + i + 2;
}

// Validate user input
function validate(value) {
  const input = Number(value);

  if (!typeof value === "number" || isNaN(value)) {
    console.log("Please enter a number.");
    return;
  }

  return input;
}

console.log(validate("Hello, World!"));
console.log(validate("123"));

// Exceptions
function divide(a, b) {
  if (b === 0) {
    throw new Error("you cannot divide by zero.");
  }

  return a / b;
}

// divide(1, 0);

// Try... catch
try {
  divide(1, 1);
} catch (error) {
  console.log("Runtime Exception:", error.message);
}

// Finally
const result = 0;
try {
  result = divide(1, 0);
} catch (error) {
  console.log("Runtime Exception:", error.message);
} finally {
  console.log("The result of the division is:", result);
}
