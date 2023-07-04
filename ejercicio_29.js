/*
Enunciado:
Dado un número, indicar si es un número capicua o no.
Los números capicúa se leen igual de izquierda a derecha y viceversa
Ejemplos:
capi(2002); //Devuelve: true
capi(2012); //Devuelve: false
Como hacerlo:
- Crear una función con parámetro número
- Convertir a string
- Convertir numero en array de numeros
- Darle la vuelta
- Unirlo y convertirlo a entero
*/

function capi(numero){
let procesado = parseInt(numero
                     .toString() //Convertir a string
                     .split("")
                     .reverse()
                     .join('')
                   );
 return numero === procesado;
}

console.log(capi(2002))
