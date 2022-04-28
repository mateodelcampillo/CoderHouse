oscuro = localStorage.getItem("ModoOscuro");
boton = document.querySelector("#boton")

test = ()=> {
    if(oscuro == true){
        localStorage.setItem("ModoOscuro", false)
    alert("tienes activado el modo oscuro")
}else{
    oscuro = true;
    alert("No lo tienes activado")
}
}

boton.addEventListener("click", test)


