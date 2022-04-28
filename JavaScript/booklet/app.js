// // Actividad 1
// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = "36";

// // Actividad 2
// const city1 = "Springfield";
// const city2 = "Córdoba";
// const city3 = "Villa Allende";
// const city4 = "Carlos Paz";
// const city5 = "Los Molinos";

// // Actividad 3
// let nombre = prompt("Introduzca su nombre");
// let apellido = prompt("Introduzca su apellido");
// let fdn = prompt("Introduzca su fecha de nacimiento");
// document.write(`Nombre: `+nombre+`<br>`+
// `Apellido: `+apellido+`<br>`+
// `Fecha de nacimiento: `+fdn)

// // Actividad 4
// let nombre1 = prompt("Introduzca su nombre");
// let nombre2 = prompt("Introduzca su nombre");
// let nombre3 = prompt("Introduzca su nombre");
// alert(`1)`+nombre1+` 2)`+nombre2+` 3)`+nombre3);

// // Actividad 4
// let precio = parseInt(prompt(`Cuanto quiere pagar?`));
// let descuento = precio - ((precio * 20)/100);

// alert(`Ok, por tu amabilidad en pagarnos te lo dejamos en: `+`$`+Math.round(descuento));

// JavaScript 2
// // Actividad 1
// let nombre = "Mateo";
// let nombre1 = prompt("Como te llamas hdp?");
// if(nombre == nombre1){
//     alert("Perdon oficial, fui yo");
// }else{
//     alert("Oficial! usted se confundio, yo no fui!!")
// }

// // Actividad 2
// let letra = prompt("Escribi 'Y' o 'y'");
// if(letra == "y" || letra == "Y"){
//     alert("CORRECTO!!");

// }else{
//     alert(NaN + "  <= Eso siginifica alto error")
// }

// // Actividad 3
// let numero = prompt("Elegi un numero: 1 - 2 - 3 - 4");
// if(numero == 1){
//     alert("Elegiste a Homero");
// }else if(numero == 2){
//     alert("Elegiste a Marge");  
// }else if(numero == 3){
//     alert("Elegiste a Bart");
// }else if(numero == 4){
//     alert("Elegiste a Lisa");
// }

// Actividad 3
const arrayProductos = [];
class Celular {
    constructor(marca,modelo,so,memoria,ram){
        this.marca = marca;
        this.modelo = modelo;
        this.so = so;
        this.memoria = memoria;
        this.ram = ram;


    }
}
const celular1 = new Celular("Nokia","1100","SN",01,01);
const celular2 = new Celular("Huawei","P20","Android",64,8);
const celular3 = new Celular("Iphone","X","IOS",64,4);
const celular4 = new Celular("Xiamoi","P10","Android",128,12);
const celular5 = new Celular("Pocco","II","Android",256,16);
arrayProductos.push(celular1,celular2,celular3,celular4,celular5);
for(let celu of arrayProductos){
    console.log(celu.modelo)
}
let carrito = prompt("Que modelo quiere?")
for(let celu of arrayProductos){
    if(carrito == celu.modelo){
        alert(celu.ram)
    }
    
}