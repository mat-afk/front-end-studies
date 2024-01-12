// DOM
console.log("Document head:", document.head);
console.log("Document body:", document.body);
console.log("Body child nodes:", document.body.childNodes);
console.log("Header:", document.body.childNodes[1]);
console.log("Header child nodes:", document.body.childNodes[1].childNodes);
console.log(
  "Text content of H1:",
  document.body.childNodes[1].childNodes[1].textContent
);

// Selecting elements

// 1. By Tag name
const listItems = document.getElementsByTagName("li");
console.log("Elements selected by Tag name:", listItems);

// 2. By Id
const title = document.getElementById("title");
console.log("Element selected by Id:", title);

// 3. By Class
const products = document.getElementsByClassName("product");
console.log("Elements selected by Class:", products);

// 4. By CSS selector
const mainContainer = document.querySelector("#main-container");
console.log("Element selected by CSS selector:", mainContainer);

const productsQuery = document.querySelectorAll(".product");
console.log("Elements selected by CSS selector:", productsQuery);
