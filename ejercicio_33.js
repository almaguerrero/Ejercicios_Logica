/*
Enunciado: Haz un reloj que en tiempo real vaya mostrando la hora a cada segundo
Solo puedes usar el objeto date para conseguir la hora por primera vez pero no para actualizar la hora
Ejemplos
let mi_reloj = new Reloj();
mi_reloj.encender();
//Devuelve
14:20:16
14:20:17
14:20:18
Como hacerlo:
- Crear una clase
- Inicializar propiedades con la hora actualizar
- Método con setInterval
- Método para mostrar la hora
- Método para sumar segundos a la hora
y actualizar horas minutos y segundos
*/
class Relog{
//constructor: es el primer metodo que se ejecuta cuando se crea el objeto
constructor(){
  this.fecha = new Date();
  this.horas = this.fecha.getHours();
  this.minutos = this.fecha.getMinutes();
  this.segundos = this.fecha.getSeconds();
 }
 actualizar(segundos){
  this.segundos +=segundos;
  //actualizar segudos
  if(this.segundos>= 60){
    this.minutos++;
    this.segundos = 0;
  }
  //actuaizar minitos
  if(this.minutos >= 60){
    this.horas++;
    this.minutos = 0;
  }
  //actualñizar horas
  if(this.horas >= 24){
    this.horas = 0;
  }
 }
 mostrar(){
   this.actualizar(1);
   console.log(`${this.horas}:${this.minutos}:${this.segundos}`)
 }
 encender(){
   setInterval(() =>{
     this.mostrar();
   },1000);
 }
}



function relogRapido(){
  setInterval(() => {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    //console.log(`${horas}:${minutos}:${segundos}`)
  },1000);
}
let mi_relog = new Relog()
mi_relog.encender();
//relogRapido();
