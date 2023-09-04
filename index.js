import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//decalracion de variables
const text = document.querySelector('[name="user-input"]');
const palabra = document.querySelector('[data-testid="word-count"]');
const caracter = document.querySelector('[data-testid="character-count"]');
const espacio = document.querySelector('[data-testid="character-no-spaces-count"]');
const numero = document.querySelector('[data-testid="number-count"]');
const suma = document.querySelector('[data-testid="number-sum"]');
const media = document.querySelector('[data-testid="word-length-average"]');
//console.log(suma, media);

//llamar las funciones del contador
text.addEventListener("keyup", () => {
  palabra.innerHTML = "Palabras: " + analyzer.getWordCount(text.value);
  caracter.innerHTML = "Caracteres: " +analyzer.getCharacterCount(text.value);
  espacio.innerHTML = "Caracteres sin espacios: " +analyzer.getCharacterCountExcludingSpaces(text.value);
  numero.innerHTML = "Números: " +analyzer.getNumberCount(text.value);
  suma.innerHTML = "Suma: " +analyzer.getNumberSum(text.value);
  media.innerHTML ="Media: " + analyzer.getAverageWordLength(text.value);
});

//funcion para limpiar el contenido de textarea
const limpiar = document.getElementById("reset-button");
limpiar.addEventListener("click", () => {
  text.value = "";
});
