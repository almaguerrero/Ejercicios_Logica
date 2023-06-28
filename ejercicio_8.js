/*
Ejercicio: dado un númeo entero, inviertelo y devuelve el nuevo entero
Ejemplos:
impares(67)//devuelve 76
Como hacerlo:
- Funcion que recibe el número
- Convertir un número en string
- Crear un array por cada letra
- Darle la vuelta
- Unir el array en un string
- Convertir el string en un entero
*/
function invertirNum(numero){
let invertido = parseInt(numero
                  .toString()
                  .split('')
                  .reverse()
                  .join('')
                )*Math.sign(numero);
return invertido;
}
console.log(invertirNum(-18));
