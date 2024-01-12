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

// Manipulating elements

// 1. Inserting before
const p = document.createElement("p");
p.textContent = "I am a new paragraph";

const header = title.parentElement;
header.insertBefore(p, title);

// 2. Appending
const li = document.createElement("li");
const link = document.createElement("a");
link.href = "#";
link.textContent = "New Link";
li.appendChild(link);

const navLinks = document.querySelector("nav ul");
navLinks.appendChild(li);

// 3. Replacing
const h2 = document.createElement("h2");
h2.textContent = "New Product";

const firstProduct = document.querySelector(".product");
firstProduct.replaceChild(h2, document.getElementsByTagName("h2")[0]);

// 4. Creating text nodes
const text = document.createTextNode("I am a new text node");
mainContainer.appendChild(text);
