/*
Enunciado:
Dada una cadena de texto poner en mayuscula la primera letra
de cada palabra en la cadena y luego Devolver la cadena.
Ejemplo:
enMayuscula('hola soy victor')
//Devuelve
Hola Soy Victor
Como hacerlo:
- Crear una función con parametro de texto
- Poner la primera letra del string en mayusculas
- Recorrer el string completo
- Devolver resultado
- Si el caracter anterior a la letra actual es una espacio
- Ponerlo en mayusculas
- Si el caracter no es un espacio añadirlo al resultado
*/
function enMayusculaOriginal(texto){
  let resultado = ""
  for(letra in texto){
    if(texto[letra - 1] === " " || parseInt(letra) === 0){
      resultado += texto[letra].toUpperCase();
    }
    else{
      resultado += texto[letra]
    }
  }
  return resultado;
}
//////////////
function enMayuscula(texto){
  let palabras = [];
  for(let palabra of texto.split(" ")){
    palabras.push(palabra[0].toUpperCase()+palabra.substring(1))
  }
  return palabras
}
console.log(enMayuscula('hola soy eliza'))
