// Set timeout
console.log("Start");

setTimeout(() => {
  console.log("End");
}, 1000);

console.log("Middle");

// Set interval
let i = 0;
let interval = setInterval(() => {
  console.log(i);
  i++;
  if (i === 5) {
    clearInterval(interval);
  }
}, 3000);

// Promises
const promise = Promise.resolve(5 + 5);

console.log("Some code");

promise
  .then((value) => {
    console.log("The promised value is", value);
    return value;
  })
  .then((value) => value + 10)
  .then((value) =>
    console.log("After some 'thens', there is another value", value)
  );

console.log("Another code");

// Catching promises' errors
Promise.resolve(5 * "Hello, world!")
  .then((value) => {
    if (isNaN(value)) {
      throw new Error("The value is not a number.");
    }
  })
  .catch((error) => console.log("Error catched:", error.message));

// Rejecting promises
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    number = Number(number);
    if (isNaN(number) || typeof number !== "number") {
      reject(new Error("The value is not a number."));
    }
    resolve("The promised value is a number.");
  });
}

const resolved = checkNumber(5);
const rejected = checkNumber("Hello, world!");

resolved
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

rejected
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Resolving multiple promises
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 3000);
});

const promise2 = new Promise((resolve) => resolve("Promise 2"));

const promise3 = new Promise((reject) => {
  reject(new Error("Promise 3"));
});

Promise.all([promise1, promise2, promise3]).then((values) => console.log("All promises:", values));
