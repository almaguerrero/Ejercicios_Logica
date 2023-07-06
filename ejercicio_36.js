/*
Dado un texto, devolver cuantas consonantes y cuantas vocales tiene
Ejemplos
cuentaLetras("victorroblesweb.es")
//Devuelve
consonantes : 5
vocales : 6
Como hacerlo:
- Función con parámetro texto
- Recorrer cada cuentaLetras
- Testear con expresión regular
*/
function vocales(texto){
  let consonantes = 0, vocales = 0, texto_limpio = "";

  texto_limpio = texto.split("")
                       .filter(letra =>/[áéíóú\w]/gi.test(letra) && isNaN(letra))
                       .join("");
  for(let letra of texto_limpio){
    if(/[áéíóúaeiou]/gi.test(letra)){
      vocales++;
    }
    else{
      consonantes++;
    }
  }
  return[vocales,consonantes]
}
let letras =vocales("almaelizaguerrerosanchez")
console.log("consonantes",letras[1])
console.log("vocales",letras[0])
