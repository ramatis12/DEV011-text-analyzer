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


       let contador = text.addEventListener("keyup", logKey);

        function logKey() {
                const analyzer = {  
                         getWordCount: (text) => {
                                var texto = document.getElementsByName("suer-input").valor;
                                let item= 0;
                          //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
                          for (let i = 0; i < texto.length; i++) {
                                item += texto[i]; 
                              }
                              return item;   
                        }
                } 
                console.log(analyzer); 

        }
        
         // text.addEventListener("keyup", analyzer)     
        // text.addEventListener("click", text, false);
       // console.log(text);
