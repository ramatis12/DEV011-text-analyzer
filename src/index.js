import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

        let text = document.querySelector('[name="suer-input"]');


        // leer todos los <li>
        // Revisar su el selector es el correcto
        const palabra = document.querySelector(".palabra");
        const caracter = document.querySelector(".caracter");
        const espacio = document.querySelector(".espacio");
        const numero = document.querySelector(".numero");
        const suma = document.querySelector(".suma");
        const media = document.querySelector(".media");


       text.addEventListener("keyup", (primera) =>{
        palabra.innerHTML = analyzer.getWordCount(text.value);
        caracter.innerHTML = analyzer.getCharacterCount(text.value); 

       });
       
         // text.addEventListener("keyup", analyzer)     
        // text.addEventListener("click", text, false);
       // console.log(text);
