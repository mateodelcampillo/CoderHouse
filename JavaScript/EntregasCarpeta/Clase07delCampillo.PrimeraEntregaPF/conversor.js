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

        // Conversion
        let conversion = (arrayMoneda[0].cambio / arrayMoneda[1].valor);
        alert(`$${arrayMoneda[0].cambio} pesos es igual a $${conversion} dolares`);
        arrayMoneda[1].cambio.push(conversion);

        // Filtro de Array y alert
        let ultimoResultado = arrayMoneda[1].cambio.filter(() => arrayMoneda[1].cambio.length == 1);
        alert(`A continuacion, el resultado de su ultima conversion, asi no se olvida!:
        $${ultimoResultado} Dolares
        Muchas gracias y buena suerte!`);

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