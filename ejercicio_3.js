/*
Ejercicio 3:
Dada una palabra, buscarla en una frase y devolver cuantasveces aparece en ella.
La frase y la palabra deben ser parámetros de la función.
coincidencias("Hola Soy una palabra en una frase, PALABRA","palabra") //devuelve true
coincidencias("soy la frase","vistor") //devuelve false o hacerlo
Como se hace:
- Funcion con parametro de dos parametros, "frase" y "busqueda"
- Poner string en minusculas y limpiarlo
- Comprobar si la busqueda está incluida la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y hacer un contador de cada una -> ¿a que se refieren con Mapear?
- Devolver el contador de busqueda
*/
function coincidencias(frase,busqueda){
  let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi,'');
  let resultado = 0;
  if(texto_limpio.includes(busqueda)){
    //contar
    let palabras = texto_limpio.split(" ");
    let mapa = {};
    for(let palabra of palabras){ //in propiedad of valor dentro
      if(mapa[palabra]){
        mapa[palabra]++;
      }
      else{
        mapa[palabra] = 1;
      }
    }
    resultado = mapa[busqueda];
    console.log(mapa[busqueda])
  }
  else{
    return resultado = 0;
  }
}

coincidencias("Hola, amigos amigos ","amigos");
