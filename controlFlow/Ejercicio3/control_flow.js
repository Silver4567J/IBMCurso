// Supongamos que una organización organiza un programa de "Servicios Dietéticos" para proporcionar dietas a sus empleados y clientes, basándose en el peso y la rutina diaria de una persona. 
// Debe crear un código basado en autorización para proporcionar acceso a las personas en función de sus funciones en la organización, como empleados, miembros inscritos para "Servicios Dietéticos" y suscriptores.

// Si la persona es un empleado, está autorizada a tener acceso a "Servicios Dietéticos".

// Si la persona es un miembro inscrito, está autorizada a tener acceso a "Servicios dietéticos" e interacción individual con un dietista.

// Si la persona es un Suscriptor, está autorizada a tener acceso parcial solo para facilitar los "Servicios Dietéticos".

// Si la persona no es suscriptor, debe inscribirse o al menos suscribirse primero para hacer useficho de esta facilidad.

// Debe comunicarse con el usuario imprimiendo un mensaje que indique si esa persona es elegible para hacer uso de qué tipo de servicios.


let userRole = "Empleado";
let accessLevel;

if (userRole === "Director") {
    accessLevel = "Servicios Dietéticos Garantizados";
} else if (userRole === "Empleado") {
    accessLevel = "Servicios Dietéticos Garantizados";
} else {
    accessLevel = "Servicios Dietéticos No Garantizados";
}

console.log("nivel de acceso", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "Director") {
        userMessage = "Bienvenido Director!";
    } else {
        userMessage = "Bienvenido " + userRole;
    }
} else {
    userMessage = "Porfavor inicie session para acceder al sistema.";
}

console.log("Mensaje:", userMessage);

let userType = userRole;
let userCategory;

switch (userType) {
    case "Director":
        userCategory = "Administrator";
        break;
    case "Empleado":
        userCategory = "Employee";
        break;
    case "Suscriptor":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Categoria del usuario:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Estatus de Autenticacion:", authenticationStatus);