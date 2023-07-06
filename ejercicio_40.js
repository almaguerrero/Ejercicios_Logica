/*
Dado un array de numero, devolver el elemento más bajo y más alto
*/
function altoBajo(numeros){
  let ordenados = numeros.sort((a,b) => a-b);
  return{
    bajo: ordenados[0],
    alto: ordenados[ordenados.length-1]
  }
}


console.log(altoBajo([88,100,99,1,2,3,4]));
