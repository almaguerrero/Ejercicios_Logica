/*
Enunciado:
Dado dos números, indical cual es mayor y cual es menor
Ejemplos:
mayorMenor(8,6)
//Devuelve
El número mayor es: 8
El número menor es: 6
Como hacer:
- Crear una función
- Condiciones para ver cual es el mayorMenor
- Devolver resultado
*/
function mayorMenor(num_1,num_2){
  let resultado = "";
   if(num_1 === num_2){
    return resultado = "Los números son iguales"
   }
   else if(num_1 > num_2){
     return resultado = "El número mayor es: "+num_1;
   }
   else if(num_1 < num_2){
     return resultado = "El número mayor es: "+num_1;
   }
}
console.log(mayorMenor(8,6));
