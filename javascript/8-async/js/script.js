// Set timeout
console.log("Start");

setTimeout(() => {
  console.log("End");
}, 2000);

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
