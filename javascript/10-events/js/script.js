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
