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
