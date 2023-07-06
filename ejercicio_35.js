/*
Enunciado:
Dado un array, crear otro con el primer y el ultimo elemento del original

Ejemplo:
primeroYUltimo([100,200,300,780])//Devuelve: [100,780]

Como hacerlo:
- Función con parámetro array
- Array push del primer y ultimo elemento
- Devolver resultado
*/
function primeroYUltimo(elementos){
  let nuevos_elementos = [];
  nuevos_elementos.push(elementos[0],elementos[elementos.length-1])
  return nuevos_elementos;
}

console.log(primeroYUltimo([100,200,300,780]))
