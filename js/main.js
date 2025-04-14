// Lista de usuarios//
let usuarios = [
    { nombreDeUsuario: "Dueño", contraseña: "Dueño123" },
    { nombreDeUsuario: "Director", contraseña: "Director123" },
    { nombreDeUsuario: "Profesor", contraseña: "Profesor123" },
    { nombreDeUsuario: "Alumno", contraseña: "Alumno123" },
    { nombreDeUsuario: "Invitado", contraseña: "Invitado123" }
];

// Función para iniciar sesion //
function iniciarSesion() {
    console.log("Iniciando proceso de ingreso...");
    
    let nombreDeUsuario = prompt("Ingrese su nombre de usuario:");
    console.log("Nombre de usuario Ingresado", nombreDeUsuario);
    
    if (nombreDeUsuario === null || nombreDeUsuario === "") {
        alert("El inicio de sesión fue cancelado");
        console.log("Ingresao cancelado: No se ingresó un nombre de usuario correcto");
        return false;
    }
    
    let contraseña = prompt("Ingrese su contraseña:");
    console.log("Contraseña ingresada:", "**"); 
    
    if (contraseña === null || contraseña === "") {
        alert("El inicio de sesión fue cancelado");
        console.log("Ingreso cancelado: No se ingresó una contraseña");
        return false;
    }
    
    // Buscar el usuario/ / 
    let ingresoExitoso = false;
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombreDeUsuario === nombreDeUsuario && usuarios[i].contraseña === contraseña) {
            ingresoExitoso = true;
            break;
        }
    }
    
    if (ingresoExitoso) {
        alert("¡Bienvenido, " + nombreDeUsuario + "!");
        console.log("ingreso exitoso para el usuario:", nombreDeUsuario);
        return true;
    } else {
        alert("Usuario o contraseña incorrectos");
        console.log("ingreso fallido: Usuario o contraseña incorrectos");
        return false;
    }
}

// Iniciar el sistema//
console.log("Sistema de ingreso inicializado");
console.log("Usuarios disponibles en el sistema:", usuarios);

// Función para iniciar sesion hasta que lo consuiga //
function intentarIngreso() {
    let resultado = iniciarSesion();
    
    if (resultado === false) {
        let reintentar = confirm("¿Desea intentar nuevamente?");
        if (reintentar) {
            console.log("Usuario eligió reintentar el ingreso");
            intentarIngreso();
        } else {
            alert("Sesión finalizada");
            console.log("Usuario decidió cancelar el ingreso");
        }
    }
}

// Iniciar el ingreso
intentarIngreso(); 