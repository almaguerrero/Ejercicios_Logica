/*
Dado un array de objetos de peliculas (titulo, director, vista)
mostrar todas las peliculas indicando cual has visto y cual no
Ejemplos:
misPeliculas(peliculas)
//Devuelve
ya has visto "El señor de los anillo de Peter Jackson"
Te falta ver: "La liga de la justicia de Zack Snyder"

Como hacerlo:
- Crear un array de objetos
- Crear una función para recorrer y mostrar
*/
function mispeliculas(peliculas){
  for(pelicula of peliculas){
    let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`
     if(pelicula.vista){
       console.log("Ya has visto: ",para_mostrar)
     }else{
       console.log("Te falta por ver: ",para_mostrar)
     }
  }
}
const coleccion_peliculas = [
    {
      titulo:"El señor de los anillos",
      director : "Peter Jackson",
      vista : true
    },
    {
      titulo:"La liga de ls justicia",
      director : "Zack Snyder",
      vista : false
    }
];

mispeliculas(coleccion_peliculas);
