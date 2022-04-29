// Array almacenador de resultados
arrayResultado = []


historial = JSON.parse(localStorage.getItem("arrayResult")) 
// Variable que almacen el tipo de operacion a realizar
let operacion = ""
// Evento onclick para determinar que operacion se va a ejecutar
document.querySelector(".suma").addEventListener("click", ()=> operacion = "+")
document.querySelector(".resta").addEventListener("click", ()=> operacion = "-")
document.querySelector(".multiplicacion").addEventListener("click", ()=> operacion = "*")
document.querySelector(".division").addEventListener("click", ()=> operacion = "/")
document.querySelector(".division").addEventListener("click", ()=> operacion = "/")
// Evento para resetear el resultado y realizar una nueva operacion
document.querySelector(".reset").addEventListener("click", ()=> {
    resultado = 0
    document.querySelector(".resultado").innerHTML = resultado
    localStorage.removeItem("arrayResult")
   })
   // Evento onclick con funcion para resolver la operacion
document.querySelector(".igual").addEventListener("click", ()=> {
const n1 = parseInt(document.querySelector(".n1").value)
const n2 = parseInt(document.querySelector(".n2").value)
    resultado = ""
    if(operacion == "+"){
       resultado =  n1 + n2
    }
    else if(operacion == "-"){
        resultado =  n1 - n2
     }
     else if(operacion == "*"){
        resultado =  n1 * n2
     }
     else if(operacion == "/"){
        resultado =  n1 / n2
     }
   //   Objeto con el resultado y el nro de operacion dentro
     resultObjeto = {
        operacionNum: arrayResultado.length + 1,
        desarrollo: n1 +` `+ operacion +` `+ n2 + ` =` + resultado 
      }
      // Push de el objeto al arrayResultado declarado al inicio
      arrayResultado.push(resultObjeto)
      console.log(arrayResultado)
      // innerHTML para mostrar el resultado en pantalla
     document.querySelector(".resultado").innerHTML = resultado
      // Se añade arrayResultado al localStorage en formato JSON
      localStorage.setItem("arrayResult",JSON.stringify(arrayResultado))
    historial = JSON.parse(localStorage.getItem("arrayResult"))  
      
})
// Se obtiene del localStorage el JSON con los resultados
const  textoHistorial = document.querySelector(".textoHistorial");
// Funcion que devuelve el historial
historialVacio = ["<p class=vacio>No hay historial!, realice una operacion</p>"]
function devolverHistorial(respuesta2) {
   
//   if(localStorage. length > 0){
//   textoHistorial.innerHTML = ''
//   historial.forEach(element => {
    
//       textoHistorial.innerHTML += `Numero de operacion: ${element.operacionNum} <br> ${element.desarrollo} <br>` 
//    }
//    )}else{
//       textoHistorial.innerHTML = "<p class=vacio>No hay nada</p>"
//    }
 (localStorage.length > 0)? inner() : textoHistorial.innerHTML = respuesta2
}
// Se aplica un evento al input que devuelve el historial mediante la funcion de arriba
document.querySelector(".botonHistoriall").addEventListener("click", ()=>devolverHistorial(...historialVacio))

function inner(){
   textoHistorial.innerHTML = ''
   historial.forEach(element => {
     
       textoHistorial.innerHTML += `Numero de operacion: ${element.operacionNum} <br> ${element.desarrollo} <br>` 
    }
    )
}
