const container = document.querySelector(".container");
const btn = document.querySelector("#qr-form button");
const textInput = document.querySelector("#qr-form input");
const qrImage = document.querySelector("#qr-code img");

const generateQRCode = () => {
  const text = textInput.value;

  if (!text) return;

  btn.innerHTML = "Gerando código...";

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

  qrImage.addEventListener("load", () => {
    container.classList.add("active");
    btn.innerHTML = "Código gerado!";
  });
};

btn.addEventListener("click", (e) => {
  generateQRCode();
});

textInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") generateQRCode();
});

// Clean
textInput.addEventListener("keyup", () => {
  if (!textInput.value) {
    container.classList.remove("active");
    btn.innerHTML = "Gerar QR Code";
  }
});
