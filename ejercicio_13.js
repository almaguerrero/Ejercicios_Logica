/*
REPASAR
Enunciado 13:
Dado un array, dividirlo en tantos sub-arrays como sea necesario
basandonos en un número que indique su tamaño. Dividirlo en arrays
de X elementos.
Ejemplos:
divideArray([7,8,9,10,5],2)
//Devuelve
[[7,8],[9,10],[5]]
Como hacerlo:
- Crear una función que reciba los dos parámetros
- Crear un arrays
- Recorrer array e ir añadiendo sub arrays
*/
function divideArray(arreglo_principal,numero) {
   let arreglos = [];
   for(let elemento of arreglo_principal){
     let ultimo = arreglos[arreglos.length - 1];
    if(!ultimo || ultimo.length == numero){
      arreglos.push([elemento])
    }else{
      ultimo.push(elemento)
    }
   }
   return arreglos;
}
console.log(divideArray([7,8,9,10,5],2))
