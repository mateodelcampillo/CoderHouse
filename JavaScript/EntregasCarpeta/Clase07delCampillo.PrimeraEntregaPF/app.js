// Funcion de Menu
menu = () => {
    // Seccion de Menu
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


    // Funcion de Suma
    sumar = () => {
        if (operacion === 1) {
            let Num1 = parseInt(prompt(`Introduzca el primer numero a sumar`));
            let Num2 = parseInt(prompt(`Introduzca el segundo numero a sumar`));
            let resultado = Num1 + Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }


    // Funcion de Resta
    resta = () => {
        if (operacion == 2) {
            let Num1 = parseInt(prompt(`Introduzca el primer numero a restar`));
            let Num2 = parseInt(prompt(`Introduzca el segundo numero a restar`));
            let resultado = Num1 - Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }


    // Funcion de Multiplicacion
    multiplicacion = () => {
        if (operacion == 3) {
            let Num1 = parseInt(prompt(`Introduzca el primer numero a multiplicar`));
            let Num2 = parseInt(prompt(`Introduzca el segundo numero a multiplicar`));
            let resultado = Num1 * Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }


    // Funcion de division
    division = () => {
        if (operacion == 4) {
            let Num1 = parseInt(prompt(`Introduzca el numero a dividir`));
            let Num2 = parseInt(prompt(`Por cuanto lo desea dividir?`));
            let resultado = Num1 / Num2;
            operacion = true
            alert(`El resultado es : ${resultado}`);

        }
    }


    // Funcion de Conteo
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


    // Funcion de Tabla de mUltiplicacion
    tablaDeMultiplicacion = () => {
        if (operacion == 6) {

            let numero = parseInt(prompt("Ingrese un numero"));
            for (i = 0; i <= 10; i++) {
                document.write("El numero " + numero + " multiplicado por " + i + " es igual a: " + numero * i + "<br>" + "<br>")
                operacion = true

            }
        }
    }


    // Funcion de Pregunta para repetir proceso
    pregunta = () => {
        if (operacion == true) {
            let otraOperacion = parseInt(prompt(`Desea realizar otra operacion?
1-Si
2-No`))
            if (otraOperacion == 1) {
                menu()
                sumar()

            } else if (otraOperacion == 2) {
                alert(`Ok, Hasta luego.`)
            } else {
                alert(`Hubo un error`);
                menu()
            }
        }
    }


    // Ejecucion de las funciones
    sumar();
    resta();
    multiplicacion();
    division();
    conteo();
    tablaDeMultiplicacion();
    pregunta();


}
// Ejecucion de la funcion Menu
menu();





