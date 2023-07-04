/*
Dado un número, mostrar a cuantos años, meses y días equivalen
Ejemplo:
calcularDias(920);
Equivale a 2 años, 6 meses y 10 días

Como hacerlo:
- Crear una función para parametro días
- Divisiones para sacar años, meses y días
*/
function calcularDias(days){
    let years = Math.floor(days/365);
    let dias_restantes = (days%365);
    let meses = Math.floor(dias_restantes/30);
    dias_restantes = dias_restantes%30;
    return  `Equivale a ${years} años, ${meses} meses y ${dias_restantes} días`;
}

console.log(calcularDias(120))
