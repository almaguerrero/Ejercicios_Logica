/*
Dado un array o un texto, devolver el elemento o palabras que más aparecen
Ejemplos:
repetitivo("victor robles victor")
repetitivo([1,2,3,4,1])
//Devuelve
victor
1
Como hacerlo:
- Mapear elementos en json y hacer contador
*/

function repetitivo(datos){
  let mapeo={}; //json
 let frecuecia = "", valor_frecuencia = 0;
  if(typeof datos == "string"){
    datos = datos.split(" ")
  }
  for(let elemento of datos){
    if(mapeo[elemento]){
      mapeo[elemento]++;
    }
    else{
      mapeo[elemento] = 1;
    }
  }
  for(let elemento in mapeo){
    if(mapeo[elemento] > valor_frecuencia){
      valor_frecuencia = mapeo[elemento]
      frecuencia = elemento;
    }
  }
  return [valor_frecuencia,frecuencia]
}
console.log(repetitivo("victor robles victor"))

repetitivo([1,2,3,4,1])
