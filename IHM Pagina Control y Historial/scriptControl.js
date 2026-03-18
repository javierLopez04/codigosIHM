const datos = [
    { nombre: "Ibuprofeno", id: 234, fecha: "2030-09-07" },
    { nombre: "Acetaminofen", id: 544, fecha: "2023-01-06" },
    { nombre: "Betametazona", id: 256, fecha: "2026-01-04" },
    { nombre: "Paracetamol", id: 567, fecha: "2027-06-14" },
    { nombre: "Nolotil", id: 756, fecha: "2025-10-24" },
    { nombre: "Insulina", id: 978, fecha: "2030-07-27" },
    { nombre: "Azitromicina", id: 778, fecha: "2022-10-27" },
    { nombre: "Sintrom", id: 878, fecha: "2023-09-30" },
    { nombre: "Eutirox", id: 888, fecha: "2039-03-20" }
    
    
];

function obtenerEstado(fecha) {
    const hoy = new Date();
    const vencimiento = new Date(fecha);

    return vencimiento < hoy ? "Vencido" : "Disponible";
}

function cargarTabla(lista) {
    const tabla = document.getElementById("tablaBody");
    tabla.innerHTML = "";

    lista.forEach(item => {
        const estado = obtenerEstado(item.fecha);

        tabla.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.id}</td>
                <td>${item.fecha}</td>
                <td>
                    <span class="estado ${estado.toLowerCase()}">
                        ${estado}
                    </span>
                </td>
                <td>
                    <span class="ver">👁️</span>
                    <span class="eliminar">🗑️</span>
                </td>
            </tr>
        `;
    });
}

cargarTabla(datos);

document.getElementById("search").addEventListener("input", e => {
    const valor = e.target.value.toLowerCase();

    const filtrados = datos.filter(d =>
        d.nombre.toLowerCase().includes(valor)
    );

    cargarTabla(filtrados);
});