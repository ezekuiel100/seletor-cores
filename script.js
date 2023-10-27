let r = document.querySelector("#r");
let g = document.querySelector("#g");
let b = document.querySelector("#b");

let body = document.querySelector("body");
let MostrarRgb = document.querySelector(".rgb");

function updateRgb() {
  let rgb = `rgb(${r.value}, ${g.value} , ${b.value})`;

  MostrarRgb.textContent = rgb;
  body.style.background = rgb;
}

updateRgb();

r.addEventListener("input", updateRgb);
g.addEventListener("input", updateRgb);
b.addEventListener("input", updateRgb);
