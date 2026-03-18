// ================= DATA =================

// Arreglo que contiene los medicamentos
// Cada medicamento es un objeto con sus datos
var medicamentos = [

    { id: "01", nombre: "Paracetamol", categoria: "Analgesico", estado: "Disponible" },
    { id: "02", nombre: "Amoxicilina", categoria: "Antibiotico", estado: "Agotado" },
    { id: "03", nombre: "Omeprazol", categoria: "Antiacido", estado: "Disponible" }

];

// ================= RENDER FUNCTION =================

// Funcion que se encarga de mostrar los medicamentos en la tabla
var renderMedicamentos = function () {

    // Busca el contenedor donde se mostraran los datos
    var container = document.getElementById("gridMedicamentos");

    // Busca el template que sirve como molde
    var template = document.getElementById("medicamentoTemplate");

    // Si no existe el contenedor o el template se detiene el codigo
    if (!container || !template) return;

    // Recorre todos los medicamentos del arreglo
    medicamentos.forEach(function (med) {

        // Clona el contenido del template
        var clone = template.content.cloneNode(true);

        // Inserta el ID del medicamento
        clone.querySelector(".id-cell").textContent = med.id;

        // Inserta el nombre
        clone.querySelector(".name-cell").textContent = med.nombre;

        // Inserta la categoria
        clone.querySelector(".category-cell").textContent = med.categoria;

        // Inserta el estado
        clone.querySelector(".status-cell").textContent = med.estado;

        // Los botones ya vienen definidos en el HTML

        // Agrega el medicamento al contenedor de la tabla
        container.appendChild(clone);
    });
};

// ================= INIT =================

// Evento que se ejecuta cuando la pagina termina de cargar
document.addEventListener("DOMContentLoaded", function () {

    // Llama la funcion que muestra los medicamentos
    renderMedicamentos();

});