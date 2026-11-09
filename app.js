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
    { id: 1, x: 81, y: 115, width: 747, height: 1186 },
    { id: 2, x: 959, y: 170, width: 802, height: 1065 },
    { id: 3, x: 1760, y: 209, width: 955, height: 1026 },
    { id: 4, x: 2603, y: 180, width: 797, height: 1050 },
    { id: 5, x: 387, y: 1351, width: 375, height: 764 },
    { id: 6, x: 1441, y: 1414, width: 579, height: 636 },
    { id: 7, x: 2513, y: 1358, width: 664, height: 728 },
    { id: 8, x: 160, y: 2369, width: 1376, height: 451 },
    { id: 9, x: 177, y: 2907, width: 1368, height: 444 },
    { id: 10, x: 1249, y: 1355, width: 637, height: 638 }
];
// Coordenadas individuales de Jin (3464 × 3464)
const COORDENADAS_JIN = [
    { id: 1, x: 158, y: 137, width: 688, height: 1053 },
    { id: 2, x: 845, y: 208, width: 722, height: 897 },
    { id: 3, x: 1825, y: 162, width: 713, height: 1002 },
    { id: 4, x: 2537, y: 137, width: 927, height: 1053 },
    { id: 5, x: 446, y: 1371, width: 532, height: 725 },
    { id: 6, x: 1403, y: 1353, width: 658, height: 758 },
    { id: 7, x: 2450, y: 1383, width: 776, height: 689 },
    { id: 8, x: 179, y: 2269, width: 1535, height: 641 },
    { id: 9, x: 179, y: 2909, width: 1535, height: 456 },
    { id: 10, x: 2115, y: 2208, width: 1141, height: 1143 }
];
// Coordenadas individuales de V (Taehyung) - 3464 × 3464
const COORDENADAS_V = [
    { id: 1, x: 52, y: 137, width: 879, height: 1196 },
    { id: 2, x: 930, y: 189, width: 889, height: 1144 },
    { id: 3, x: 1885, y: 145, width: 822, height: 1204 },
    { id: 4, x: 2706, y: 224, width: 758, height: 1109 },
    { id: 5, x: 328, y: 1505, width: 503, height: 863 },
    { id: 6, x: 1366, y: 1507, width: 744, height: 860 },
    { id: 7, x: 2746, y: 1638, width: 379, height: 604 },
    { id: 8, x: 143, y: 2367, width: 1471, height: 610 },
    { id: 9, x: 143, y: 2976, width: 1471, height: 402 },
    { id: 10, x: 2252, y: 2371, width: 1060, height: 1061 }
];
// Coordenadas individuales de RM (Namjoon) - 3464 × 3464
const COORDENADAS_RM = [
    { id: 1, x: 23, y: 128, width: 642, height: 1170 },
    { id: 2, x: 739, y: 221, width: 877, height: 1077 },
    { id: 3, x: 1728, y: 138, width: 865, height: 1160 },
    { id: 4, x: 2647, y: 150, width: 723, height: 1136 },
    { id: 5, x: 201, y: 1371, width: 956, height: 722 },
    { id: 6, x: 1436, y: 1417, width: 592, height: 630 },
    { id: 7, x: 2302, y: 1331, width: 647, height: 758 },
    { id: 8, x: 158, y: 2305, width: 1314, height: 485 },
    { id: 9, x: 55, y: 2944, width: 1527, height: 471 },
    { id: 10, x: 1918, y: 2181, width: 1200, height: 1201 }
];
// Coordenadas individuales de Jimin - 3464 × 3464
const COORDENADAS_JIMIN_3464 = [
    { id: 1, x: 191, y: 101, width: 909, height: 1170 },
    { id: 2, x: 1099, y: 152, width: 683, height: 1066 },
    { id: 3, x: 1902, y: 103, width: 624, height: 1166 },
    { id: 4, x: 2657, y: 103, width: 650, height: 1166 },
    { id: 5, x: 295, y: 1417, width: 614, height: 630 },
    { id: 6, x: 1381, y: 1358, width: 702, height: 748 },
    { id: 7, x: 2552, y: 1356, width: 747, height: 744 },
    { id: 8, x: 194, y: 2261, width: 1359, height: 439 },
    { id: 9, x: 206, y: 2851, width: 1476, height: 461 },
    { id: 10, x: 2198, y: 2271, width: 1030, height: 1035 }
];
// Coordenadas individuales de SUGA - 3464 × 3464
const COORDENADAS_SUGA_3464 = [
    { id: 1, x: 262, y: 263, width: 496, height: 923 },
    { id: 2, x: 1031, y: 262, width: 659, height: 919 },
    { id: 3, x: 2029, y: 263, width: 515, height: 911 },
    { id: 4, x: 2699, y: 263, width: 694, height: 913 },
    { id: 5, x: 125, y: 1527, width: 1144, height: 525 },
    { id: 6, x: 1268, y: 1606, width: 771, height: 627 },
    { id: 7, x: 2621, y: 1310, width: 514, height: 844 },
    { id: 8, x: 162, y: 2232, width: 1669, height: 654 },
    { id: 9, x: 174, y: 2924, width: 1476, height: 463 },
    { id: 10, x: 1945, y: 2114, width: 1230, height: 1237 }
];
// Coordenadas individuales de OT7 - 3464 × 3464
const COORDENADAS_OT7_3464 = [
    { id: 1, x: 96, y: 274, width: 830, height: 806 },
    { id: 2, x: 1087, y: 284, width: 747, height: 791 },
    { id: 3, x: 1897, y: 267, width: 739, height: 814 },
    { id: 4, x: 2667, y: 262, width: 718, height: 823 },
    { id: 5, x: 120, y: 1549, width: 924, height: 287 },
    { id: 6, x: 1265, y: 1310, width: 797, height: 759 },
    { id: 7, x: 2697, y: 1331, width: 478, height: 806 },
    { id: 8, x: 148, y: 2264, width: 1622, height: 443 },
    { id: 9, x: 197, y: 2641, width: 1471, height: 653 },
    { id: 10, x: 2175, y: 2329, width: 965, height: 965 }
];
// ==========================================
// COORDENADAS DE LOS MARCOS DE FOTOGRAFÍA
// ==========================================

