let serialEl = document.querySelector(".random_serial .random");
let btnEl = document.querySelector(" .random_serial .generate ");

btnEl.addEventListener("click", () => {
  let serial =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPPASDFGHJKLZXCVBNM0123456789";
  let serialCount = 10;
  let randomSerial = "";
  for (let i = 0; i < serialCount; i++) {
    randomSerial += serial[Math.floor(Math.random() * serial.length)];
  }
  serialEl.innerHTML = randomSerial;
});
