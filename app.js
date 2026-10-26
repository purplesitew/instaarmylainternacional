
document.addEventListener("DOMContentLoaded", () => {
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const aplicacion = document.getElementById("aplicacion");

  setTimeout(() => {
    pantallaInicio.style.display = "none";
    aplicacion.classList.remove("oculta");
  }, 5000);
});
