// hola = ()=>{
//     console.log("hola");
//     alert("Hola")
// }
// clickalert = addEventListener("click", hola)
// boton = document.querySelector(".boton").clickalert
teclado = document.querySelector(".teclado")
lpm = document.querySelector("#lpm")
teclado.addEventListener("change", () => alert("Puto"))
lpm.addEventListener("mousedown", () => lpm.style.color="red")
lpm.addEventListener("mouseup", () => lpm.style.color="black")