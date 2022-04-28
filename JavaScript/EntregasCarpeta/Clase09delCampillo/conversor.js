// Funcion del Conversor
conversor = () => {
    // Pregunta al cliente si quiere probar el conversor
    pregunta = parseInt(prompt(`Desea probar un sistema para convertir pesos argentinos en dolares?
1-Si
2-No`))


    if (pregunta == 1) {
        // Clase de Moneda
        class Moneda {
            constructor(nombreMoneda, valor, cambio) {
                this.nombreMoneda = nombreMoneda.toUpperCase();
                this.cambio = cambio;
                this.valor = valor;
            }
        }

        
        const arrayMoneda = []; // Array para almacenar los objetos de "Moneda"
        let plata = () => prompt(`Bienvenido, introduzca "x" de Pesos Argentinos para saber su valor en Dolares`);
        let pesoArg = new Moneda("Pesos Argentinos", 200, plata()); // Moneda de Peso Argentino
        let dolar = new Moneda("Dolar", 200, resultado = []); // Moneda de Dolar

        // Push de Monedas a arrayMoneda
        arrayMoneda.push(pesoArg);
        arrayMoneda.push(dolar);
        // LLamando Clase "conversor"
        
        documento = document.querySelector(".conversor");

        // Conversion
        let conversion = (arrayMoneda[0].cambio / arrayMoneda[1].valor);
        arrayMoneda[1].cambio.push(conversion);
        
        // Filtro de Array y alert
        let ultimoResultado = arrayMoneda[1].cambio.filter(() => arrayMoneda[1].cambio.length == 1);
        // Muestra del resultado, con filtro de array incluido
        documento.innerHTML = `<form class="form-boton"><p>Presione enter para ver el resultado</p><input type="button" class="boton" value="Enter">`
// Funcion "Accionar" para ejecutar la conversion, contiene el resultado, el recordatorio y el cambio de color.(en la segunda entrega del proyecto final voy a aplicar todo de forma que tengan sentido las acciones!)
      accionar = ()=>{
          documento.innerHTML = `<div class="divResultado1"><p class="resultado1"><b>$${arrayMoneda[0].cambio} Pesos</b> es igual a <b>$${conversion} Dolares</b><p/></div>
        <div class="divResultado2"><p class="resultado2">A continuacion, el resultado de su ultima conversion, asi no se olvida!:<br>
        <b>$${ultimoResultado} Dolares</b><br>
        Muchas gracias y buena suerte!</p></div>`;
        Color = alert("Se cambiara el color en 3..2..1..");
          document.querySelector(".resultado1").style.color = "red";
        document.querySelector(".resultado2").style.color = "blue";
    }  
    // Evento de "Click que ejecuta la funcion de "Accionar"
    document.querySelector(".boton").addEventListener("click", accionar);
       
      
    }
    // Alerts de Salida y/o Error
     else if (pregunta == 2) {
        alert(`Ok, bye bye`);
    } else {
        alert(`Hubo un error, intentelo nuevamente`);
        conversor();
    }
}
// Ejecucion de la funcion de Conversion
conversor();