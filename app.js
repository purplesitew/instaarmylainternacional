// ==========================================
// CONEXIÓN CON FIREBASE
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
  getFirestore,
  doc,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2TlTv2885-AGozRe-I4zXGd42Sy1hWoQ",
  authDomain: "insta-army-credenciales.firebaseapp.com",
  projectId: "insta-army-credenciales",
  storageBucket: "insta-army-credenciales.firebasestorage.app",
  messagingSenderId: "530395959869",
  appId: "1:530395959869:web:6c32dc7f0838ad4e271054",
  measurementId: "G-2LMH8Q5TJ0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Iniciar sesión anónima
const authReady = signInAnonymously(auth)
  .then(() => {
    console.log("Insta Army: conexión con Firebase establecida 💜");
  })
  .catch((error) => {
    console.error("Error al conectar con Firebase:", error);
    throw error;
  });

// ==========================================
// GENERAR CREDENCIAL B1 CON LOS DATOS
// ==========================================

async function mostrarCredencialB1(datos) {
    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !canvas) {
        throw new Error("No se encontró el editor de la credencial.");
    }

    const contexto = canvas.getContext("2d");

    // Cargar las tipografías
    await document.fonts.load('36px "MilasianArmy"');
    await document.fonts.load('32px "MoliendaArmy"');

    // Cargar la plantilla original
    const plantilla = new Image();
  plantilla.src = "./B1PLANTILLA.jpg";

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar la plantilla B1.")
        );
    });

    // Conservar las dimensiones originales
    canvas.width = plantilla.naturalWidth;
    canvas.height = plantilla.naturalHeight;

    // Dibujar la plantilla sin modificarla
    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );


// ==========================================
// ESTILO Y POSICIÓN DE LOS DATOS
// ==========================================

contexto.textAlign = "center";
contexto.textBaseline = "bottom";

contexto.fillStyle = "#ffffff";
contexto.strokeStyle = "#c58aff";
contexto.lineJoin = "round";
contexto.lineWidth = 3;

// FUNCIÓN PARA ESCRIBIR TEXTOS GRANDES
function escribirTextoAjustado(texto, centroX, parteInferior, anchoMaximo) {

    let tamaño = 68;

    contexto.font = `${tamaño}px "MilasianArmy"`;

    // Reducir solamente si el texto es demasiado ancho
    while (
        contexto.measureText(texto).width > anchoMaximo &&
        tamaño > 30
    ) {
        tamaño--;
        contexto.font = `${tamaño}px "MilasianArmy"`;
    }

    contexto.strokeText(texto, centroX, parteInferior);
    contexto.fillText(texto, centroX, parteInferior);
}

// NOMBRE
escribirTextoAjustado(
    datos.nombre,
    603,
    430,
    536
);

// PAÍS
escribirTextoAjustado(
    datos.pais,
    603,
    692,
    536
);

// BIAS
escribirTextoAjustado(
    datos.bias,
    603,
    933,
    536
);


// CÓDIGO
contexto.textBaseline = "middle";

contexto.font = '32px "MoliendaArmy"';

contexto.fillStyle = "#ffffff"; 
contexto.strokeStyle = "#ff0000";

contexto.lineWidth = 6;
contexto.lineJoin = "round";

contexto.strokeText(datos.codigo, 160, 630, 270);
contexto.fillText(datos.codigo, 160, 630, 270);

    // Mostrar el editor
    if (creador) {
        creador.classList.add("oculta");
    }

    editor.classList.remove("oculta");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
// COLOCAR FOTOGRAFÍA EN LA CREDENCIAL
// ==========================================

const fotoArmy = document.getElementById("fotoArmy");

