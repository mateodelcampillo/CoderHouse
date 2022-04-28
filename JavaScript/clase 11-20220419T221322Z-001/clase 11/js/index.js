// funcion display de menus
function abrirMenu(menu){
    if(menu == "buscarUsuario"){
    document.querySelector("#menuUsuario").style.display = "none"
    document.querySelector("#buscarUsuario").style.display = "block"
    }

else if (menu == "nuevoUsuario"){
    document.querySelector("#menuUsuario").style.display = "none"
    document.querySelector("#nuevoUsuario").style.display = "block"
}
else if(menu == "borrarUsuario"){
    document.querySelector("#menuUsuario").style.display = "none"
    document.querySelector("#borrarUsuario").style.display = "block"
}else{

}
}

// fin funcion display menus

// creamos array de personas


// Evento click nuevo usuario/cliente
document.querySelector("#buscarCliente").addEventListener("click", ()=>{abrirMenu(buscarUsuario)})
document.querySelector("#nuevoCliente").addEventListener("click", ()=>{abrirMenu(nuevoUsuario)})
document.querySelector("#borrarCliente").addEventListener("click", ()=>{abrirMenu(borrarUsuario)})

// Evento click buscar usuario/cliente

// Evento click borrar usuario/cliente


// funcion nuevo usuario y control evento

// fin funcion nuevo usuario

// funcion buscar usuario

//fin funcion buscar usuario

// función borrar usuario lupa

// fin funcion borrar usuario lupa

// funcion borrar usuario submit

// fin funcion borrar usuario submit

// flecha volver al menu

// fin flecha volver al menú principal