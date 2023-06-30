/*
Enunciado 18:
Dado un número, mostrar todos sus números divisiores.
Ejemplos:
mostrarDivisores(5);
//devuelve
1
5
Como hacerlo:
- Crear una función que comprueba si un número es divisor de otro
- Crear una función de recorrer y mostrar
*/
function divisor(numero,posible_divisor){
  if(numero % posible_divisor === 0){
    return posible_divisor;
  }
  return 0;
}


function mostrarDivisores(numero){
for(let i = 1; i<=numero;i++){
  let div = divisor(numero,i)
  if(div) console.log(div)
}
}
mostrarDivisores(100)
