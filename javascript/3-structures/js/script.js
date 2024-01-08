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

// Conditionals

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

// Loops

// While loop
let i = 0;
while (i < 5) {
  console.log("i is", i);
  i++;
}

// Do while loop
let j = 4;
do {
  console.log("j is", j);
  j--;
} while (j >= 0);

// For loop
for (let k = 0; k < 5; k++) {
  console.log("k is", k);
}

// Break
for (let l = 0; l < 5; l++) {
  if (l === 3) {
    break;
  }
  console.log("l is", l);
}

// Continue
for (let n = 0; n < 5; n++) {
  if (n === 3) {
    continue;
  }
  console.log("n is", n);
}

// Switch statement
const day = 0;
switch (day) {
  case 1:
    console.log("Today is monday");
    break;
  case 2:
    console.log("Today is tuesday");
    break;
  case 3:
    console.log("Today is wednesday");
    break;
  case 4:
    console.log("Today is thursday");
    break;
  case 5:
    console.log("Today is friday");
    break;
  default:
    console.log("WEEKEND!!!");
    break;
}
