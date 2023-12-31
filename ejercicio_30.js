/*
Enunciado:
Dado un array de números, devolver el array sin elementos duplicados.
Si hay un string eliminarlo del array.
Ejemplos:
eliminarDuplicados([1,2,1,1,1,3,4]); //Devuelve: [1,2,3,4]

Como hacerlo:
- Crear una función con parámetro array
- Recorrer el array y eliminar strings
- Usar objeto para eliminar duplicados
*/
function eliminarDuplicados(elementos){
  elementos = elementos.filter(elemento =>{
    return typeof elemento === "number"
  }); //elimina strings
  let sin_duplicados = new Set(elementos)
  return Array.from(sin_duplicados)
}
console.log(eliminarDuplicados([1,2,1,1,1,3,4]))
