/*
Enunciado:
Dado un número, indicar que tipo de angulo es.
Ejemplos
console.log(angulo(47)) //Devuelve: Ángulo agudo
console.log(angulo(90)) //Devuelve: Ángulo recto
console.log(angulo(145)) //Devuelve: Ángulo Obstuso
console.log(angulo(180)) //Devuelve: Ángulo Llano

Como hacerlo:
- Crear una función con parámetro angulo
- Condiciones para detectar el angulo
- Devolver angulo
*/
function angulo(value){
  let resultado = "Ángulo completo";
  if(value<90){
    resultado = "Ángulo agudo";
  }
  else if(value === 90){
    resultado = "Ángulo recto";
  }
  else if(value>90 && value<180){
    resultado = "Ángulo obstuso";
  }
  else if(value === 180){
    resultado = "Ángulo Llano";
  }
  else if(value > 180 && value<360){
    resultado = "Ángulo Concavo";
  }
  return resultado
}

console.log(angulo(47));
console.log(angulo(90));
console.log(angulo(145));
console.log(angulo(180));
