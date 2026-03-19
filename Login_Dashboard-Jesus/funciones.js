function iniciarSesion() {
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    if (correo === "admin" && clave === "1234") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("panel").style.display = "block";
    } else {
        document.getElementById("mensaje").innerText = "Datos incorrectos";
    }
}

function mostrarClave() {
    let campo = document.getElementById("clave");

    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
}

function cerrarSesion() {
    document.getElementById("panel").style.display = "none";
    document.getElementById("inicio").style.display = "block";
}