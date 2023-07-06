/*
Enunciado: dado un texto sea un email valido
-expresion regualr
*/

function emain_test(email){
  return /^\w+@\w+\.\w+$/gi.test(email);
}
console.log(emain_test("almagro@gmail.com"))
