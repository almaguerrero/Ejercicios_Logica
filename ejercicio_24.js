/*
Enunciado:
Dado un array de entero y un número, detectar si esa lista de números
es una permutación del 1 al número aportado

En este caso una permitación es una secuencia de números en orden sin que falte
ninguno entre ellos.
Ejemplos:
permutación([1,2,3,4,5],5)
permutación([1,2,4,5],5)

Como hacerlo:
- Crear una función con parametro secuencia  y número
- Bucle del 0 al número
- Return false si el número actual+1, no se encuentra
- Si salimos del bucle, devolver true
*/

function permutacion(secuencia,numero){
  for(let i=0;i<numero;i++){
    console.log(secuencia[i])
  }
}

console.log(permutacion([1,2,3,4,5],5))
