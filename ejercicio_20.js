/*
 Enunciado:
 Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si

 Una cadena es una anagrama de otra si usa los mismos caracteres en la misma cantidad.
 No tener espacios, simbolos raros, puntos, etc.

anagramas('Riesgo','Sergio')//Devuelve True
anagramas('Victor','Robles')// Devuelve False
Como hacerlo:
- Crear una función para limpiar textos
- Quitar todo lo que no sea texto
- Poner en minusculas
- Crear array de letras
- Ordenarlo
- Unirlo
- Funcion para comparar las dos palabras
*/
function LimpiarTexto(texto){
  return texto
           .replace(/[^\w]/gi,'')
           .toLowerCase()
           .split('')
           .sort()
           .join('')
}

function anagramas(texto1,texto2){
  return LimpiarTexto(texto1) === LimpiarTexto(texto2);
}
console.log(anagramas('Riesgo','Sergio'))
