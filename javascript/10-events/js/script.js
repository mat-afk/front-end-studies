// Adding event listeners
const btn = document.querySelector("#btn");
let count = 0;
btn.addEventListener("click", function () {
  count++;
  btn.textContent = count;
});
