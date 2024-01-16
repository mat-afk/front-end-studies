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

// Template literals
const username = "Markiplier";
const message = `Welcome, interpolated ${username}!`;
console.log(message);

// Destructuring
const user = {
  name: "Michael Scott",
  age: 40,
  address: {
    city: "Scranton",
    country: "USA",
  },
};

const { name: managerName, age, address } = user;
console.log("The user is:", user);
console.log("The destructured user is:", managerName, age, address);

// Spread operator
const newUser = { ...user, name: "Dwight Schrute" };
console.log("The new spread user is:", newUser);

const somePrimeNumbers = [3, 5, 7, 11, 13, 17];
const morePrimeNumbers = [19, 23, 29, 31, 37, 41];
const allPrimeNumbers = [2, ...somePrimeNumbers, ...morePrimeNumbers, 43];
console.log("The spread prime numbers are:", allPrimeNumbers);

// Classes and inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating like an Animal: Nom nom nom!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking like a Dog: Woof!`);
  }
}

const dog = new Dog("Snoopy", "Beagle");
console.log("The new adopted dog is:", dog);
dog.eat();
dog.bark();
