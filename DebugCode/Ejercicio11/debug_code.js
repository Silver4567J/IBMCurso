function performOperation() {
    // Get user input from input fields
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    debugger; // Pause to check inputs and operation

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;
        switch (operation) {
            case "add":
                result = add(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                if (num2 !== 0) {
                    result = divide(num1, num2);
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Invalid operation";
        }
        // Display the result
        displayResult(result);
    } else {
        displayResult("Please enter valid numbers");
    }
}

function add(a, b) {
    debugger; // Pause to check addition logic
    return a + b;
}

function multiply(a, b) {
    debugger; // Pause to check multiplication logic
    return a * b;
}

function divide(a, b) {
    debugger; // Pause to check division logic
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}

/*

Estructura del Código


HTML (Interfaz de Usuario):
    Se define un formulario con:
Dos campos de entrada (input) para ingresar números.
Un selector desplegable (select) para elegir la operación: suma, multiplicación o división.
Un botón para ejecutar la operación al hacer clic.
Un párrafo (p) para mostrar los resultados.

JavaScript (Lógica):
Se define funciones para realizar las operaciones (suma, multiplicación, división) y mostrar los resultados.

Incluye validaciones para asegurarse de que los valores ingresados sean números y maneja errores, como división entre cero o entradas no válidas.


Flujo del Código
    Ingreso de Datos:
Los valores de los dos números se obtienen desde los campos de entrada con document.getElementById('input1').value y document.getElementById('input2').value.
El tipo de operación (suma, multiplicación o división) se obtiene desde el selector desplegable con document.getElementById('operation').value.

Validación de los Datos:
Los valores se convierten a números con parseFloat para manejar tanto enteros como decimales.
Se verifica si ambos valores son números válidos usando isNaN.

Ejecución de la Operación:
    Según la operación seleccionada:

    Suma: Se llama a la función add, que devuelve la suma de los dos números.

    Multiplicación: Se llama a la función multiply, que devuelve el producto de los dos números.

    División: Se llama a la función divide, que verifica que el divisor no sea cero antes de dividir.

    Manejo de Errores:
Si uno o ambos valores no son números, o si se intenta dividir entre cero, se muestra un mensaje de error en lugar del resultado.

    Mostrar el Resultado:
El resultado o mensaje de error se inserta en el párrafo <p> con document.getElementById('result').textContent.

    Uso de Depuración
El código incluye sentencias debugger que pausan la ejecución en ciertos puntos clave para observar el flujo y los valores. Para usar la depuración:

    Abrir Herramientas de Desarrollo:
Presiona Ctrl+Shift+I (o F12) en el navegador para abrir las herramientas de desarrollo.
Ve a la pestaña Sources (Fuentes) para inspeccionar el código.

    Ejecutar el Código Paso a Paso:
Ingresa valores en los campos y selecciona una operación.

Haz clic en el botón "Perform Operation".

Cuando el código llegue a un debugger, se detendrá.

Usa los botones de las herramientas de desarrollo para:

Avanzar línea por línea.

Inspeccionar los valores de las variables en la consola.

    Pruebas y Observaciones
    Valores Numéricos Válidos:
    Ejemplo:
Número 1: 10
Número 2: 5
    
    Operación: Multiplicación
Resultado esperado: The result is: 50.
Valores Inválidos (Texto o Vacíos):
    
    Ejemplo:
Número 1: abc
Número 2: 5
Resultado esperado: Please enter valid numbers.
Observa en la consola cómo el código detecta que num1 no es un número válido.

    División Entre Cero:
    Ejemplo:
Número 1: 10
Número 2: 0
    Operación: División
Resultado esperado: Cannot divide by zero.


*/