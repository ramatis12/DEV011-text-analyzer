const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const pal = text.trim().split(" ");
    return pal.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let item = 0;
    for (let i = 0; i < text.length; i++) {
      item++;
    }
    return item;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const sin = text.replace(/\s/g, "").replace(/[.,#!"$%&;:{}=\-_~()]+/g, "");
    return sin.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(" ").length;
    const sinEspacios = text
      .replace(/\s/g, "")
      .replace(/[?]+/g, "").length;
    const media = sinEspacios / palabras;
    return parseFloat(media.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numse = 0;
    const sin = text.replace(/\s/g, " ").trim().split(" ");
    //console.log('=> ', sin);
    for (let i = 0; i < sin.length; i++) {
      // let nums = sin[i];
      if (!isNaN(sin[i])) {
        numse++;
      }
    }
    return numse;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const suma = 0;
    const digito = text.replace(/\s/g, " ").trim().split(" ");
    const newArr = [];
    //console.log('digi: ', digito);
    for (let i = 0; i < digito.length; i++) {
      console.log(digito[i]);
      if (!isNaN(digito[i])) {
        //crear un nuevo arreglo con digito [i]
        newArr.push(digito[i]);
      }
    }
    const sumas = newArr.reduce(
      (accumulator, currentValue) =>
        parseFloat(accumulator) + parseFloat(currentValue),
      suma
    );
    return sumas;
  },
};

export default analyzer;
