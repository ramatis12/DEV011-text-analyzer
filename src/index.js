import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//decalracion de variables
        let text = document.querySelector('[name="suer-input"]');
        let palabra = document.querySelector(".palabra");
        let caracter = document.querySelector(".caracter");
        let espacio = document.querySelector(".espacio");
        let numero = document.querySelector(".numero");
        let suma = document.querySelector(".suma");
        let  media = document.querySelector(".media");

//llamar las funciones del contador
       text.addEventListener("keyup", (primera) =>{
        palabra.innerHTML = analyzer.getWordCount(text.value);
        caracter.innerHTML = analyzer.getCharacterCount(text.value); 
        espacio.innerHTML = analyzer.getCharacterCountExcludingSpaces(text.value);
        console.log(analyzer.getNumberCount(text.value));
       });

//funcion para limpiar el contenido de textarea
       let limpiar = document.getElementById("reset-button");
       limpiar.addEventListener("click", () =>{
        text.value = "";
       });