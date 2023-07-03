/*
Enunciado:
Dada una cadena de texto y un número, recortar el string mostranfo los X primeros caracteres

Ejemplos:
recortar('Cursos Desarrollo Web',6) //Devuelve: Cursos
Como hacerlo:
- Crear una funcion con parámetros texto y hasta
- Comprobar que los datos son correctors
- Recortar string con substring
- Devolver resultado
*/

function recortar(texto,numero){
 let resultado = ""
 if(typeof texto === 'string' && typeof numero === 'number'){
   resultado = texto.substring(0,numero)
 }
 else{
   resultado="Introduce bien los datos"
 }
 return resultado
}
console.log(recortar("Cursos Desarrollo Web",6))
