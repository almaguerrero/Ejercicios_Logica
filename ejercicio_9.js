/*
Ejercicio: Dados dos arrays, devolver array con solo los elementos comunes
entre ambos.

Ejemplos:
elementosComunes([4,5,6,7],[7,8,9,7,5])//devuelve [5,7]
- Funcion que reciba dos arrays
- Filtrar array y evaluando una condición
- Devolver array nuevo
*/
function elementosComunes(array1,array2){
  const filtrado = array1.filter(elemento => {
                   return array2.includes(elemento)
                   });
      return filtrado
}
console.log(elementosComunes([4,5,6,7],[7,8,9,7,5]));
console.log(elementosComunes(["alma","eliza","chucho"],["alma","eliza"]));
