let variable1 = prompt("Tu Nombre");
let variable2 = prompt("Tu Apellido");

if (variable1 == "" && variable2 == ""){
    alert("No a introducido ningun dato");
}else if(variable1 == ""){
    alert("No a introducido el nombre");
}else if(variable2 == ""){
    alert("No a introducido su apellido");
}else{
    alert("datos ingresados correctamente!, tu nombre es: " + variable1 + " " + variable2)
}