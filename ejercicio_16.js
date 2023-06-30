/*
Dada una cadena de texto devolver cuantas vocales (a,e,i,o,u) tiene
ejemplos:
vocales("victorroblesweb.es")//devuelve: 6
Como hacerlo:
- Crear una función que reciba el texto
- Método match con expresión regular
- Devolver el resultado
*/

function vocales(texto){
  let coincidencias = texto.match(/[aeiou]/gi);
  return coincidencias ? coincidencias.length : 0;
}
console.log(vocales("almaguerrero"))
