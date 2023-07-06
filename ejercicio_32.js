/*
Enunciado:
Dado un array de números, devolver el array con sus números elevados al cuadraro

El array debe eliminar el contenido que no sea númerico

Ejemplos:
alCuadrado([5,6,7])
//Devuelve
[25,36,49]
Como hacerlo:
- Crear una función con parametro de numero
- Filtrar array
- Modificar contenido array
- Devolver resultado
*/

function alCuadrado(numeros){
  let numeros_cuadrados = numeros.
                            filter(numero => typeof numero === "number")

  var squared = numeros_cuadrados.map(function(x){
    return x*x
  });

  return squared
}

console.log(alCuadrado([5,6,7,105,34,"Alma"]))
