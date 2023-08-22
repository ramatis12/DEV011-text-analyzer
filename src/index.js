import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

        const cadena = document.querySelector("suer-input");


        // leer todos los <li>
        // Revisar su el selector es el correcto
        const palabra = document.querySelector(".palabra");
        const caracter = document.querySelector(".caracter");
        const espacio = document.querySelector(".espacio");
        const numero = document.querySelector(".numero");
        const suma = document.querySelector(".suma");
        const media = document.querySelector(".media");

        cadena.addEventListener("keyup", analyzer);

        // text.addEventListener("click", text, false);
        console.log(text);
