/*
Dado un número, mostrar los números 1 hasta el número. Pero para múltiplos
de tres imprimir "buzz" en lugar de número y para múltiplos de cinco imprimir "lightyear"
Para múltiplos de tres y cinco imprimen "BuzzLightyear"
Ejemplo:
buzz(5)
//devuelve
1
2
Buzz
4
Lightyear
Como se hace:
- Crear una función que reciba un número
- Condiciones número actual mulltiplo de 3 o 5 o ambos
- Crear función para recorrer y mostrar
- Bucle del 1 al número
*/

function buzz(numero){
  if(numero % 3 === 0 && numero % 5 ===0){
    resultado ==BuzzLightyear
  }
  else if(numero % 3 === 0){
    resultado = "buzz";
  }
  else if(numero % 5 === 0){
    resultado = "lightyear"
  }
  else{
    resultado = numero;
  }
  return resultado;
}
function recorrer(number){
  for(let i= 1;i <= number;i++){
    console.log(buzz(i))
  }
}
recorrer(5)
