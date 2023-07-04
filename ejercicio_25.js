/*
Enunciado: Dado un string, ponerlo completo en mayusculas o minusculas
dependiendo si hay más mayusculas o minusculas por defecto en el string.
Si hay mas mayusculas ponerlo todo en mayusculas
Si hay más minusculas ponerlo todo en minusculas

Ejemplos:
mayusMinus("JOAQuin"); //Devuelve: JOAQUIN
mayusMinus("Victor"); //Devuelve: Victor
Como hacerlo:
- Crear una funcion con parametro texto
- Crear dos contadores para mayus y minusculas
- Recorrer el texto y coprobar si:
Las letras que vamos recorriendo son mayusculas
-Aumentar contadores
-Convertir a mayus o minus y devolver resultado
*/
function mayusMinus(texto){
   let mayusculas = 0;
   let minusculas = 0;
   let resultado;
   for(let letra of texto){
     if(/[A-Z]/.test(letra)){
       mayusculas++;
     }
     else{
       minusculas++;
     }
   }
   if(mayusculas>minusculas){
     resultado = texto.toUpperCase();
   }
   else{
     resultado = texto.toLowerCase();
   }
   return resultado;
}
console.log(mayusMinus("JOAquin"))
