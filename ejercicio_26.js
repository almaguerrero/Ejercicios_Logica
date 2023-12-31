/*
Dado un número, mostrar su serie fibonacci
La serie fibonacci es una orden de números donde cada
número es la suma de los dos anteriores

Ejemplos:
fib(10)[0]
fib(10)[1]
Serie completa: 0,1,1,2,3,5,8,13,21,34,55
Resultado de la serie fibonacci es 55

Como hacerlo:
- Crear una función con parámetro numero
- Crear variable con dos primeros numeros de la Serie
- Bucle desde dos al número
- Sumar los dos anteriores valores a numero actual
- Devolver resultado
*/
function fibonacci(numero){
  let serie = [0,1]
  for(let i=2; i<=numero;i++){
    serie.push(serie[i-1]+serie[i-2])
  }
  return [serie,serie[numero]]
}
console.log(fibonacci(10)[0])
console.log(fibonacci(10)[1])
