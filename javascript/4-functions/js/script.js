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
