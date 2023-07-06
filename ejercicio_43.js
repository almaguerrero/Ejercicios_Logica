/*
Dado un array de número sacar la media de todos ellos
Ejemplos:
laMedia([1,2,3])
//Devuelve
3
*/
function LaMedia(numeros){
let suma = numeros.reduce((valorAcumulado,numeroActual)=>{
  return valorAcumulado+numeroActual;
});
let media = suma/numeros.length
  return media;
}


console.log(LaMedia([1,2,3]))
