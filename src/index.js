import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//decalracion de variables
const text = document.querySelector('[name="suer-input"]');
const palabra = document.querySelector(".palabra");
const caracter = document.querySelector(".caracter");
const espacio = document.querySelector(".espacio");
const numero = document.querySelector(".numero");
const suma = document.querySelector(".suma");
const media = document.querySelector(".media");
console.log(suma, media);

//llamar las funciones del contador
text.addEventListener("keyup", () => {
  palabra.innerHTML = analyzer.getWordCount(text.value);
  caracter.innerHTML = analyzer.getCharacterCount(text.value);
  espacio.innerHTML = analyzer.getCharacterCountExcludingSpaces(text.value);
  numero.innerHTML = analyzer.getNumberCount(text.value);
  suma.innerHTML = analyzer.getNumberSum(text.value);
  media.innerHTML = analyzer.getAverageWordLength(text.value);
});

//funcion para limpiar el contenido de textarea
const limpiar = document.getElementById("reset-button");
limpiar.addEventListener("click", () => {
  text.value = "";
});
