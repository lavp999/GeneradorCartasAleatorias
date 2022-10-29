/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";

const misCartas = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const misPalos = ["♦", "♥", "♠", "♣"];
const misColores = ["diamond", "heart", "spade", "club"];

function aleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

window.onload = function() {
  const miNumero = document.getElementById("numero");
  miNumero.innerHTML = misCartas[aleatorio(0, 12)];

  const miPaloSup = document.getElementById("paloSup");
  let nPalo = aleatorio(0, 3);
  miPaloSup.innerHTML = `<h1>${misPalos[nPalo]}</h1>`;

  const miPaloInf = document.getElementById("paloInf");
  miPaloInf.innerHTML = `<h1>${misPalos[nPalo]}</h1>`;

  const micarta = document.getElementById("carta");
  micarta.className = "mx-auto card " + misColores[nPalo];
};
