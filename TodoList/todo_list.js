// Obtener elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

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

// Agregar eventos a los botones
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Mostrar la lista inicial (vacía)
displayTasks();
