// Selecciona todos los botones
const botones = document.querySelectorAll("button");

botones.forEach(boton => {

    // Mouse entra
    boton.addEventListener("mouseenter", () => {
        boton.style.transform = "scale(1.1)";
        boton.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
        boton.style.transition = "all 0.2s ease";
    });

    // Mouse sale
    boton.addEventListener("mouseleave", () => {
        boton.style.transform = "scale(1)";
        boton.style.boxShadow = "none";
    });

    // Click (se hunde)
    boton.addEventListener("mousedown", () => {
        boton.style.transform = "scale(0.9)";
    });

    // Suelta click (rebote)
    boton.addEventListener("mouseup", () => {
        boton.style.transform = "scale(1.1)";
    });

});