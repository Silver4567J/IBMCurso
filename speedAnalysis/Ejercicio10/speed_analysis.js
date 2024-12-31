let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var totalCharacters = userTypedText.length; // Length of the entire text

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Total Characters: " + totalCharacters + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}

/*
Explicación detallada acerca del ejercicio para resolver:
1. Identificar la necesidad
El objetivo era calcular la longitud total del texto ingresado por el usuario en el campo de entrada (userInput) 
y mostrar este valor en los resultados del test de tipeo.

2. Localizar la variable relevante
El texto ingresado por el usuario ya estaba siendo capturado en la variable userTypedText:

var userTypedText = document.getElementById("userInput").value;
Esta variable almacena el contenido del campo de entrada (<textarea> o <input>). Todo lo ingresado por el 
usuario se puede manipular con esta variable.

3. Usar la propiedad length
La propiedad length de una cadena en JavaScript devuelve la cantidad de caracteres (incluyendo espacios y 
caracteres especiales) que contiene. La aplicación del método es directa:

var totalCharacters = userTypedText.length;

Aquí:
userTypedText es la cadena que contiene el texto ingresado.
.length evalúa cuántos caracteres hay en esa cadena.

4. Añadir la longitud de texto a los resultados
Los resultados del test se generan dinámicamente en el <div> con el ID output. Se utiliza innerHTML para 
insertar el contenido en este contenedor. Añadí una nueva línea para mostrar el total de caracteres calculados:

5. Probar el cálculo de caracteres
Durante la prueba:
Se escribe un texto en el campo de entrada.
Al hacer clic en "End Test", el programa calcula la longitud del texto ingresado, incluyendo espacios y caracteres especiales.
Este valor se muestra como "Total Characters".

El test ahora muestra:
Words Typed: Cantidad de palabras ingresadas.
Total Characters: Número total de caracteres ingresados.
Time Elapsed: Tiempo en segundos desde el inicio hasta el final del test.
Words Per Minute (WPM): Velocidad de escritura calculada en palabras por minuto.
 */