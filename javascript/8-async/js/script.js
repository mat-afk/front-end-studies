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
