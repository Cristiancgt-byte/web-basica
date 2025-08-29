// Función para mostrar la hora en tiempo real
function actualizarReloj() {
    let ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, "0");
    let minutos = ahora.getMinutes().toString().padStart(2, "0");
    let segundos = ahora.getSeconds().toString().padStart(2, "0");
    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();

// Cambiar color de fondo aleatoriamente
document.getElementById("cambiarColor").addEventListener("click", () => {
    let colores = ["#f4f4f9", "#ffeaa7", "#fab1a0", "#74b9ff", "#55efc4", "#fd79a8"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