if (fotoArmy) {
    fotoArmy.addEventListener("change", () => {

        const archivo = fotoArmy.files[0];

        if (!archivo) return;

        if (!archivo.type.startsWith("image/")) {
            alert("Selecciona una fotografía válida.");
            return;
        }

        const imagen = new Image();
        const urlFoto = URL.createObjectURL(archivo);

        imagen.onload = () => {

            const canvas = document.getElementById("canvas-credencial");
            const contexto = canvas.getContext("2d");

            // Espacio exacto de la fotografía
            const x = 17;
            const y = 201;
            const ancho = 289;
            const alto = 381;

            // Ajustar la imagen sin deformarla
            const escala = Math.max(
                ancho / imagen.width,
                alto / imagen.height
            );

            const anchoImagen = imagen.width * escala;
            const altoImagen = imagen.height * escala;

            const desplazamientoX = (ancho - anchoImagen) / 2;
            const desplazamientoY = (alto - altoImagen) / 2;

            // Recortar para que no salga del marco
            contexto.save();

            contexto.beginPath();
            contexto.rect(x, y, ancho, alto);
            contexto.clip();

            contexto.drawImage(
                imagen,
                x + desplazamientoX,
                y + desplazamientoY,
                anchoImagen,
                altoImagen
            );

            contexto.restore();

            URL.revokeObjectURL(urlFoto);
        };

        imagen.onerror = () => {
            alert("No se pudo cargar la fotografía.");
            URL.revokeObjectURL(urlFoto);
        };

        imagen.src = urlFoto;
    });
}
    // =====================================
    // PRUEBA VISUAL B1 SIN REGISTRO
    // =====================================

    const btnProbarB1 = document.getElementById("btnProbarB1");

    if (btnProbarB1) {
        btnProbarB1.addEventListener("click", async () => {
            try {
                await mostrarCredencialB1({
                    nombre: "ARMY",
                    pais: "MÉXICO",
                    bias: "JUNGKOOK",
                    codigo: "PRUEBA-001"
                });
            } catch (error) {
                console.error("Error en prueba B1:", error);
                alert(error.message);
            }
        });
    }

  

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

  // Mostrar la plantilla elegida en pequeño
  const miniatura = document.getElementById("miniatura-credencial");
  miniatura.src = `./${plantillaSeleccionada}`;

  // Ocultar el menú y la vista previa
  document.getElementById("menu-credenciales").classList.add("oculta");
  vistaPrevia.classList.add("oculta");

  // Mostrar el formulario
  document.getElementById("creador-credencial").classList.remove("oculta");
});

// Mostrar u ocultar el campo del código anterior
const opcionesCredencial = document.querySelectorAll(
  'input[name="credencialAnterior"]'
);

opcionesCredencial.forEach((opcion) => {
  opcion.addEventListener("change", () => {
    const campoCodigo = document.getElementById("campoCodigoAnterior");
    const codigoAnterior = document.getElementById("codigoAnterior");

    if (opcion.value === "si" && opcion.checked) {
      campoCodigo.classList.remove("oculta");
      codigoAnterior.required = true;
    }

    if (opcion.value === "no" && opcion.checked) {
      campoCodigo.classList.add("oculta");
      codigoAnterior.required = false;
      codigoAnterior.value = "";
    }
  });
});


// ==========================================
// REGISTRO DE PARTICIPANTES EN FIREBASE
// ==========================================

const formularioRegistro = document.getElementById("formularioRegistro");

if (formularioRegistro) {
  formularioRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const botonContinuar = formularioRegistro.querySelector(
      'button[type="submit"]'
    );

    const nombre = document.getElementById("nombreArmy").value.trim();
    const pais = document.getElementById("paisArmy").value.trim();
    const bias = document.getElementById("biasArmy").value.trim();
    const whatsapp = document.getElementById("whatsappArmy").value.trim();

    const opcionCredencial = document.querySelector(
      'input[name="credencialAnterior"]:checked'
    );

    if (!opcionCredencial) {
      alert("Selecciona si ya tienes una credencial.");
      return;
    }

    if (!nombre || !pais || !bias || !whatsapp) {
      alert("Completa todos los campos.");
      return;
    }

    let tipo = "nuevo";
    let codigoAnterior = "";

    if (opcionCredencial.value === "si") {
      tipo = "anterior";
      codigoAnterior = document
        .getElementById("codigoAnterior")
        .value.trim().toUpperCase();

      if (!codigoAnterior) {
        alert("Escribe tu código de credencial.");
        return;
      }
    }

    try {
      botonContinuar.disabled = true;
      botonContinuar.textContent = "ENVIANDO...";

      await authReady;

      const usuario = auth.currentUser;

      if (!usuario) {
        throw new Error("No se pudo iniciar tu sesión.");
      }

      const idToken = await usuario.getIdToken();

      const respuesta = await fetch(
        "https://instaarmy-registros.armyinsta80.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`
          },
       body: JSON.stringify({
  nombre,
  pais,
  bias,
  whatsapp,
  tipo,
  codigoAnterior
})
        }
      );

      const resultado = await respuesta.json();

      if (!respuesta.ok || !resultado.ok) {
        throw new Error(
          resultado.error || "No se pudo completar el registro."
        );
      }


if (resultado.codigo) {

    await mostrarCredencialB1({
        nombre: nombre,
        pais: pais,
        bias: bias,
        codigo: resultado.codigo
    });

} else if (resultado.mensaje) {

    alert(
        `${resultado.mensaje}\n\nSiguiente código disponible: ${resultado.siguienteCodigo}`
    );

} else {

    throw new Error("No se recibió un código para tu credencial.");

}


    } catch (error) {
      console.error("Error al registrar:", error);
      alert(error.message || "Ocurrió un error al enviar tus datos.");
    } finally {
      botonContinuar.disabled = false;
      botonContinuar.textContent = "CONTINUAR";
    }
  });
}

  }
});