const COORDENADAS_MARCOS = {
    jhope: { x: 2112, y: 2291, width: 1078, height: 1080 },
    jin: { x: 2115, y: 2208, width: 1141, height: 1143 },
    v: { x: 2252, y: 2371, width: 1060, height: 1061 },
    rm: { x: 1918, y: 2181, width: 1200, height: 1201 },
    jimin: { x: 2198, y: 2271, width: 1030, height: 1035 },
    suga: { x: 1945, y: 2114, width: 1230, height: 1237 },
    ot7: { x: 2175, y: 2329, width: 965, height: 965 },
    jungkook: { x: 568, y: 643, width: 341, height: 340 }
};
// CONFIGURACIÓN DE LAS CREDENCIALES B5 Y B10
const CONFIGURACION_B5_B10 = {
    imagen: {
        width: 960,
        height: 1280
    },

    nombre: {
        centerX: 475,
        baselineY: 733,
        maxWidth: 737
    },

    bias: {
        centerX: 475,
        baselineY: 911,
        maxWidth: 737
    },
    fotografia: {
        x: 358,
        y: 156,
        width: 240,
        height: 330,
        centerX: 478,
        centerY: 321
    },
    codigoPersonal: {
        x: 20,
        y: 1090,
        width: 270,
        height: 170,
        centerX: 155,
        centerY: 1175,
        maxWidth: 270
    }
};
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
// CONTROL INDEPENDIENTE DE B5 Y B10
let credencialB5B10Activa = false;

// COPIA LIMPIA DE LA CREDENCIAL, SIN FOTOGRAFÍA
let baseCredencialSinFoto = null;

// ==========================================
// CONFIGURACIÓN EXCLUSIVA B7 Y B9
// ==========================================

const CONFIGURACION_B7_B9 = {

    width: 720,
    height: 963,

    fuente: "PiedraArmy",

codigo: {
    centerX: 451,
    baselineY: 250,
    maxWidth: 150,
    fontSize: 60,
    color: "#ffffff",
    outline: "#ff0000"
},

pais: {
    centerX: 442,
    baselineY: 390,
    maxWidth: 165,
    fontSize: 60,
    color: "#ffffff",
    outline: "#ff00a8"
},

nombre: {
    centerX: 305,
    baselineY: 605,
    maxWidth: 380,
    fontSize: 68,
    color: "#ffffff",
    outline: "#ff00a8"
},

bias: {
    centerX: 298,
    baselineY: 747,
    maxWidth: 200,
    fontSize: 54,
    color: "#ffffff",
    outline: "#ff00a8"
},
  
fotografia: {
    x: 96,
    y: 186,
    width: 158,
    height: 220
}

};
// ==========================================
// CONTROL EXCLUSIVO DE B7 Y B9
// ==========================================

let credencialB7B9Activa = false;


// ==========================================
// MOSTRAR CREDENCIAL B7 / B9
// ==========================================

