Ciclo 1
let numero = parseInt(prompt("Ingrese un numero"));
for( i = 0; i <= 10; i++){
    document.write("El numero "+ numero + " multiplicado por " + i + " es igual a: " + numero*i + "<br>")
   
} 
Ciclo 2
let numero1 = parseInt(prompt("A que numero desea llegar?"));
let suma = 0
while(suma != numero1){
    suma++;
    if(suma == 7){
        
        console.log("Este numero no se incluye por que es de mala suerte..")
        continue 
    }
    console.log(suma);
    
}