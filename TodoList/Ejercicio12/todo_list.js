// Obtener elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

// Declarar un arreglo vacío para las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim(); // Obtener y limpiar el texto ingresado
    if (taskText !== "") { // Verificar que no esté vacío
        tasks.push({ text: taskText, completed: false }); // Agregar tarea al arreglo
        taskInput.value = ""; // Limpiar el campo de entrada
        displayTasks(); // Actualizar la lista de tareas
    }
}

// Función para mostrar las tareas en la interfaz
function displayTasks() {
    taskList.innerHTML = ""; // Limpiar la lista existente
    tasks.forEach((task, index) => {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index)); // Agregar evento para el checkbox
        taskList.appendChild(li); // Añadir el <li> a la lista
    });
}

// Función para alternar el estado de una tarea (completada/no completada)
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Cambiar el estado de completado
    displayTasks(); // Actualizar la lista de tareas
}

// Función para eliminar las tareas completadas
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Filtrar las tareas no completadas
    displayTasks(); // Actualizar la lista de tareas
}

// Función para eliminar todas las tareas
function clearAllTasks() {
    tasks = []; // Vaciar el arreglo de tareas
    displayTasks(); // Actualizar la lista
}

// Agregar eventos a los botones
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);

// Mostrar la lista inicial (vacía)
displayTasks();

/*
Explicación Paso a Paso del Proyecto con la Funcionalidad Clear All Tasks
Este proyecto es una aplicación simple de lista de tareas que permite al usuario agregar, marcar como completadas, eliminar tareas completadas
y ahora eliminar todas las tareas con un solo clic. Aquí está la descripción detallada de cada paso:

1. Actualizar el Archivo HTML

En el archivo todo_list.html, añadimos un nuevo botón con el texto Clear All Tasks. Este botón tiene un ID único (clearAllBtn) para que podamos 
referenciarlo desde JavaScript.

Código HTML:
<button id="clearAllBtn">Clear All Tasks</button>
Este botón está colocado justo debajo del botón Clear Completed. La interfaz ahora tiene:

Un campo de entrada de texto para nuevas tareas.
Un botón para agregar tareas.
Una lista no ordenada (<ul>) donde se muestran las tareas.
Dos botones: uno para eliminar tareas completadas y otro para eliminar todas las tareas.
Resultado: Al actualizar el archivo, el botón Clear All Tasks será visible en la interfaz.

2. Agregar Funcionalidad en JavaScript
En el archivo todo_list.js, implementamos la funcionalidad del botón Clear All Tasks. Esto incluye:

Obtener una referencia al botón con document.getElementById.
Crear una función que vacíe el arreglo de tareas (tasks).
Asignar un evento click al botón para que llame a esta función.
a. Obtener Referencia del Botón
Usamos document.getElementById para seleccionar el botón y almacenarlo en la variable clearAllBtn:

const clearAllBtn = document.getElementById("clearAllBtn");
b. Crear la Función clearAllTasks
Definimos una función que vacía el arreglo tasks y actualiza la interfaz. Esta función elimina todas las tareas de la lista:

function clearAllTasks() {
    tasks = []; // Vacía el arreglo de tareas
    displayTasks(); // Actualiza la interfaz para reflejar la lista vacía
}
c. Asociar el Evento click
Finalmente, vinculamos el botón Clear All Tasks con la función clearAllTasks usando addEventListener:

clearAllBtn.addEventListener("click", clearAllTasks);
Resultado: Ahora, al hacer clic en el botón Clear All Tasks, todas las tareas serán eliminadas de la lista.

3. Cómo Funciona el Proyecto

Aquí está el flujo de trabajo completo de la aplicación después de agregar esta funcionalidad:

Agregar una Nueva Tarea:
El usuario escribe una tarea en el campo de entrada.
Hace clic en Add Task, lo que llama a la función addTask.
La tarea se agrega al arreglo tasks y se muestra en la lista.
Mostrar las Tareas:
Cada tarea se renderiza como un elemento de lista <li> con un checkbox.
Si el usuario marca el checkbox, la función toggleTask cambia el estado de la tarea a completada.
Eliminar Tareas Completadas:
Al hacer clic en Clear Completed, la función clearCompletedTasks elimina todas las tareas marcadas como completadas del arreglo tasks.
Eliminar Todas las Tareas:
Al hacer clic en Clear All Tasks, la función clearAllTasks vacía el arreglo tasks, eliminando todas las tareas (completadas o no).
4. Interacción con el Usuario

Ejemplo:

El usuario agrega las tareas "Comprar leche" y "Hacer ejercicio".
Marca "Comprar leche" como completada.
Hace clic en Clear Completed, eliminando "Comprar leche".
Hace clic en Clear All Tasks, eliminando "Hacer ejercicio".
5. Resultado Final

El proyecto ahora incluye una funcionalidad completa:

Agregar tareas: Permite al usuario agregar nuevas tareas.
Mostrar tareas: Muestra las tareas con casillas de verificación.
Marcar como completadas: Permite marcar tareas como completadas.
Eliminar completadas: Elimina solo las tareas completadas.
Eliminar todas las tareas: Vacía la lista completa de tareas.

*/