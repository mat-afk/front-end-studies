// Creating a function
function sayHello() {
  console.log("Hello =]");
}

sayHello();

const sayBye = function () {
  console.log("Bye =]");
};

sayBye();

function say(message) {
  console.log(message);
}

say("Hello =]");
say("Bye =]");
say("See you later =]");

// Returning values
function sum(n1, n2) {
  return n1 + n2;
}

console.log("The sum is", sum(1, 2));

// Function scope
let y = 10;

function newY() {
  let y = 20;
  console.log("Inside this function, the value of y is", y);
}

newY();
console.log("Outside the function, the value of y is", y);

// Nested scope
let m = 5;

function nestedM() {
  let m = 10;

  function nestedNestedM() {
    let m = 15;
    console.log("Inside this function, the value of m is", m);

    function nestedNestedNestedM() {
      let m = 20;
      console.log("Inside this function, the value of m is", m);
    }

    nestedNestedNestedM();
  }

  nestedNestedM();
  console.log("Inside this function, the value of m is", m);
}

nestedM();
console.log("Outside that function, the value of m is", m);

// Arrow functions
const evenOrOdd = (n) => {
  if (n % 2 === 0) {
    return `${n} is even`;
  } else {
    return `${n} is odd`;
  }
};

console.log(evenOrOdd(2));

// Implicit return
const sqrt = (n) => n ** 0.5;

const n = 25;
console.log(`The square root of ${n} is ${sqrt(n)}`);

// Optional parameters
const pow = (n, e) => {
  if (!e) {
    e = 2;
  }

  return n ** e;
};

const number = 2;
const e = 3;
console.log(`The square of ${number} is`, pow(number));
console.log(`${number} to the power of ${e} is`, pow(number, e));

// Default parameters
const sayHelloTo = (name = "World") => {
  console.log(`Hello, ${name}!`);
};

sayHelloTo();
sayHelloTo("John");

// Closure
function add(n1) {
  return (n2) => {
    return n1 + n2;
  };
}

console.log("The result of the addition is", add(1)(2));

const AddTwo = add(2);

console.log("The result of the addition is", AddTwo(3));

// Recursion
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const k = 5;
console.log(`${k}! is ${factorial(k)}`);
