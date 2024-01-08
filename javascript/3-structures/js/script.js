// Variables
let nome = "Mateus";
console.log(nome);

nome = "Markiplier";
console.log(nome);

const age = 17;
console.log(age);

console.log(nome, typeof nome, age, typeof age);

let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);

const lastName = "Cruzatto";
const lastname = "Cruzatto";
console.log(lastName, lastname);

let _test = "Bababoey";
let $test = "Bababoey";
console.log(_test, $test);

// Built-in functions

// Prompt
// const firstName = prompt("What's your first name?");
// console.log(`Your name is ${firstName}`);

// // Alert
// alert(`Welcome, ${firstName}`);

// Math object and it's functions
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.random());
console.log(Math.floor(3.14));
console.log(Math.ceil(3.14));

// Console object and it's functions
console.error("Error");
console.warn("Warning");

// Control structures

// If statement
const m = 10;
if (m > 5) {
  console.log("M is greater than 5");
}

const user = "Mateus";
if (user === "Mateus") {
  console.log("Welcome, Mateus");
}
if (user === "Markiplier") {
  console.log("Welcome, Markiplier");
}

// Else statement
const loggedIn = false;
if (loggedIn) {
  console.log("Show the user's profile");
} else {
  console.log("Show the login button");
}

// Else if statement
const n1 = 1;
const n2 = 2;
if (n1 > n2) {
  console.log("n1 is greater than n2");
} else if (n2 > n1) {
  console.log("n2 is greater than n1");
} else {
  console.log("n1 and n2 are equal");
}