async function mostrarCredencialB7B9(datos, archivoPlantilla) {

    try {

        if (
            archivoPlantilla !== "B7PLANTILLA.jpg" &&
            archivoPlantilla !== "B9PLANTILLA.jpg"
        ) {
            throw new Error("Plantilla B7/B9 no válida.");
        }

        const editor = document.getElementById("editor-credencial");
        const creador = document.getElementById("creador-credencial");
        const canvas = document.getElementById("canvas-credencial");

        if (!editor || !creador || !canvas) {
            throw new Error("No se encontró el área de la credencial.");
        }

        const contexto = canvas.getContext("2d");

        // CARGAR TIPOGRAFÍA
        await document.fonts.load('68px "PiedraArmy"');
        await document.fonts.load('32px "PiedraArmy"');

        // DIMENSIONES DEL CANVAS
        canvas.width = 960;
        canvas.height = 1280;

        const escalaX = canvas.width / CONFIGURACION_B7_B9.width;
        const escalaY = canvas.height / CONFIGURACION_B7_B9.height;

        // CARGAR PLANTILLA
        const plantilla = new Image();

        await new Promise((resolve, reject) => {

            plantilla.onload = resolve;
            plantilla.onerror = () => reject(
                new Error("No se pudo cargar la plantilla B7/B9.")
            );

            plantilla.src = "./" + archivoPlantilla;

        });

        // DIBUJAR PLANTILLA
        contexto.clearRect(0, 0, canvas.width, canvas.height);

        contexto.drawImage(
            plantilla,
            0,
            0,
            canvas.width,
            canvas.height
        );

        // ==================================
        // FUNCIÓN PARA ESCRIBIR LOS DATOS
        // ==================================

        function escribirDato(texto, configuracion, esCodigo = false) {

            if (!texto) return;

            const x = configuracion.centerX * escalaX;
            const y = configuracion.baselineY * escalaY;
            const anchoMaximo = configuracion.maxWidth * escalaX;

            let tamano = configuracion.fontSize;

            contexto.save();

            contexto.textAlign = "center";
            contexto.textBaseline = "alphabetic";
            contexto.font = `${tamano}px "PiedraArmy"`;

            while (
                contexto.measureText(texto).width > anchoMaximo &&
                tamano > 12
            ) {
                tamano--;

                contexto.font = `${tamano}px "PiedraArmy"`;
            }

            contexto.fillStyle = configuracion.color;
            contexto.strokeStyle = configuracion.outline;
            contexto.lineWidth = esCodigo ? 5 : 4;
            contexto.lineJoin = "round";

            contexto.strokeText(texto, x, y);
            contexto.fillText(texto, x, y);

            contexto.restore();
        }

        // ==================================
        // DIBUJAR LOS CUATRO CAMPOS
        // ==================================

        escribirDato(
            datos.codigo,
            CONFIGURACION_B7_B9.codigo,
            true
        );

        escribirDato(
            datos.pais,
            CONFIGURACION_B7_B9.pais
        );

        escribirDato(
            datos.nombre,
            CONFIGURACION_B7_B9.nombre
        );

        escribirDato(
            datos.bias,
            CONFIGURACION_B7_B9.bias
        );

     // ACTIVAR CONTROL B7/B9
credencialB7B9Activa = true;
credencialB5B10Activa = false;

// PREPARAR UNA BASE LIMPIA PARA LA FOTOGRAFÍA
baseCredencialSinFoto = null;

        // MOSTRAR EDITOR
        creador.classList.add("oculta");
        editor.classList.remove("oculta");

        editor.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } catch (error) {

        console.error("Error al mostrar B7/B9:", error);
        alert(error.message);

    }

}
// =====================================
// GENERAR CREDENCIALES B5 Y B10
// =====================================

async function mostrarCredencialB5B10(datos, archivoPlantilla) {
  
      credencialB5B10Activa = true;

    if (
        archivoPlantilla !== "B5PLANTILLA.jpeg" &&
        archivoPlantilla !== "B10PLANTILLA.jpeg"
    ) {
        throw new Error("Plantilla B5 o B10 no válida.");
    }

    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !canvas) {
        throw new Error("No se encontró el editor de la credencial.");
    }

    const contexto = canvas.getContext("2d");

    // CARGAR FUENTE PIEDRA
    await document.fonts.load('68px "PiedraArmy"');
    await document.fonts.load('32px "PiedraArmy"');

    // CARGAR PLANTILLA
    const plantilla = new Image();
    plantilla.src = "./" + archivoPlantilla;

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar " + archivoPlantilla)
        );
    });

    canvas.width = CONFIGURACION_B5_B10.imagen.width;
    canvas.height = CONFIGURACION_B5_B10.imagen.height;

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ESTILO GENERAL DE LOS DATOS
    contexto.textAlign = "center";
    contexto.textBaseline = "alphabetic";
    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "transparent";
    contexto.lineWidth = 0;

    // FUNCIÓN PARA AJUSTAR EL TAMAÑO DEL TEXTO
    function escribirTextoAjustado(texto, centroX, baselineY, anchoMaximo) {

        let tamaño = 68;

        contexto.font = `${tamaño}px "PiedraArmy"`;

        while (
            contexto.measureText(texto).width > anchoMaximo &&
            tamaño > 30
        ) {
            tamaño--;
            contexto.font = `${tamaño}px "PiedraArmy"`;
        }

        contexto.fillText(texto, centroX, baselineY);
    }

    // NOMBRE
    escribirTextoAjustado(
        datos.nombre,
        CONFIGURACION_B5_B10.nombre.centerX,
        CONFIGURACION_B5_B10.nombre.baselineY,
        CONFIGURACION_B5_B10.nombre.maxWidth
    );

    // BIAS
    escribirTextoAjustado(
        datos.bias,
        CONFIGURACION_B5_B10.bias.centerX,
        CONFIGURACION_B5_B10.bias.baselineY,
        CONFIGURACION_B5_B10.bias.maxWidth
    );

    // CÓDIGO PERSONAL: BLANCO CON BORDE ROJO
    const zonaCodigo = CONFIGURACION_B5_B10.codigoPersonal;

    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.font = '32px "PiedraArmy"';
    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "#ff0000";
    contexto.lineWidth = 5;
    contexto.lineJoin = "round";

    contexto.strokeText(
        datos.codigo,
        zonaCodigo.centerX,
        zonaCodigo.centerY,
        zonaCodigo.maxWidth
    );

    contexto.fillText(
        datos.codigo,
        zonaCodigo.centerX,
        zonaCodigo.centerY,
        zonaCodigo.maxWidth
    );

    // MOSTRAR EDITOR
    if (creador) {
        creador.classList.add("oculta");
    }

    editor.classList.remove("oculta");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.mostrarCredencialB5B10 = mostrarCredencialB5B10;

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
// DIBUJAR MARCO SOBRE LA FOTOGRAFÍA
// ==========================================

