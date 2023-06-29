/*
Ejercicio 15:
Dado una cadena de texto, devolver el caracter más usado
ejemplos:
masUsado("alma");
devuelve:
la que mas se repite es a
Como hacerlo:
- Crear una función que reciba el texto
- Mapear letras en un json
- Recorremos el mapeo
- Hacemos condición para ver que el contador es mayor
*/

function masUsado(texto){
  let mapeo_letra={}; //json vacio
  let maximo_repeticiones = 0;
  let letra_r="";
  for(let letra of texto){
    if(!mapeo_letra[letra]){
      mapeo_letra[letra] = 1
    }else{
      mapeo_letra[letra]++
    }
  }
  for(let letra in mapeo_letra){
    if(mapeo_letra[letra].toString().trim().length === 1 && mapeo_letra[letra]>maximo_repeticiones){
      maximo_repeticiones = mapeo_letra[letra];
      letra_r = letra;
    }
  }
  console.log(mapeo_letra)
  return letra_r;
}
console.log(masUsado("he subidoo un video nuevo a mi canal"))
