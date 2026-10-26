
document.addEventListener("DOMContentLoaded", () => {
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const aplicacion = document.getElementById("aplicacion");

  setTimeout(() => {
    pantallaInicio.style.display = "none";
    aplicacion.classList.remove("oculta");
  }, 5000);

  // Botón de instalación
  const botonInstalar = document.getElementById("btnInstalar");
  const sonidoDescarga = document.getElementById("sonidoDescarga");

  let instalacionPendiente = null;

  window.addEventListener("beforeinstallprompt", (evento) => {
    evento.preventDefault();
    instalacionPendiente = evento;
  });

  if (botonInstalar) {
    botonInstalar.addEventListener("click", async () => {
      // Reproducir sonido suave
      if (sonidoDescarga) {
        sonidoDescarga.currentTime = 0;
        sonidoDescarga.volume = 0.25;
        sonidoDescarga.play().catch(() => {});
      }

      // Mostrar la opción de instalación si está disponible
      if (instalacionPendiente) {
        instalacionPendiente.prompt();
        await instalacionPendiente.userChoice;
        instalacionPendiente = null;
      } else {
        alert(
          "Para instalar Insta Army, abre el menú de tu navegador y selecciona 'Instalar aplicación' o 'Agregar a pantalla de inicio'."
        );
      }
    });
  }

  window.addEventListener("appinstalled", () => {
    if (botonInstalar) {
      botonInstalar.style.display = "none";
    }
  });
});
