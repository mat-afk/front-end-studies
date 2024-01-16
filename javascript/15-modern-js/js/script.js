// Arrow functions
const sum = (a, b) => a + b;
console.log("The arrow function sum is", sum(2, 3));

const greet = (someone) => {
  if (someone) return "Hello", someone;
  return "Hello, stranger";
};
console.log("The arrow function greet is", greet("John"));

// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("The numbers are", numbers);
console.log("After the filter, the even numbers are", evenNumbers);

const users = [
  { name: "John", online: true },
  { name: "Markiplier", online: true },
  { name: "Mateus", online: false },
  { name: "Gustavo", online: true },
  { name: "Nilce", online: false },
];

const onlineUsers = users.filter((user) => user.online);
console.log("The online users are", onlineUsers);

// Map
const products = [
  { name: "Mouse", price: 30, category: "Computer" },
  { name: "Keyboard", price: 50, category: "Computer" },
  { name: "Microphone", price: 200, category: "Sound" },
  { name: "Monitor", price: 300, category: "Computer" },
  { name: "Headphone", price: 100, category: "Sound" },
];

const saleProducts = products.map((product) => {
  if (product.category === "Sound")
    return {
      name: product.name,
      price: product.price * 0.8,
      category: product.category,
    };
  return product;
});

console.log("The products are", products);
console.log("The maped sale products are", saleProducts);
