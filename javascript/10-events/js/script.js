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

// Scroll events
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    console.log("You scrolled more than 200px");
  }
});

// Focus events
const focusInput = document.querySelector("#focus-input");

focusInput.addEventListener("focus", () => {
  console.log("Focusing...");
});

focusInput.addEventListener("blur", () => {
  console.log("Bluring...");
});

// Load event
window.addEventListener("load", () => {
  console.log("Page loaded successfully =)");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  //   e.returnValue = "Are you sure you want to leave?";
});

// Debounce
const debounce = (callback, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Mouse movement debounced");
  }, 400)
);
