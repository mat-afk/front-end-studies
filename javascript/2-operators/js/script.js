// Number
console.log(typeof 10);
console.log(typeof 3.14);
console.log(typeof -2);

// Arithmetic operators
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(5 + 10 * 2);

// Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log(10 / 0);
console.log(10 / -0);
console.log(10 / "hello");

// Strings
console.log(typeof "hello");
console.log("Hello, world");

// Special Characters
console.log('Hello, "world"');
console.log("Hello, \nworld");
console.log("Hello, \tworld");

// Concatenation
console.log("Hello, " + "world");

// Interpolation
console.log(`Hello, ${"w" + "o" + "r" + "l" + "d"}`);
console.log(`Hello, ${console.log("world")}`);

// Boolean
console.log(typeof true);
console.log(5 > 20);

// Comparison operators
console.log(5 != 20);
console.log(5 >= 20);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");

// Logical operators
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);

console.log(5 < 10 && "Mateus" == "Matheus");
console.log(5 < 10 || "Mateus" == "Matheus");
console.log(!(5 < 10));

// Empty values
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null === 0);
console.log(null >= 0);

// Type conversion
console.log(5 * null);
console.log("10" + 1);
console.log("10" - 1);
console.log("Hello, " * "world");
