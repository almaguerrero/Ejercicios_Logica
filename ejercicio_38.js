/*
Dado un número, mostrar listado de los cuadrados de todos los numero naturales hasta llegar la mismo
Como hacerlo:
- Dos funciones
- Hacer un bucle del cero al número
- Sacar el cuadrado mostrar
*/

function cuadrado(value){
  //cuadrados=[]
  for(let i=1;i<=value;i++){
    console.log(i*i)
  }
}
cuadrado(5)
