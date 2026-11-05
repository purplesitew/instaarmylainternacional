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
// CONFIGURACIÓN DE STICKERS INSTA ARMY
// ==========================================

// Dimensiones originales de los PNG
const TAMANO_STICKERS = 3464;

// Sistema de coordenadas utilizado
const TAMANO_COORDENADAS = 1024;

// Convertir coordenadas automáticamente
const FACTOR_STICKERS =
    TAMANO_STICKERS / TAMANO_COORDENADAS;

// Archivos de stickers según el Bias
const ARCHIVOS_STICKERS = {
    "jhope": "./stickers-jhope.png",
    "jin": "./stickers-jin.png",
    "v": "./stickers-v-taehyung.png",
    "rm": "./stickers-rm.png",
    "ot7": "./stickers-ot7.png",
    "jungkook": "./stickers-jungkook.png",
    "jimin": "./stickers-jimin.png",
    "suga": "./stickers-suga.png"
};

// Coordenadas de los 10 stickers
const COORDENADAS_STICKERS = [
    { id: 1, x: 49, y: 39, width: 194, height: 334 },
    { id: 2, x: 331, y: 47, width: 206, height: 325 },
    { id: 3, x: 612, y: 72, width: 160, height: 275 },
    { id: 4, x: 866, y: 54, width: 134, height: 310 },
    { id: 5, x: 163, y: 402, width: 120, height: 261 },
    { id: 6, x: 431, y: 409, width: 145, height: 206 },
    { id: 7, x: 703, y: 397, width: 179, height: 231 },
    { id: 8, x: 15, y: 690, width: 449, height: 153 },
    { id: 9, x: 31, y: 861, width: 449, height: 137 },
    { id: 10, x: 568, y: 643, width: 341, height: 340 }
];
// ==========================================
// COORDENADAS INDIVIDUALES DE J-HOPE
// ==========================================

const COORDENADAS_JHOPE = [
    { id: 1, x: 65, y: 115, width: 785, height: 1195 },
    { id: 2, x: 900, y: 150, width: 880, height: 1100 },
    { id: 3, x: 1715, y: 185, width: 1020, height: 1075 },
    { id: 4, x: 2550, y: 150, width: 870, height: 1100 },
    { id: 5, x: 340, y: 1310, width: 510, height: 810 },
    { id: 6, x: 1435, y: 1405, width: 585, height: 665 },
    { id: 7, x: 2435, y: 1345, width: 755, height: 745 },
    { id: 8, x: 190, y: 2470, width: 1315, height: 315 },
    { id: 9, x: 170, y: 2905, width: 1385, height: 465 },
    { id: 10, x: 2085, y: 2275, width: 1130, height: 1115 }
];
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
      const nombreFoto = document.getElementById("nombre-foto");

if (nombreFoto) {
    nombreFoto.textContent = archivo
        ? "Foto seleccionada: " + archivo.name
        : "Ninguna fotografía seleccionada";
}

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
  
 // ==========================================
// MOSTRAR, COLOCAR Y MOVER STICKERS
// ==========================================

const selectorBiasStickers = document.getElementById("bias-stickers");
const listaStickers = document.getElementById("lista-stickers");

const imagenesStickers = {};
const stickersColocados = [];

const capaStickers = document.getElementById("capa-stickers");

let imagenStickersActiva = null;
let stickerArrastrado = null;
let desplazamientoStickerX = 0;
let desplazamientoStickerY = 0;

if (capaStickers) {
    capaStickers.width = 880;
    capaStickers.height = 1204;

    const contextoPrueba = capaStickers.getContext("2d");

    contextoPrueba.fillStyle = "red";
    contextoPrueba.fillRect(100, 100, 200, 200);

    alert("La capa de stickers sí está funcionando.");
} else {
    alert("ERROR: No se encontró la capa de stickers.");
}

// Dibujar todos los stickers colocados
function dibujarStickers() {

    if (!capaStickers) return;

    const contexto = capaStickers.getContext("2d");

    contexto.clearRect(
        0,
        0,
        capaStickers.width,
        capaStickers.height
    );

    stickersColocados.forEach((sticker) => {

        contexto.drawImage(
            sticker.imagen,
            sticker.origenX,
            sticker.origenY,
            sticker.origenAncho,
            sticker.origenAlto,
            sticker.x,
            sticker.y,
            sticker.ancho,
            sticker.alto
        );

    });

}

// Buscar un lugar inicial para cada sticker
function buscarPosicionSticker(ancho, alto) {

    const posiciones = [
        { x: 320, y: 80 },
        { x: 750, y: 80 },
        { x: 320, y: 180 },
        { x: 750, y: 180 },
        { x: 320, y: 740 },
        { x: 750, y: 740 },
        { x: 320, y: 1050 },
        { x: 750, y: 1050 }
    ];

    for (const posicion of posiciones) {

        if (
            posicion.x + ancho <= 880 &&
            posicion.y + alto <= 1204
        ) {

            const choca = stickersColocados.some((otro) => {

                return (
                    posicion.x < otro.x + otro.ancho &&
                    posicion.x + ancho > otro.x &&
                    posicion.y < otro.y + otro.alto &&
                    posicion.y + alto > otro.y
                );

            });

            if (!choca) return posicion;

        }

    }

    return null;

}

