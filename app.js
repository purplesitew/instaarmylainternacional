document.addEventListener("DOMContentLoaded", () => {
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const aplicacion = document.getElementById("aplicacion");

  setTimeout(() => {
    if (pantallaInicio) {
      pantallaInicio.style.display = "none";
    }

    if (aplicacion) {
      aplicacion.classList.remove("oculta");
    }
  }, 5000);

  // Botón de instalación
  const botonInstalar = document.getElementById("btnInstalar");


  // Ocultar el botón si la PWA ya está instalada
  const modoAplicacionInstalada =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  if (modoAplicacionInstalada && botonInstalar) {
    botonInstalar.style.display = "none";
  }

  const sonidoDescarga = document.getElementById("sonidoDescarga");

  let instalacionPendiente = null;

  window.addEventListener("beforeinstallprompt", (evento) => {
    evento.preventDefault();
    instalacionPendiente = evento;
  });

  if (botonInstalar) {
    botonInstalar.addEventListener("click", async () => {
      if (sonidoDescarga) {
        sonidoDescarga.currentTime = 0;
        sonidoDescarga.volume = 0.25;
        sonidoDescarga.play().catch(() => {});
      }

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

  // Plantillas de credenciales
  const listaCredenciales = document.getElementById("lista-credenciales");
  const vistaPrevia = document.getElementById("vista-previa");
  const imagenVistaPrevia = document.getElementById("imagen-vista-previa");
  const btnCerrarVista = document.getElementById("btnCerrarVista");
  const btnCrearCredencial = document.getElementById("btnCrearCredencial");

  let plantillaSeleccionada = null;
  const credencialesVistas = new Set();

  if (
    listaCredenciales &&
    vistaPrevia &&
    imagenVistaPrevia &&
    btnCerrarVista &&
    btnCrearCredencial
  ) {
    btnCrearCredencial.style.display = "none";
    for (let i = 1; i <= 10; i++) {
      const imagen = document.createElement("img");
      imagen.src = `./B${i}.jpeg`;
      imagen.alt = `Plantilla de credencial ${i}`;
      imagen.className = "plantilla-credencial";

     
imagen.addEventListener("click", () => {
  plantillaSeleccionada = `B${i}.jpeg`;

  // Registrar que esta credencial ya fue vista
  credencialesVistas.add(i);

  // Mostrar CREAR solamente después de revisar las 10
  if (credencialesVistas.size === 10) {
    btnCrearCredencial.style.display = "block";
  }

  imagenVistaPrevia.src = `./${plantillaSeleccionada}`;
  vistaPrevia.classList.remove("oculta");
});


      listaCredenciales.appendChild(imagen);
    }

    btnCerrarVista.addEventListener("click", () => {
      vistaPrevia.classList.add("oculta");
      imagenVistaPrevia.src = "";
      plantillaSeleccionada = null;
    });

    btnCrearCredencial.addEventListener("click", () => {
      if (!plantillaSeleccionada) {
        alert("Primero selecciona una plantilla.");
        return;
      }

      alert("Plantilla seleccionada: " + plantillaSeleccionada);
    });
  }
});
