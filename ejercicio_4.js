/*
Ejercicio 4: Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres,
sin usar métodos propios del lenguaje, solo estructuras de control.
Ejemplos:
invertir('hola') //devuelve 'aloh'
invertir('amorcito') //devuelve oticroma
Como hacerlo:
- Funcion con parámetro "texto"
- Crear una variable para guardar la cadena invertida
- Bucle que recorra el string y guarde caracteres en la variable
*/
function reverse_AE(texto){
   let invertido = "";
   for(let letra of texto){  //of valores in- numeros
     invertido = letra + invertido;
   }
   return invertido;
}
funcion invertir(texto){
  return texto.split("").reverse().join('');
}
console.log(reverse_AE("hola"))