// Seleccionar un sticker de la galería
function colocarSticker(sticker, imagen) {

    const factor = TAMANO_STICKERS / TAMANO_COORDENADAS;

    const origenX = sticker.x * factor;
    const origenY = sticker.y * factor;
    const origenAncho = sticker.width * factor;
    const origenAlto = sticker.height * factor;

    // Tamaño inicial: máximo 100 píxeles
const escala = Math.min(
    225 / origenAncho,
    225 / origenAlto
);

    const ancho = origenAncho * escala;
    const alto = origenAlto * escala;

    const posicion = buscarPosicionSticker(ancho, alto);

    if (!posicion) {

        alert("Ya no hay espacio disponible para colocar otro sticker.");

        return;

    }

    stickersColocados.push({

        imagen,
        origenX,
        origenY,
        origenAncho,
        origenAlto,
        x: posicion.x,
        y: posicion.y,
        ancho,
        alto

    });

    dibujarStickers();

}

// Cargar los stickers del Bias seleccionado
if (selectorBiasStickers && listaStickers) {

    selectorBiasStickers.addEventListener("change", async () => {

        const biasSeleccionado = selectorBiasStickers.value;

        listaStickers.innerHTML = "";

        if (!biasSeleccionado) return;

        try {

            let imagen = imagenesStickers[biasSeleccionado];

            if (!imagen) {

                imagen = new Image();

                await new Promise((resolve, reject) => {

                    imagen.onload = resolve;

                    imagen.onerror = () => reject(
                        new Error("No se pudo cargar el archivo de stickers.")
                    );

                    imagen.src = ARCHIVOS_STICKERS[biasSeleccionado];
                  alert(
    "Tamaño real de J-Hope: " +
    imagen.naturalWidth + " × " +
    imagen.naturalHeight + " píxeles"
);

                });

                imagenesStickers[biasSeleccionado] = imagen;

            }

            imagenStickersActiva = imagen;

            COORDENADAS_STICKERS.slice(0, 9).forEach((sticker) => {

                const opcion = document.createElement("button");

                opcion.type = "button";
                opcion.className = "sticker-opcion";

                const miniatura = document.createElement("canvas");

                miniatura.width = 160;
                miniatura.height = 85;

                const contextoMiniatura = miniatura.getContext("2d");

                const factor = TAMANO_STICKERS / TAMANO_COORDENADAS;

                const x = sticker.x * factor;
                const y = sticker.y * factor;
                const ancho = sticker.width * factor;
                const alto = sticker.height * factor;

                const escala = Math.min(
                    150 / ancho,
                    75 / alto
                );

                const anchoFinal = ancho * escala;
                const altoFinal = alto * escala;

                contextoMiniatura.drawImage(
                    imagen,
                    x,
                    y,
                    ancho,
                    alto,
                    (160 - anchoFinal) / 2,
                    (85 - altoFinal) / 2,
                    anchoFinal,
                    altoFinal
                );

                opcion.appendChild(miniatura);

               opcion.addEventListener("click", () => {

    alert("¡Sticker seleccionado!");

    colocarSticker(sticker, imagen);

});

                listaStickers.appendChild(opcion);

            });

        } catch (error) {

            console.error("Error al mostrar stickers:", error);

            alert("No se pudieron cargar los stickers. Revisa los archivos de GitHub.");

        }

    });

}

// ==========================================
// MOVER STICKERS CON EL DEDO O EL MOUSE
// ==========================================

if (capaStickers) {

    capaStickers.addEventListener("pointerdown", (evento) => {

        const rect = capaStickers.getBoundingClientRect();

        const x = (evento.clientX - rect.left) *
            capaStickers.width / rect.width;

        const y = (evento.clientY - rect.top) *
            capaStickers.height / rect.height;

        // Buscar el sticker que está debajo del dedo
        for (let i = stickersColocados.length - 1; i >= 0; i--) {

            const sticker = stickersColocados[i];

            if (
                x >= sticker.x &&
                x <= sticker.x + sticker.ancho &&
                y >= sticker.y &&
                y <= sticker.y + sticker.alto
            ) {

                stickerArrastrado = sticker;

                desplazamientoStickerX = x - sticker.x;
                desplazamientoStickerY = y - sticker.y;

                capaStickers.setPointerCapture(evento.pointerId);

                break;

            }

        }

    });

    capaStickers.addEventListener("pointermove", (evento) => {

        if (!stickerArrastrado) return;

        const rect = capaStickers.getBoundingClientRect();

        const x = (evento.clientX - rect.left) *
            capaStickers.width / rect.width;

        const y = (evento.clientY - rect.top) *
            capaStickers.height / rect.height;

        stickerArrastrado.x = Math.max(
            0,
            Math.min(
                capaStickers.width - stickerArrastrado.ancho,
                x - desplazamientoStickerX
            )
        );

        stickerArrastrado.y = Math.max(
            0,
            Math.min(
                capaStickers.height - stickerArrastrado.alto,
                y - desplazamientoStickerY
            )
        );

        dibujarStickers();

    });

    function terminarMovimientoSticker() {

        stickerArrastrado = null;

    }

    capaStickers.addEventListener("pointerup", terminarMovimientoSticker);
    capaStickers.addEventListener("pointercancel", terminarMovimientoSticker);

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
