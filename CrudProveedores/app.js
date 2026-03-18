// ================= DATA =================

// Arreglo donde se guardan los proveedores
var proveedores = [

{ id: "01", nombre: "Distribuidora Farma", direccion: "Calle 10", telefono: "3001234567", estado: "Activo" },
{ id: "02", nombre: "MedicWorld", direccion: "Avenida 30", telefono: "3009876543", estado: "Activo" },
{ id: "03", nombre: "Salud Total", direccion: "Carrera 15", telefono: "3014567890", estado: "Inactivo" }

];

// ================= RENDER FUNCTION =================

// Funcion que se encarga de mostrar los proveedores en la tabla
var renderProveedores = function () {

// Busca el contenedor donde se mostraran los proveedores
var container = document.getElementById("gridProveedores");

// Busca el template que sirve como molde
var template = document.getElementById("proveedorTemplate");

// Si no existe el contenedor o el template se detiene el codigo
if (!container || !template) return;

// Recorre todos los proveedores del arreglo
proveedores.forEach(function (prov) {

// Clona el template para crear una nueva fila
var clone = template.content.cloneNode(true);

// Inserta el ID del proveedor
clone.querySelector(".id-cell").textContent = prov.id;

// Inserta el nombre del proveedor
clone.querySelector(".name-cell").textContent = prov.nombre;

// Inserta la direccion
clone.querySelector(".direccion-cell").textContent = prov.direccion;

// Inserta el telefono
clone.querySelector(".telefono-cell").textContent = prov.telefono;

// Inserta el estado
clone.querySelector(".status-cell").textContent = prov.estado;

// Agrega el proveedor al contenedor de la tabla
container.appendChild(clone);

});

};

// ================= INIT =================

// Evento que se ejecuta cuando la pagina termina de cargar
document.addEventListener("DOMContentLoaded", function () {

// Llama la funcion que muestra los proveedores
renderProveedores();

});