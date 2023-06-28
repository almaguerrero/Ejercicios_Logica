/*
Enunciado ejercicio 10:
Dado un número, mostar una escalera con escalores de "[-]"
usando el número para los niveles de la escalera

Ejemplos:
escalera(4) //devuelve
[-]
[-][-]
[-][-][-]
[-][-][-][-]
Como hacerlo:
- Función que reciba un número
- Recorrer el número de niveles de la escaleras
- En cada iteración pintar los escalones de ese nivel
- Haciendo un bucle desde 1 hasta el nivel en el que estamos
*/
function escalera(numero){
  let escalera_completa = "";
  for(let nivel = 1; nivel <= numero; nivel++){
    let escalones = "";
      for(let escalon = 1 ;escalon <= nivel;escalon++){
        escalones += "[-]"

      }
      //concatenar
      escalera_completa += escalones + '\n';
  }
  return escalera_completa;
}
console.log(escalera(15))
