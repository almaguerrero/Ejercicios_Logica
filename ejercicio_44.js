/*
Enunciado:
Dado un array de strings, devolver otro con los valores que
esten formados por más de dos palabras.

Ejemplos:
dosPalabras(["hola","San francisco", "ciudad real","alma"])
//Devuelve
["san francisco","ciudad real"]
*/

function dosPalabras(elementos){
  let nuevos_elementos = [];
  for(palabra of elementos){
    if(palabra.split(' ').length >= 2){
      nuevos_elementos.push(palabra);
    }
  }
  return nuevos_elementos
}
console.log(dosPalabras(["hola","San francisco", "ciudad real","alma"]))
