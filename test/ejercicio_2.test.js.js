/*
Ejercicio 2:
Dada una cadena de texto, comprobar si es un palindromo o no.
Los palindromos son palabras que se leen igual aún estándo invertidos.
Por ejemplo: ana, bob, otto.
No tener en cuenta espacios o simbolos raros
Ejemplos:
palindromo("otto") //Devuelve: true
palindromo("victor") //Devuelve: false
como hacerlo:
- Funcion como parametro de texto
- Separar el texto en un array de letras
- Darle la vuelta al array (reverse)
- Unir el array de letras en un string y comparar el parametro (regresar un true or false)
*/
function palindromo(texto){
   let invertido = texto
                  .split('')
                  .reverse()
                  .join('');

  /*
  if(invertido === texto){
     return true;
   }
   else{
     return false;
   }
  */
  return (invertido === texto);
}
console.log(palindromo("otto"))
