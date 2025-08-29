// === Reloj en vivo ===
function actualizarReloj() {
    let ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, "0");
    let minutos = ahora.getMinutes().toString().padStart(2, "0");
    let segundos = ahora.getSeconds().toString().padStart(2, "0");
    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// === Cambiar color de fondo y contador de clics ===
let contador = 0;
document.getElementById("cambiarColor").addEventListener("click", () => {
    let colores = ["#f4f4f9", "#ffeaa7", "#fab1a0", "#74b9ff", "#55efc4", "#fd79a8"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;

    // Contador de clics
    contador++;
    document.getElementById("contador").textContent = contador;
});

// === Saludo personalizado ===
document.getElementById("saludar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value.trim();
    let mensaje = document.getElementById("mensajeSaludo");

    if (nombre) {
        mensaje.textContent = `¡Hola, ${nombre}! Bienvenido a mi página 🙌`;
    } else {
        mensaje.textContent = "Por favor, escribe tu nombre 🙂";
    }
});
