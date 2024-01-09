// Arrays
const array = [1, 2, 3, 4, 5];
console.log(array, typeof array);

// Properties
const users = ["John", "Mary", "Peter"];
console.log(users.length);
console.log(users["length"]);

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

// Methods
const newUsers = ["Mateus", "Markiplier", "Latorre"];
const usersJoined = users.concat(newUsers);

console.log(usersJoined);
console.log(usersJoined.indexOf("Mateus"));
console.log(usersJoined[4].toUpperCase());

// Object Literal
const user = {
  name: "Mateus",
  age: 17,
  email: "email@email.com",
  country: "Brazil",
  city: "São Paulo",
};

console.log(user, typeof user);
console.log(user.name);

// Creating and deleting properties
user.lastName = "Cruzatto";
delete user.city;

console.log(user);

// Object class and copying object literals
const character = {
  health: 100,
  mana: 50,
  level: 1,
};

console.log(character);
console.log("Is character an instance of Object?", character instanceof Object);

const player = {
  name: "Ezreal",
  class: "Marksman",
  inventory: ["Doran's Blade", "Health Potion", "Manamune"],
};

Object.assign(player, character);

console.log(player);

// Object methods
console.log(Object.keys(player));
console.log(Object.values(player));
console.log(Object.entries(player));

// Mutation
const minion = character;

console.log("Character", character);
console.log("Minion: ", minion);
console.log("Is character and minion the same object?", character === minion);

minion.armour = 30;

console.log("Character", character);
console.log("Minion: ", minion);
console.log("Is character and minion the same object?", character === minion);

// Arrays and loops
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(`numbers[${i}]: ${numbers[i]}`);
}

// Push and pop
const movies = ["The Avengers", "The Dark Knight", "The Matrix"];
console.log("Movies:", movies);

let i = movies.push("The Lord of the Rings", "The Hobbit");
console.log("Movies after pushing:", movies);
console.log("Length after pushing:", i);

const popped = movies.pop();
console.log("Movies after popping:", movies);
console.log("Popped:", popped);

// Unshift and shift
const games = ["League of Legends", "Valorant", "Minecraft"];
console.log("Games:", games);

let j = games.unshift("Counter Strike", "Overwatch");
console.log("Games after unshifting:", games);
console.log("Length after unshifting:", j);

const shifted = games.shift();
console.log("Games after shifting:", games);
console.log("Shifted:", shifted);

// indexOf and lastIndexOf
const fruits = ["Banana", "Apple", "Orange", "Banana", "Apple"];
console.log("Fruits:", fruits);

console.log("Index of Apple:", fruits.indexOf("Apple"));
console.log("Last index of Apple:", fruits.lastIndexOf("Apple"));

// Slice
const programmingLanguages = [
  "JavaScript",
  "Java",
  "Python",
  "PHP",
  "Go",
  "Ruby",
  "Rust",
];

console.log("Programming languages:", programmingLanguages);

const lastLanguages = programmingLanguages.slice(3);

console.log("Last languages:", lastLanguages);

// For each loop
const shows = [
  { title: "The Office", genre: "Comedy", seasons: 9 },
  { title: "Better Call Saul", genre: "Comedy/Drama", seasons: 6 },
  { title: "Stranger Things", genre: "Science Fiction/Horror", seasons: 4 },
];

shows.forEach((show) => {
  console.log("Title:", show.title);
  console.log("Genre:", show.genre);
  console.log("Seasons:", show.seasons);
});
