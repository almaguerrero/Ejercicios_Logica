/*
Enunciado ejercicio 11:
Dado un texto y una busqueda, censurar todas las coincidencias
de la busqueda en el texto con [-CENSURADO-]
Si el texto y la busqueda están vacios mostrar
"No puedes leer el texto y la busqueda" en el caso
de que los parámetros no lleguen

Ejemplos:
censurado("hola hola","hola") //Devuelve [-CENSURADO-] [-CENSURADO-]
censurado() //Devuelve "No puedes hacer la busqueda"
Como hacerlo:
- Funcion que reciba texto y una busqueda
- Condiciones en el caso de algún parámetro de false
- Reemplazar la busqueda por [-CENSURADO-] en el texto
*/
function censurado(texto=false,busqueda=false){
   let resultado = "";
   if(!texto && !busqueda){
     resultado = "No puedes leer el texto y la busqueda";
   }else if(!texto && busqueda){
     resultado = "No puede leer el texto";
   }
   else if(texto && !busqueda){
     resultado = "No puede hacer la busqueda";
   }else if(texto && busqueda){
     resultado = texto.replace(new RegExp(busqueda,'gi'),"[-CENSURADO-]");
   }
   return resultado;
}
console.log(censurado("hola hola","hola"))
