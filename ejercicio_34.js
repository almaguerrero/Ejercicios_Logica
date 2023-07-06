/*
Enunciado: dado dos números, devolver los resultados de las operaciones básicas entre ellos
(suma,resta,producto y división)
ejemplo:
calculadora(5,5)
//Devuelve
La suma es: 10
La resta es: 0
La multiplicación es: 25
La división es: 1

Como hacerlo:
- Funcion con dos parametros
- Template string y operaciones
- Devolver resultado
*/
function calculadora(num_1,num_2){
   let resultado = `
                   la suma es ${num_1+num_2}
                   La resta es: ${num_1-num_2}
                   la multiplicación es: ${num_1*num_2}
                   la división es: ${num_1/num_2}`;
   return resultado;

}


console.log(calculadora(5,5))
