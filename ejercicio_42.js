/*
Dados dos números sacar un número aleatorio entre ellos
Ejemplos:
aleatorio(1,100)
//Devuelve 46
*/

function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

console.log(aleatorio(1,100))
