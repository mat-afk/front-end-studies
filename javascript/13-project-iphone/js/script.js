const colorPickers = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

colorPickers.forEach((colorPicker) => {
  colorPicker.addEventListener("click", (e) => {
    colorPickers.forEach((colorPicker) => {
      colorPicker.querySelector(".color").classList.remove("selected");
    });

    const color = colorPicker.getAttribute("id");

    colorPicker.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${color}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
