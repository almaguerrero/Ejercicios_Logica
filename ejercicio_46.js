/*
Dado un string, devolver todos los posibles substrings
Ejemplo:
todosSub("hola")
[
'h','o',''l,
'a','ho','ol',
'la','hol','ola',
'hola'
]
*/
function todosSub(palabra){
  let substrings = [];
  for(letra of palabra){
    let comienzo = letra;
    for(let i=0;i<=palabra.length;i++){
      let final = parseInt(i) + parseInt(comienzo);
      console.log(comienzo,final)
      //console.log(palabra.substring(comienzo,final))
    }
  }
}


todosSub("alma")
