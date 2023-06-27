/*
Ejercicio: dado dos numeros cuantos impares hay entre ellos
Ejemplos:
impares(1,100)//devuelve 50
Como hacerlo:
-Función que reciba los dos números
-Buclie del numero 1 al numero 2
- condición si el resto es distinto de cero es impar
- Aumentar en uno el contador
- Devolver contador
*/

function impares(numero1,numero2){
  let contador = 0;
  while(numero1 < numero2){
    if(numero1 % 2 !==0 )contador++;
    numero1++;
  }
  return contador;
}

console.log(impares(1,100))
