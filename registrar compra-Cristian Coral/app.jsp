// ================= Datos =================
var productosCompra = [
    { nombre: "Paracetamol 500mg", precio: 3000 },
    { nombre: "Ibuprofeno 400mg", precio: 4000 },
    { nombre: "Amoxicilina 500mg", precio: 3000 }
];

// ================= RENDER =================
var renderCompra = function () {
    var tabla = document.getElementById("tablaCompra");

    productosCompra.forEach(function (prod, index) {

        var fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${prod.nombre}</td>
            <td><input type="number" value="1" min="1" data-index="${index}"></td>
            <td>$${prod.precio}</td>
            <td class="subtotal">$${prod.precio}</td>
        `;

        tabla.appendChild(fila);
    });

    activarEventos();
};

// ================= EVENTOS =================
function activarEventos() {
    var inputs = document.querySelectorAll("input[type='number']");

    inputs.forEach(input => {
        input.addEventListener("input", function () {

            var index = this.dataset.index;
            var cantidad = parseInt(this.value);
            var precio = productosCompra[index].precio;

            var subtotal = cantidad * precio;

            var fila = this.parentElement.parentElement;
            fila.querySelector(".subtotal").textContent = "$" + subtotal;

            calcularTotal();
        });
    });
}

// ================= TOTAL =================
function calcularTotal() {
    var subtotales = document.querySelectorAll(".subtotal");
    var total = 0;

    subtotales.forEach(td => {
        total += parseInt(td.textContent.replace("$", ""));
    });

    document.getElementById("total").textContent = "$" + total;
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", function () {
    renderCompra();
    calcularTotal();

    // ================= EFECTOS BOTONES =================
    const botones = document.querySelectorAll("button");

    botones.forEach(boton => {

        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.1)";
            boton.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
            boton.style.transition = "all 0.2s ease";
        });

        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
            boton.style.boxShadow = "none";
        });

        boton.addEventListener("mousedown", () => {
            boton.style.transform = "scale(0.95)";
        });

        boton.addEventListener("mouseup", () => {
            boton.style.transform = "scale(1.1)";
        });

    });
});