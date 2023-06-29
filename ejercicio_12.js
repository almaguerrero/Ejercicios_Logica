/*
Enunciado 12:
Dado un número mostra todos los números desde ese al 0 de 8 en 8
en una lista con guiones y cada número debe empezar por el número
Ejemplos:
hastaCero(100); //Devuelve:
--- Del 100 al 0 ---
- 100
- 92
- 84
- 76
- 68
- 60
- 52
- 44
- 36
- 28
- 20
- 12
- 4
-- FIN --
Como hacerlo:
- Función que recibe un números
- Inicializar variable con encabezado
- Bucle del número al cero
- Restar 8
. Concatenar FIN
*/
function hastaCero(numero){
 let resultado = `--- Del ${numero} al 0 --- \n`
 while(numero > 0){
resultado += `- N° ${numero} \n`;
   numero -=8;
 }
 if(numero <=0){
   resultado += `- N° 0 \n`;
 }
resultado += `--- FIN ---`;
return resultado
}
console.log(hastaCero(100))
