// Adding event listeners
const btn = document.querySelector("#btn");
let count = 0;
btn.addEventListener("click", function () {
  count++;
  btn.textContent = count;
});

// Removing events
const eventBtn = document.querySelector("#event-button");
const removeBtn = document.querySelector("#remove-button");

function eventHandler() {
  console.log("You clicked the button!");
}

eventBtn.addEventListener("click", eventHandler);

removeBtn.addEventListener("click", () => {
  console.log("Removing event handler...");
  eventBtn.removeEventListener("click", eventHandler);
});

// Event object
const clickMeTitle = document.querySelector("#click-me-title");

clickMeTitle.addEventListener("click", (event) => {
  console.log(event);
});

// Propagation
const propagationContainer = document.querySelector("#propagation-container");
const propagationBtn = document.querySelector("#propagation-container button");

propagationBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Propagation button listening...");
});

propagationContainer.addEventListener("click", () => {
  console.log("Propagation container listening...");
});

// Prevent default
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(
    "Why are we still here? Just to suffer? (Default event prevented)"
  );
});

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log(`Listening to ${e.key}`);
});

// Mouse events
const dblClick = document.querySelector("#double-click");

dblClick.addEventListener("dblclick", () => {
  console.log("Double clicked!");
});

const mouseOver = document.querySelector("#mouse-over");

mouseOver.addEventListener("mouseover", () => {
  console.log("Mouse over!");
});

document.addEventListener("mousemove", (e) => {
  //   console.log(`Mouse coordinates: (${e.clientX}, ${e.clientY})`);
});
