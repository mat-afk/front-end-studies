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

// Manipulating attributes
const firstLink = navLinks.querySelector("a");

firstLink.setAttribute("href", "https://www.google.com");
firstLink.setAttribute("target", "_blank");

console.log("First link href:", firstLink.getAttribute("href"));

// Width and height
const footer = document.querySelector("footer");
console.log("Footer width:", footer.offsetWidth);
console.log("Footer height:", footer.offsetHeight);

console.log("Footer width desconsidering border:", footer.clientWidth);
console.log("Footer height desconsidering border:", footer.clientHeight);

// Position
console.log("First product position:", firstProduct.getBoundingClientRect());

// Manipulating styles
mainContainer.style.color = "blue";
mainContainer.style.backgroundColor = "#DDD";
mainContainer.style.padding = "15px";

for (const li of listItems) {
  li.querySelector("a").style.textDecoration = "none";
  li.querySelector("a").style.color = "#000";
  li.style.listStyle = "none";
}
