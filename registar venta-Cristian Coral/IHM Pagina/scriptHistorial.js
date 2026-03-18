const ventas = [
    {
        id: 1456,
        usuario: "Pepe M",
        direccion: "Calle 23 45-34",
        telefono: "3214565434",
        estado: "Vendido"
    },
    {
        id: 5675,
        usuario: "Pipito V",
        direccion: "Calle 12 23-56",
        telefono: "3123443677",
        estado: "Pendiente"
    },
    {
        id: 3454,
        usuario: "Juan B",
        direccion: "Calle 14 25-34",
        telefono: "3145657878",
        estado: "Vendido"
    },
    {
        id: 6776,
        usuario: "Javier C",
        direccion: "Calle 9 12-34",
        telefono: "3156775432",
        estado: "Vendido"
    },
    {
        id: 5656,
        usuario: "Daniela A",
        direccion: "Calle 8 11-34",
        telefono: "3164456444",
        estado: "Pendiente"
    }
];

function cargarVentas(lista) {
    const tabla = document.getElementById("tablaVentas");
    tabla.innerHTML = "";

    lista.forEach(v => {
        tabla.innerHTML += `
        <tr>
            <td>${v.id}</td>
            <td>${v.usuario}</td>
            <td>${v.direccion}</td>
            <td>${v.telefono}</td>
            <td>
                <span class="${v.estado.toLowerCase()}">
                    ${v.estado}
                </span>
            </td>
            <td>
                <span class="icono ver">👁️</span>
                <span class="icono eliminar">🗑️</span>
            </td>
        </tr>
        `;
    });
}

cargarVentas(ventas);

/* 🔍 BUSCADOR */
document.getElementById("searchVentas").addEventListener("input", e => {
    const valor = e.target.value.toLowerCase();

    const filtrados = ventas.filter(v =>
        v.usuario.toLowerCase().includes(valor) ||
        v.id.toString().includes(valor)
    );

    cargarVentas(filtrados);
});