/* // !Ejemplo de abstracción
function sumarIntervalos(num1,num2){
    let total = 0;
    for(let i = num1; i <= num2; i++){
        total += i;
    }
    return total;
}

console.log(sumarIntervalos(1,10));

console.log(sumarIntervalos(1,20));*/




// * Clase nº 7 - Funciones de orden superior



// ! Ejemplo de retornar funciones
// function mayorQue(n) {
    
//     return hola = (m) => m > n;
    
// }

// let mayorQueDiez = mayorQue(10);

// console.log(hola(11));

// calculo = (num1,num2)=>{
// simbolo = prompt(`suma o resta?`)

// function toSymbol(variable) {
//     return Symbol(variable);
//   }

//     suma = num1 + toSymbol(simbolo) + num2;
//     console.log(suma);
// }
// calculo(prompt(`Numero 1`),prompt(`Numero 2`))
// /* // ! Segundo ejemplo retornar funciones
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(4, 6));
console.log(resta(5, 3));

// ! Ejemplo función por parámetro
// const numeros = [1, 2, 3, 4];

// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el);
//     }
// }

// porCadaUno(numeros, console.log);

// ! Segundo ejemplo función por parámetro
// const numeros = [1, 2, 3, 4];

// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el);
//     }
// }

// let total = 0;

// function acumular(num) {
//     total += num;
// }

// porCadaUno(numeros, acumular);
// console.log(total);

// // ! Tercer ejemplo función por parámetro
// const numeros = [1, 2, 3, 4];

// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el);
//     }
// }

// const duplicado = [];

// porCadaUno(numeros, (el) => {
//     duplicado.push(el * 2);
// });

// console.log(duplicado); 

// // ! Ejemplo foreach()
// const numeros = [1, 2, 3, 4, 5, 6];

// numeros.forEach((num) => {
//     console.log("Pase por el numero " + num);
// }); 

// // ! Ejemplo find()
// const cursos = [
//     { nombre: 'Javascript', precio: 15000 },
//     { nombre: 'ReactJS', precio: 22000 },
// ];

// const resultado = cursos.find((el) => el.nombre === "ReactJS");
// const resultado2 = cursos.find((el) => el.nombre === "DW");

// console.log(resultado);
// console.log(resultado2); 

// // ! Ejemplo filter() 
// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const resultado = cursos.filter((el) => el.nombre.includes('JS'));
// const resultado2 = cursos.filter((el) => el.precio < 14000);

// console.log(resultado);
// console.log(resultado2);

// // ! Ejemplo some()
// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];
// console.log(cursos.some((el) => el.nombre == "Desarrollo Web"));
// console.log(cursos.some((el) => el.nombre == "VueJS")); 

// // ! Ejemplo map()
// const cursos = [
//     { nombre: 'Javascript', precio: 15000 },
//     { nombre: 'ReactJS', precio: 22000 },
//     { nombre: 'AngularJS', precio: 22000 },
//     { nombre: 'Desarrollo Web', precio: 16000 },
// ];

// const nombres = cursos.map((el) => {
//     return{
//         nombre:el.nombre,
//         precio: el.precio
//     }
// });
// console.log(nombres);

// // ! Primer + segundo ejemplo map()
// const actualizado = cursos.map((el) => {
//     return {
//         nombre: el.nombre,
//         precio: el.precio * 1.25
//     }
// });

// console.log(actualizado);

// // ! Ejemplo reduce()
// const numeros = [1, 2, 3, 4, 5, 6];
// const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

// console.log(total);

// // !Segundo ejemplo reduce()
// const miCompra = [
//     { nombre: 'Desarrollo Web', precio: 20000 },
//     { nombre: 'Javascript', precio: 18750 },
//     { nombre: 'ReactJS', precio: 27500 }
// ];

// const total = miCompra.reduce((acc, el) => acc + el.precio, 0);
// console.log(total);

// // ! Ejemplo sort() con números
// const numeros = [40, 1, 5, 200];
// numeros.sort((a, b) => a - b);
// numeros.sort((a, b) => b - a);

// // ! Ejemplo sort() con strings
// const items = [
//     { name: 'Pikachu', price: 21 },
//     { name: 'Charmander', price: 37 },
//     { name: 'Pidgey', price: 45 },
//     { name: 'Squirtle', price: 60 }
// ];
// items.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// });

// console.log(items); */