function dibujarMarcoFoto(contexto) {

    if (!marcoSeleccionado) return;

    contexto.drawImage(
        marcoSeleccionado.imagen,
        marcoSeleccionado.origenX,
        marcoSeleccionado.origenY,
        marcoSeleccionado.origenAncho,
        marcoSeleccionado.origenAlto,
        marcoSeleccionado.x,
        marcoSeleccionado.y,
        marcoSeleccionado.ancho,
        marcoSeleccionado.alto
    );
}

  // ==========================================
// FOTOGRAFÍA EXCLUSIVA B5 Y B10
// ==========================================

function dibujarFotografiaB5B10(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");

    const x = 358;
    const y = 156;
    const ancho = 240;
    const alto = 330;

    // Ajustar sin deformar y sin sobresalir
    const escala = Math.min(
        ancho / imagen.width,
        alto / imagen.height
    );

    const anchoImagen = imagen.width * escala;
    const altoImagen = imagen.height * escala;

    const desplazamientoX = (ancho - anchoImagen) / 2;
    const desplazamientoY = (alto - altoImagen) / 2;

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
}
// ==========================================
// FOTOGRAFÍA EXCLUSIVA B7 Y B9
// ==========================================

function dibujarFotografiaB7B9(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");

    const foto = CONFIGURACION_B7_B9.fotografia;

    const escalaX = canvas.width / CONFIGURACION_B7_B9.width;
    const escalaY = canvas.height / CONFIGURACION_B7_B9.height;

    const x = foto.x * escalaX;
    const y = foto.y * escalaY;
    const ancho = foto.width * escalaX;
    const alto = foto.height * escalaY;

    // AJUSTAR FOTOGRAFÍA SIN DEFORMAR
    const escala = Math.max(
        ancho / imagen.width,
        alto / imagen.height
    );

    const anchoImagen = imagen.width * escala;
    const altoImagen = imagen.height * escala;

    const desplazamientoX = (ancho - anchoImagen) / 2;
    const desplazamientoY = (alto - altoImagen) / 2;

    contexto.save();

    // RECORTAR EXACTAMENTE AL ÁREA INTERIOR DEL CUADRO ROSA
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
}

// ==========================================
// FOTOGRAFÍA EXCLUSIVA B1
// ==========================================

function dibujarFotografiaB1(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");

    const x = 25;
    const y = 209;
    const ancho = 273;
    const alto = 365;

    const escala = Math.max(
        ancho / imagen.width,
        alto / imagen.height
    );

    const anchoImagen = imagen.width * escala;
    const altoImagen = imagen.height * escala;

    const desplazamientoX = (ancho - anchoImagen) / 2;
    const desplazamientoY = (alto - altoImagen) / 2;

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
}
  
// ==========================================
// COLOCAR Y REEMPLAZAR FOTOGRAFÍA
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

            // GUARDAR LA CREDENCIAL LIMPIA LA PRIMERA VEZ
            if (!baseCredencialSinFoto) {

                baseCredencialSinFoto = contexto.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

            } else {

                // RESTAURAR LA CREDENCIAL SIN LA FOTO ANTERIOR
                contexto.putImageData(
                    baseCredencialSinFoto,
                    0,
                    0
                );

            }

          // COLOCAR LA NUEVA FOTOGRAFÍA
if (credencialB7B9Activa) {

    dibujarFotografiaB7B9(imagen);

} else if (credencialB5B10Activa) {

    dibujarFotografiaB5B10(imagen);

} else {

    dibujarFotografiaB1(imagen);

}

            URL.revokeObjectURL(urlFoto);
        };

        imagen.onerror = () => {
            URL.revokeObjectURL(urlFoto);
            alert("No se pudo cargar la fotografía.");
        };

        imagen.src = urlFoto;

    });

}
 // ==========================================
// MOSTRAR, COLOCAR Y MOVER STICKERS
// ==========================================

const selectorBiasStickers = document.getElementById("bias-stickers");
const listaStickers = document.getElementById("lista-stickers");
  const btnMarcoFoto = document.getElementById("btn-marco-foto");
const listaMarcos = document.getElementById("lista-marcos");

let marcoSeleccionado = null;

const imagenesStickers = {};
const stickersColocados = [];
  // Cada zona solo puede tener un sticker
function buscarZonaLibre() {
    return ZONAS_STICKERS.find(zona =>
        !stickersColocados.some(sticker => sticker.zonaId === zona.id)
    );
}
  // ==========================================
// TRES ZONAS PERMITIDAS PARA LOS STICKERS
// ==========================================

const ZONAS_STICKERS = [
    {
        id: 1,
        centroX: 361,
        centroY: 320,
        radio: 100
    },
    {
       id: 2,
centroX: 790,
centroY: 623,
radio: 100
    },
    {
        id: 3,
        centroX: 356,
        centroY: 860,
        radio: 100
    }
];
  

const capaStickers = document.getElementById("capa-stickers");

let imagenStickersActiva = null;
let stickerArrastrado = null;
let desplazamientoStickerX = 0;
let desplazamientoStickerY = 0;
  // Control para cambiar el tamaño con dos dedos
let puntosToque = new Map();
let distanciaInicialPinza = 0;
let tamanoInicialPinza = 0;
let stickerEnPinza = null;
  // Sticker seleccionado para poder eliminarlo
let stickerSeleccionado = null;

