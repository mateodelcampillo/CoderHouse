menu = () => {
    let operacion = parseInt(prompt(`Hola!, escriba el numero de la operacion que desea realizar:
    1-Suma
    2-Resta 
    3-Multiplicacion
    4-Division
    5-Contéo
    6-Tabla de multiplicar`));

    if (operacion <= 0 || operacion > 6) {
        alert("Hay un error, vuelva a intentarlo");
        menu();
    }
    sumar = () => {
        if (operacion === 1) {
            let Num1 = parseInt(prompt(`Introduzca el primer numero a sumar`));
            let Num2 = parseInt(prompt(`Introduzca el segundo numero a sumar`));
            let resultado = Num1 + Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }
    resta = () => {
        if (operacion == 2) {
            let Num1 = parseInt(prompt(`Introduzca el primer numero a restar`));
            let Num2 = parseInt(prompt(`Introduzca el segundo numero a restar`));
            let resultado = Num1 - Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }
    multiplicacion = () => {
        if (operacion == 3) {
            let Num1 = parseInt(prompt(`Introduzca el primer numero a multiplicar`));
            let Num2 = parseInt(prompt(`Introduzca el segundo numero a multiplicar`));
            let resultado = Num1 * Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }
    division = () => {
        if (operacion == 4) {
            let Num1 = parseInt(prompt(`Introduzca el numero a dividir`));
            let Num2 = parseInt(prompt(`Por cuanto lo desea dividir?`));
            let resultado = Num1 / Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }
    conteo = () => {
        if (operacion == 5) {
            let numero1 = parseInt(prompt("A que numero desea llegar?"));
            let suma = 0;
            while (suma != numero1) {
                suma++;
                if (suma == 7) {

                    document.write("Este numero no se incluye por que es de mala suerte.." + '<br>')
                    continue
                } operacion = true
                document.write(suma + '<br>');

            }
        }
    }
    tablaDeMultiplicacion = () => {
        if (operacion == 6) {
            let numero = parseInt(prompt("Ingrese un numero"));
            for (i = 0; i <= 10; i++) {
                document.write("El numero " + numero + " multiplicado por " + i + " es igual a: " + numero * i + "<br>" + "<br>")
                operacion = true
                
            }
        }
    }
    pregunta = () => {
        if (operacion == true) {
            let otraOperacion = parseInt(prompt(`Desea realizar otra operacion?
1-Si
2-No`))
            if (otraOperacion == 1) {
                menu()
                sumar()
                pregunta()
            } else if (otraOperacion == 2) {
                alert(`Ok, Hasta luego.`)
            } else {
                alert(`Hubo un error`);
                menu()
            }
        }
    }
    sumar();
    resta();
    multiplicacion();
    division();
    conteo();
    tablaDeMultiplicacion();
    pregunta();


}

menu();
conversor = () => {
    pregunta = parseInt(prompt(`Desea probar un sistema para convertir pesos argentinos en dolares?
1-Si
2-No`))
    if (pregunta == 1) {
        class Moneda {
            constructor(nombreMoneda, valor, cambio) {
                this.nombreMoneda = nombreMoneda.toUpperCase();
                this.cambio = cambio;
                this.valor = valor;
            }
        }

        const arrayMoneda = [];
        let plata = () => prompt(`Bienvenido, introduzca "x" de Pesos Argentinos para saber su valor en Dolares`);

        let pesoArg = new Moneda("Pesos Argentinos", 200, plata());
        arrayMoneda.push(pesoArg);
        conversion = arrayMoneda[0].cambio / 200;
        alert(`$${arrayMoneda[0].cambio} pesos es igual a $${conversion} dolares`);
    } else if (pregunta == 2) {
        alert(`Ok, bye bye`)
    } else {
        alert(`Hubo un error, intentelo nuevamente`);
        conversor();
    }
}
conversor();




