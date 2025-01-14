// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones de los productos
    const botones = document.querySelectorAll(".product-card button");

    // Crea un mensaje que se mostrará cuando el usuario haga clic en un botón
    const mensaje = document.createElement("p");
    mensaje.id = "mensaje"; // Asigna un id al mensaje
    document.body.appendChild(mensaje); // Agrega el mensaje al final del cuerpo del documento

    // Agrega un evento a cada botón de producto
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            mensaje.textContent = "¡Has añadido un producto al carrito!";
            mensaje.style.color = "blue"; // Establece el color del mensaje
        });
    });
});
