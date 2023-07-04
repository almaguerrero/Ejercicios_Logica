/*
Enunciado: Dado un número devolver su factorial
El factorial de un número es la multiplicación de todos los números hasta llegar  a el

Ejemplos:
factorial(3); //Devuelve:6
Como hacerlo:
- Crear una función con parametro numero
- Bucle del 1 al números
- Multiplicar el numero actual por el anterior
*/
function factorial(numero){
let resultado=1;
  for(i=1;i<=numero;i++){
    resultado *=i;
  }
  return resultado;
}

console.log(factorial(3))
