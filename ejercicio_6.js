/*
Enunciado: Dibujar un cuadrado hueco con asteriscos
Ejemplo:
cuadrado(4)
//Devuelve
****
*  *
*  *
****
Como desarrollar:
- Función para crear el lado de arriba y abajo del cuadrado
- Función que haga los lados y el hueco del cuadrado
- Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo
- Bucle para pintar los espacios, menos 2 para equlibrar con le asterisco de izq y dere
- Ir concatenando en una variable cada linea del cuadrado
- Mostra el cuadrado
*/
function lado(numero){
  //arriba abajo
  let lado = "";
  for(let i =0;i<numero;i++){
    lado+="*"
  }
  return lado;
}
function cuadrado(numero){
  let dibujo = lado(numero) +"\n";//guardar el dibujo del cuadrado
  let contenido = "";
  //de 0 a numero
  for(let i=0; i<(numero-2);i++){
    contenido = "*";
    //contenido hueco
    for(let x = 0;x<(numero-2);x++){
       contenido +=" ";
    }
    contenido += "*"
   dibujo += contenido + "\n";
  }
  dibujo  += lado(numero); //lado de abajo
  return dibujo;
}

console.log(cuadrado(10))
