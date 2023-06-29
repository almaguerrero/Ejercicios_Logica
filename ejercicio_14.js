/*
Enunciado 14:
Dado un string y un número repetir tantas veces el número indique
ejemplo:
repiteme("alma",2)
devuelve:
almaalma
como hacerlo:
- Crear una función que reciba los dos parámetros
- Bucle hasta el números
- Concatenar string
*/
//funcion clasica
function repiteme(texto,numero){
  let resultado="";
  for(let i = 0;i<numero;i++){
    resultado += texto;
  }
  return resultado
}

//funcion prototipo
String.prototype.repiteme = function(numero){
  let resultado="";
  for(let i = 0;i<numero;i++){
    resultado += this;
  }
  return resultado
}
//console.log(repiteme("alma",2));
console.log("alma".repiteme(5))