if (capaStickers) {
    capaStickers.width = 880;
    capaStickers.height = 1204;
} else {
    console.error("No se encontró la capa de stickers.");
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
dibujarMarcoFoto(contexto);
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

    // Buscar el primer círculo disponible
    const zona = buscarZonaLibre();

    if (!zona) {
        alert("Ya colocaste tus 3 stickers. Elimina uno para elegir otro. 💜");
        return;
    }

    // Reconocer el tamaño de coordenadas de cada imagen
    const usaCoordenadas3464 =
        imagen === imagenesStickers.jhope ||
        imagen === imagenesStickers.jin ||
        imagen === imagenesStickers.v ||
        imagen === imagenesStickers.rm ||
        imagen === imagenesStickers.jimin ||
        imagen === imagenesStickers.suga ||
        imagen === imagenesStickers.ot7;

    const escalaX = imagen.naturalWidth /
        (usaCoordenadas3464 ? 3464 : TAMANO_COORDENADAS);

    const escalaY = imagen.naturalHeight /
        (usaCoordenadas3464 ? 3464 : TAMANO_COORDENADAS);

    const origenX = sticker.x * escalaX;
    const origenY = sticker.y * escalaY;
    const origenAncho = sticker.width * escalaX;
    const origenAlto = sticker.height * escalaY;

    // Mantener proporciones y ajustar al círculo
    const mitadDiagonal = Math.sqrt(
        Math.pow(origenAncho / 2, 2) +
        Math.pow(origenAlto / 2, 2)
    );

    const escala = Math.min(
        225 / origenAncho,
        225 / origenAlto,
        (zona.radio * 1.0) / mitadDiagonal
    );

    const ancho = origenAncho * escala;
    const alto = origenAlto * escala;

    // Colocar en el centro del círculo
    const x = zona.centroX - ancho / 2;
    const y = zona.centroY - alto / 2;

    stickersColocados.push({
        imagen,
        origenX,
        origenY,
        origenAncho,
        origenAlto,
        x,
        y,
        ancho,
        alto,
        zonaId: zona.id
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

});

if (biasSeleccionado === "jhope") {
    alert(
        "Tamaño real de J-Hope: " +
        imagen.naturalWidth + " × " +
        imagen.naturalHeight + " píxeles"
    );
}

imagenesStickers[biasSeleccionado] = imagen;

}

            imagenStickersActiva = imagen;

let coordenadasActuales;

