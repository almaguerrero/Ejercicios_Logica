/*
Dado un número, mostrar un triangulo de asteriscos * con ese número de filas
Ejemplo:
triangulo(4) //Devuelve
   *
  ***
 *****
*******
*/

function triangulo(numero){
  let mitad = Math.floor(numero-1);//redondea
  let resultado="";
  //bucle total filas
  for(let fila=0;fila<numero;fila++){
    let nivel="";
    //bucle para pintar asteriscos y espacios
    for(let columna=0;columna<(2* numero-1);columna++){
          if(mitad-fila <= columna && mitad+fila >= columna){
              nivel +="*"
          }else{
            nivel +=" "
          }

    }
    resultado += nivel +"\n";
  }
  return resultado;
}
console.log(triangulo(4))
