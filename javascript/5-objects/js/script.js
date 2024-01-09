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
