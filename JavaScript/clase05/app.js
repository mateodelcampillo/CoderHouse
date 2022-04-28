function Persona(nombre,edad,tieneMascota){
    this.nombre= nombre;
    this.edad= edad;
    this.tieneMascota= tieneMascota;

}
let nombre = prompt(`Tu nombre`)
const persona3 =new Persona(nombre,20,true);