if (biasSeleccionado === "jhope") {
    coordenadasActuales = COORDENADAS_JHOPE.slice(0, 9);
} else if (biasSeleccionado === "jin") {
    coordenadasActuales = COORDENADAS_JIN.slice(0, 9);
} else if (biasSeleccionado === "v") {
    coordenadasActuales = COORDENADAS_V.slice(0, 9);
} else if (biasSeleccionado === "jimin") {
    coordenadasActuales = COORDENADAS_JIMIN_3464.slice(0, 9);
} else if (biasSeleccionado === "suga") {
    coordenadasActuales = COORDENADAS_SUGA_3464.slice(0, 9);
} else if (biasSeleccionado === "ot7") {
    coordenadasActuales = COORDENADAS_OT7_3464.slice(0, 9);
} else if (biasSeleccionado === "rm") {
    coordenadasActuales = COORDENADAS_RM.slice(0, 9);
} else if (biasSeleccionado === "jungkook") {
    coordenadasActuales = COORDENADAS_STICKERS.slice(0, 9);
} else {
    coordenadasActuales = COORDENADAS_STICKERS.slice(0, 9);
}
coordenadasActuales.forEach((sticker) => {

                const opcion = document.createElement("button");

                opcion.type = "button";
                opcion.className = "sticker-opcion";

                const miniatura = document.createElement("canvas");

                miniatura.width = 160;
                miniatura.height = 85;

                const contextoMiniatura = miniatura.getContext("2d");

         const usaCoordenadas3464 =
    biasSeleccionado === "jhope" ||
    biasSeleccionado === "jin" ||
    biasSeleccionado === "v" ||
    biasSeleccionado === "rm" ||
    biasSeleccionado === "jimin" ||
    biasSeleccionado === "suga" ||
    biasSeleccionado === "ot7";
const escalaX = imagen.naturalWidth /
    (usaCoordenadas3464 ? 3464 : TAMANO_COORDENADAS);

const escalaY = imagen.naturalHeight /
    (usaCoordenadas3464 ? 3464 : TAMANO_COORDENADAS);

const x = sticker.x * escalaX;
const y = sticker.y * escalaY;
const ancho = sticker.width * escalaX;
const alto = sticker.height * escalaY;

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

    alert(
        "Tamaño real de la imagen: " +
        imagen.naturalWidth + " × " +
        imagen.naturalHeight
    );

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
// GALERÍA DE MARCOS PARA FOTOGRAFÍAS
// ==========================================

if (btnMarcoFoto && listaMarcos) {

    btnMarcoFoto.addEventListener("click", async () => {

        // Mostrar u ocultar la galería
        if (listaMarcos.children.length > 0) {
            listaMarcos.style.display =
                listaMarcos.style.display === "none" ? "flex" : "none";
            return;
        }

        listaMarcos.innerHTML = "Cargando marcos...";

        const nombresMarcos = [
            "jhope", "jin", "v", "rm",
            "jimin", "suga", "ot7", "jungkook"
        ];

        listaMarcos.innerHTML = "";

        for (const nombre of nombresMarcos) {

            try {

                let imagen = imagenesStickers[nombre];

                if (!imagen) {
                    imagen = new Image();

                    await new Promise((resolve, reject) => {
                        imagen.onload = resolve;
                        imagen.onerror = reject;
                        imagen.src = ARCHIVOS_STICKERS[nombre];
                    });

                    imagenesStickers[nombre] = imagen;
                }

                const marco = COORDENADAS_MARCOS[nombre];

                const escalaCoordenadas =
                    imagen.naturalWidth /
                    (nombre === "jungkook" ? 1024 : 3464);

                const opcion = document.createElement("button");
                opcion.type = "button";
                opcion.className = "sticker-opcion";

                const miniatura = document.createElement("canvas");
                miniatura.width = 120;
                miniatura.height = 120;

                const contextoMiniatura = miniatura.getContext("2d");

                contextoMiniatura.drawImage(
                    imagen,
                    marco.x * escalaCoordenadas,
                    marco.y * escalaCoordenadas,
                    marco.width * escalaCoordenadas,
                    marco.height * escalaCoordenadas,
                    5, 5, 110, 110
                );

                opcion.appendChild(miniatura);

                opcion.addEventListener("click", () => {

                    marcoSeleccionado = {
                        imagen: imagen,
                        origenX: marco.x * escalaCoordenadas,
                        origenY: marco.y * escalaCoordenadas,
                        origenAncho: marco.width * escalaCoordenadas,
                        origenAlto: marco.height * escalaCoordenadas,
         ...(plantillaSeleccionada === "B5.jpeg" ||
   plantillaSeleccionada === "B10.jpeg" ? {

    // MARCOS B5 Y B10
    x: 358 * (capaStickers.width / 960),
    y: 156 * (capaStickers.height / 1280),
    ancho: 240 * (capaStickers.width / 960),
    alto: 330 * (capaStickers.height / 1280)

} : plantillaSeleccionada === "B1.jpeg" ? {

    // MARCO EXCLUSIVO B1
    x: 25 * (capaStickers.width / 960),
    y: 209 * (capaStickers.height / 1280),
    ancho: 276 * (capaStickers.width / 960),
    alto: 377 * (capaStickers.height / 1280)

} : (
    plantillaSeleccionada === "B7.jpeg" ||
    plantillaSeleccionada === "B9.jpeg"
) ? {

// MARCOS EXCLUSIVOS B7 Y B9
(() => {

    const canvasFoto = document.getElementById("canvas-credencial");

    const rectFoto = canvasFoto.getBoundingClientRect();
    const rectCapa = capaStickers.getBoundingClientRect();

    const foto = CONFIGURACION_B7_B9.fotografia;

    const escalaX = canvasFoto.width / CONFIGURACION_B7_B9.width;
    const escalaY = canvasFoto.height / CONFIGURACION_B7_B9.height;

    const xFoto = foto.x * escalaX;
    const yFoto = foto.y * escalaY;

    const anchoFoto = foto.width * escalaX;
    const altoFoto = foto.height * escalaY;

    return {

        x: (
            rectFoto.left - rectCapa.left +
            xFoto * rectFoto.width / canvasFoto.width
        ) * capaStickers.width / rectCapa.width,

        y: (
            rectFoto.top - rectCapa.top +
            yFoto * rectFoto.height / canvasFoto.height
        ) * capaStickers.height / rectCapa.height,

        ancho: anchoFoto *
            rectFoto.width / canvasFoto.width *
            capaStickers.width / rectCapa.width,

        alto: altoFoto *
            rectFoto.height / canvasFoto.height *
            capaStickers.height / rectCapa.height

    };

})()

} : nombre === "suga" ? {

    // MARCO ESPECIAL SUGA
    x: -65,
    y: 135,
    ancho: 326,
    alto: 445

} : {

    // RESTO DE CREDENCIALES: SIN CAMBIOS
    x: 25,
    y: 209,
    ancho: 276,
    alto: 377

})
};
                    dibujarStickers();

                    listaMarcos.style.display = "none";
                });

                listaMarcos.appendChild(opcion);

            } catch (error) {
                console.error("Error al cargar el marco:", nombre, error);
            }
        }

        listaMarcos.style.display = "flex";
    });
}
if (capaStickers) {

    capaStickers.addEventListener("pointerdown", (evento) => {

        const rect = capaStickers.getBoundingClientRect();

        const x = (evento.clientX - rect.left) *
            capaStickers.width / rect.width;

        const y = (evento.clientY - rect.top) *
            capaStickers.height / rect.height;

        puntosToque.set(evento.pointerId, { x, y });

        // Primer dedo: seleccionar el sticker
        if (puntosToque.size === 1) {

            stickerArrastrado = null;
          stickerSeleccionado = null;

            for (let i = stickersColocados.length - 1; i >= 0; i--) {

                const sticker = stickersColocados[i];

                if (
                    x >= sticker.x &&
                    x <= sticker.x + sticker.ancho &&
                    y >= sticker.y &&
                    y <= sticker.y + sticker.alto
                ) {

                    stickerArrastrado = sticker;
                  stickerSeleccionado = sticker;

                    desplazamientoStickerX = x - sticker.x;
                    desplazamientoStickerY = y - sticker.y;

                    break;
                }
            }
        }

        // Segundo dedo: comenzar a cambiar el tamaño
        if (puntosToque.size === 2 && stickerArrastrado) {

            const puntos = Array.from(puntosToque.values());

            const dx = puntos[1].x - puntos[0].x;
            const dy = puntos[1].y - puntos[0].y;

            distanciaInicialPinza = Math.sqrt(dx * dx + dy * dy);

            tamanoInicialPinza = stickerArrastrado.ancho;

            stickerEnPinza = stickerArrastrado;
        }

        capaStickers.setPointerCapture(evento.pointerId);

    });

    capaStickers.addEventListener("pointermove", (evento) => {

        if (!puntosToque.has(evento.pointerId)) return;

        const rect = capaStickers.getBoundingClientRect();

        const x = (evento.clientX - rect.left) *
            capaStickers.width / rect.width;

        const y = (evento.clientY - rect.top) *
            capaStickers.height / rect.height;

        puntosToque.set(evento.pointerId, { x, y });

        // CAMBIAR TAMAÑO CON DOS DEDOS
        if (puntosToque.size === 2 && stickerEnPinza) {

            const puntos = Array.from(puntosToque.values());

            const dx = puntos[1].x - puntos[0].x;
            const dy = puntos[1].y - puntos[0].y;

            const distanciaActual = Math.sqrt(dx * dx + dy * dy);

            if (distanciaInicialPinza <= 0) return;

            const zona = ZONAS_STICKERS.find(
                zona => zona.id === stickerEnPinza.zonaId
            );

            if (!zona) return;

            const escalaSolicitada =
                distanciaActual / distanciaInicialPinza;

            const centroX = stickerEnPinza.x +
                stickerEnPinza.ancho / 2;

            const centroY = stickerEnPinza.y +
                stickerEnPinza.alto / 2;

            const distanciaCentro = Math.sqrt(
                Math.pow(centroX - zona.centroX, 2) +
                Math.pow(centroY - zona.centroY, 2)
            );

       const diagonalMaxima = Math.max(
    1,
   2 * (zona.radio * 1.50 - distanciaCentro)
);

const proporcionAlto =
    stickerEnPinza.origenAlto /
    stickerEnPinza.origenAncho;

const diagonalPorUnidad = Math.sqrt(
    1 + Math.pow(proporcionAlto, 2)
);

const anchoMaximo =
    diagonalMaxima / diagonalPorUnidad;

const escalaMaxima =
    anchoMaximo / tamanoInicialPinza;

const escalaFinal = Math.min(
    escalaMaxima,
    Math.max(0.25, escalaSolicitada)
);

            stickerEnPinza.ancho =
                tamanoInicialPinza * escalaFinal;

            stickerEnPinza.alto =
                (stickerEnPinza.origenAlto /
                stickerEnPinza.origenAncho) *
                stickerEnPinza.ancho;

            stickerEnPinza.x =
                centroX - stickerEnPinza.ancho / 2;

            stickerEnPinza.y =
                centroY - stickerEnPinza.alto / 2;

            dibujarStickers();

            return;
        }

        // MOVER CON UN SOLO DEDO
        if (puntosToque.size === 1 && stickerArrastrado) {

            const zona = ZONAS_STICKERS.find(
                zona => zona.id === stickerArrastrado.zonaId
            );

            if (!zona) return;

            const mitadDiagonal = Math.sqrt(
                Math.pow(stickerArrastrado.ancho / 2, 2) +
                Math.pow(stickerArrastrado.alto / 2, 2)
            );

            const radioMovimiento = (zona.radio * 1.5) - mitadDiagonal;

            let centroX = x - desplazamientoStickerX +
                stickerArrastrado.ancho / 2;

            let centroY = y - desplazamientoStickerY +
                stickerArrastrado.alto / 2;

            const diferenciaX = centroX - zona.centroX;
            const diferenciaY = centroY - zona.centroY;

            const distancia = Math.sqrt(
                diferenciaX * diferenciaX +
                diferenciaY * diferenciaY
            );

            if (distancia > radioMovimiento) {

                const factor = radioMovimiento / distancia;

                centroX = zona.centroX + diferenciaX * factor;
                centroY = zona.centroY + diferenciaY * factor;
            }

            stickerArrastrado.x =
                centroX - stickerArrastrado.ancho / 2;

            stickerArrastrado.y =
                centroY - stickerArrastrado.alto / 2;

            dibujarStickers();
        }

    });

    function terminarMovimientoSticker(evento) {

        puntosToque.delete(evento.pointerId);

        stickerEnPinza = null;
        stickerArrastrado = null;

        distanciaInicialPinza = 0;
        tamanoInicialPinza = 0;

    }

    capaStickers.addEventListener("pointerup", terminarMovimientoSticker);
    capaStickers.addEventListener("pointercancel", terminarMovimientoSticker);

}
  // ==========================================
// BOTÓN PARA QUITAR STICKERS
// ==========================================

const btnQuitarSticker = document.createElement("button");

btnQuitarSticker.type = "button";
btnQuitarSticker.textContent = "QUITAR STICKER";
btnQuitarSticker.disabled = true;

btnQuitarSticker.style.display = "block";
btnQuitarSticker.style.margin = "12px auto";
btnQuitarSticker.style.padding = "12px 25px";
btnQuitarSticker.style.borderRadius = "20px";
btnQuitarSticker.style.border = "none";
btnQuitarSticker.style.background = "#6a0dad";
btnQuitarSticker.style.color = "white";
btnQuitarSticker.style.fontWeight = "bold";
btnQuitarSticker.style.cursor = "pointer";

document.getElementById("contenedor-credencial")
    .after(btnQuitarSticker);
  // Activar el botón cuando se seleccione un sticker
capaStickers.addEventListener("pointerdown", () => {

    setTimeout(() => {
        btnQuitarSticker.disabled = !stickerSeleccionado;

    }, 0);

});

// Eliminar el sticker seleccionado
btnQuitarSticker.addEventListener("click", () => {

    if (!stickerSeleccionado) return;

    const indice = stickersColocados.indexOf(stickerSeleccionado);

    if (indice !== -1) {

        stickersColocados.splice(indice, 1);

        stickerSeleccionado = null;
        stickerArrastrado = null;

        dibujarStickers();

        btnQuitarSticker.disabled = true;
    }

});

 // =====================================
// EDITAR CREDENCIAL SIN REGISTRO
// =====================================

const btnEditarCredencial = document.getElementById("btnEditarCredencial");

if (btnEditarCredencial) {
    btnEditarCredencial.addEventListener("click", async () => {

        const opcion = prompt(
            "¿Qué credencial deseas probar?\n\n" +
            "Escribe el número:\n\n" +
            "1 - B1\n" +
            "2 - B5\n" +
            "3 - B10\n" +
            "4 - B7\n" +
            "5 - B9"
        );

        if (opcion === null) return;

        try {

            const datosPrueba = {
                nombre: "ARMY",
                pais: "MÉXICO",
                bias: "JUNGKOOK",
                codigo: "PRUEBA-" + opcion
            };

            if (opcion === "1") {

                await mostrarCredencialB1(datosPrueba);

            } else if (opcion === "2") {

                await mostrarCredencialB5B10(
                    datosPrueba,
                    "B5PLANTILLA.jpeg"
                );

            } else if (opcion === "3") {

                await mostrarCredencialB5B10(
                    datosPrueba,
                    "B10PLANTILLA.jpeg"
                );

            } else if (opcion === "4") {

                await mostrarCredencialB7B9(
                    datosPrueba,
                    "B7PLANTILLA.jpg"
                );

            } else if (opcion === "5") {

                await mostrarCredencialB7B9(
                    datosPrueba,
                    "B9PLANTILLA.jpg"
                );

            } else {

                alert("Opción no válida. Inténtalo de nuevo.");

            }

        } catch (error) {
            console.error("Error al probar la credencial:", error);
            alert(error.message);
        }

    });
}
 // =====================================
// SECUENCIA DE INICIO Y SALUDO DE RM
// =====================================

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaSaludo = document.getElementById("pantalla-saludo");
const aplicacion = document.getElementById("aplicacion");
const btnContinuarSaludo = document.getElementById("btnContinuarSaludo");
const sonidoSaludo = document.getElementById("sonidoSaludo");

let sonidoSaludoIniciado = false;

// Primero aparece la imagen de inicio durante 5 segundos
setTimeout(() => {

    // Ocultar la imagen de inicio
    if (pantallaInicio) {
        pantallaInicio.style.display = "none";
    }

    // Mostrar el saludo de RM
    if (pantallaSaludo) {
        pantallaSaludo.classList.remove("oculta");
    }

    // Intentar reproducir el sonido automáticamente
    if (sonidoSaludo) {
        sonidoSaludo.play()
            .then(() => {
                sonidoSaludoIniciado = true;
            })
            .catch(() => {
                sonidoSaludoIniciado = false;
            });
    }

}, 5000);


// Al pulsar CONTINUAR
if (btnContinuarSaludo) {

    btnContinuarSaludo.addEventListener("click", () => {

        // Si el sonido no pudo reproducirse automáticamente,
        // intentar reproducirlo al tocar el botón
        if (!sonidoSaludoIniciado && sonidoSaludo) {
            sonidoSaludo.play()
                .then(() => {
                    sonidoSaludoIniciado = true;
                })
                .catch(() => {
                    console.log("No se pudo reproducir el sonido.");
                });
        }

        // Iniciar la animación de salida de RM
        pantallaSaludo.classList.add("saliendo");

        // Esperar a que termine la animación
        setTimeout(() => {

            pantallaSaludo.classList.add("oculta");
            pantallaSaludo.classList.remove("saliendo");

            // Mostrar el menú de credenciales
            aplicacion.classList.remove("oculta");

        }, 1000);

    });

}

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

  baseCredencialSinFoto = null;
  
  // Desactivar la función exclusiva de B5 y B10
  credencialB5B10Activa = false;

  // Guardar la plantilla seleccionada
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

    const datosCredencial = {
        nombre: nombre,
        pais: pais,
        bias: bias,
        codigo: resultado.codigo
    };

    if (plantillaSeleccionada === "B5.jpeg") {

        await mostrarCredencialB5B10(
            datosCredencial,
            "B5PLANTILLA.jpeg"
        );

    } else if (plantillaSeleccionada === "B10.jpeg") {

        await mostrarCredencialB5B10(
            datosCredencial,
            "B10PLANTILLA.jpeg"
        );

    } else {

        await mostrarCredencialB1(datosCredencial);

    }

} else if (resultado.mensaje) {

    alert(
        `${resultado.mensaje}\n\nSiguiente código disponible: ${resultado.siguienteCodigo}`
    );

} else {

    throw new Error("No se recibió un código para tu credencial.");

}
    } finally {
      botonContinuar.disabled = false;
      botonContinuar.textContent = "CONTINUAR";
    }
  });
}

  }
});
