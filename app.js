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


const ARCHIVOS_STICKERS = {
    "jhope": "./stickerjhope.png",
    "jin": "./stickerjin.png",
    "v": "./stickerv.png",
    "rm": "./stickerrm.png",
    "ot7": "./stickerot7.png",
    "jungkook": "./stickerjungkook.png",
    "jimin": "./stickerjimin.png",
    "suga": "./stickersuga.png"
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
 // STICKERS NUEVOS DE JUNGKOOK
 // Archivo: stickerjungkook.png
 // Tamaño original: 2047 x 2047
 // ==========================================

 const COORDENADAS_JUNGKOOK_NUEVOS = [

     // 1. Jungkook saltando
     { id: 1, x: 200, y: 110, width: 545, height: 825 },

     // 2. Jungkook con ropa oscura
     { id: 2, x: 975, y: 260, width: 530, height: 690 },

     // 3. Jungkook con flores
     { id: 3, x: 1625, y: 120, width: 320, height: 815 },

     // 4. Jungkook sin camisa
     { id: 4, x: 65, y: 1185, width: 540, height: 780 },

     // 5. Peluche de Jungkook
     { id: 5, x: 565, y: 960, width: 310, height: 440 },

     // 6. Cooky rosa
     { id: 6, x: 1035, y: 970, width: 350, height: 430 },

     // 7. Cooky Insta Army
     { id: 7, x: 1570, y: 940, width: 430, height: 420 },

     // 8. Firma de Jungkook
     { id: 8, x: 640, y: 1600, width: 600, height: 310 },

     // 9. Nombre Jeon Jungkook
     { id: 9, x: 1240, y: 1570, width: 770, height: 350 }

 ];


 // ==========================================
 // STICKERS NUEVOS DE RM
 // Archivo: stickerrm.png
 // ==========================================


const COORDENADAS_RM_NUEVOS = [

    // 1. RM con ropa deportiva
    { id: 1, x: 425, y: 122, width: 240, height: 830 },

    // 2. RM vestido de negro
    { id: 2, x: 1038, y: 162, width: 415, height: 805 },

    // 3. RM con chaleco negro
    { id: 3, x: 1648, y: 137, width: 262, height: 752 },

    // 4. RM vestido de blanco
    { id: 4, x: 147, y: 1218, width: 380, height: 740 },

    // 5. Koya acostado
    { id: 5, x: 438, y: 1030, width: 440, height: 315 },

    // 6. Muñeco de RM
    { id: 6, x: 1109, y: 1026, width: 258, height: 323 },

    // 7. Koya azul
    { id: 7, x: 1505, y: 1010, width: 456, height: 355 },

    // 8. Firma de RM
    { id: 8, x: 620, y: 1545, width: 555, height: 335 },

    // 9. Nombre Kim Namjoon
    { id: 9, x: 1240, y: 1580, width: 805, height: 305 }

];


 // ==========================================
 // STICKERS NUEVOS DE OT7
 // Archivo: stickerot7.png
 // Dimensiones: 1097 x 1097
 // ==========================================

 const COORDENADAS_OT7_NUEVOS = [

     // 1. BTS fotografía grupal
     { id: 1, x: 135, y: 83, width: 325, height: 195 },

     // 2. BTS vestidos de traje
     { id: 2, x: 597, y: 70, width: 350, height: 250 },

     // 3. BTS bailando
     { id: 3, x: 136, y: 360, width: 352, height: 280 },

     // 4. BTS versión miniatura
     { id: 4, x: 499, y: 455, width: 220, height: 130 },

     // 5. Personajes BT21
     { id: 5, x: 770, y: 408, width: 175, height: 170 },

     // 6. Collage fotográfico BTS
     { id: 6, x: 115, y: 715, width: 255, height: 360 },

     // 7. Ballena morada
     { id: 7, x: 763, y: 843, width: 200, height: 120 }

 ];


 // ==========================================
 // STICKERS NUEVOS DE J-HOPE
 // Archivo: stickerjhope.png
 // Dimensiones: 1462 x 1462
 // ==========================================

 const COORDENADAS_JHOPE_NUEVOS = [

     // 1. J-Hope con traje negro
     { id: 1, x: 220, y: 80, width: 340, height: 570 },

     // 2. J-Hope vestido de gris
     { id: 2, x: 735, y: 95, width: 270, height: 555 },

     // 3. J-Hope con ropa roja oscura
     { id: 3, x: 1080, y: 55, width: 340, height: 600 },

     // 4. J-Hope haciendo corazón
     { id: 4, x: 75, y: 795, width: 290, height: 650 },

     // 5. Mang de BT21
     { id: 5, x: 340, y: 690, width: 290, height: 310 },

     // 6. J-Hope haciendo corazón de pie
     { id: 6, x: 745, y: 675, width: 210, height: 355 },

     // 7. Muñeco de J-Hope con Mang
     { id: 7, x: 1090, y: 690, width: 330, height: 300 },

     // 8. Firma de J-Hope
     { id: 8, x: 455, y: 1110, width: 390, height: 290 },

     // 9. Nombre Jung Hoseok
     { id: 9, x: 940, y: 1130, width: 500, height: 250 }

 ];

 
const COORDENADAS_V_NUEVOS = [

    // 1. V agachado
    { id: 1, x: 190, y: 90, width: 250, height: 395 },

    // 2. V con saco café
    { id: 2, x: 495, y: 83, width: 205, height: 395 },

    // 3. V saltando
    { id: 3, x: 711, y: 44, width: 378, height: 460 },

    // 4. V con camiseta negra
    { id: 4, x: 68, y: 605, width: 222, height: 492 },

    // 5. Tata corazón
    { id: 5, x: 290, y: 575, width: 215, height: 200 },

    // 6. Muñeco con corazón rojo
    { id: 6, x: 532, y: 543, width: 215, height: 195 },

    // 7. Carita de V con corazón
    { id: 7, x: 802, y: 557, width: 215, height: 195 },

    // 8. Firma de V
    { id: 8, x: 400, y: 930, width: 305, height: 165 },

    // 9. Nombre Kim Taehyung
    { id: 9, x: 714, y: 875, width: 355, height: 155 }

];


 // ==========================================
 // STICKERS NUEVOS DE JIMIN
 // Archivo: stickerjimin.png
 // ==========================================

 const COORDENADAS_JIMIN_NUEVOS = [

     // 1. Jimin con chaqueta beige
     { id: 1, x: 220, y: 70, width: 220, height: 520 },

     // 2. Jimin con ropa clara
     { id: 2, x: 570, y: 110, width: 250, height: 500 },

     // 3. Jimin vestido de negro
     { id: 3, x: 950, y: 80, width: 290, height: 500 },

     // 4. Jimin con mezclilla
     { id: 4, x: 65, y: 745, width: 280, height: 495 },

     // 5. Chimmy asomándose
     { id: 5, x: 285, y: 620, width: 280, height: 245 },

     // 6. Muñeco de Jimin
     { id: 6, x: 655, y: 620, width: 225, height: 245 },

     // 7. Chimmy pequeño
     { id: 7, x: 965, y: 630, width: 250, height: 240 },

     // 8. Firma de Jimin
     { id: 8, x: 420, y: 930, width: 320, height: 230 },

     // 9. Nombre Park Jimin
     { id: 9, x: 845, y: 1000, width: 390, height: 200 }

 ];

 // ==========================================
 // STICKERS NUEVOS DE JIN
 // Archivo: stickerjin.png
 // Coordenadas de referencia: 1240 x 1240
 // ==========================================

 const COORDENADAS_JIN_NUEVOS = [

     // 1. Jin con camiseta roja
     { id: 1, x: 207, y: 80, width: 205, height: 445 },

     // 2. Jin con traje rojo
     { id: 2, x: 610, y: 95, width: 300, height: 420 },

     // 3. Jin con chaqueta negra
     { id: 3, x: 1015, y: 48, width: 175, height: 525 },

     // 4. Jin con camiseta negra
     { id: 4, x: 90, y: 672, width: 225, height: 568 },

     // 5. RJ blanco
     { id: 5, x: 337, y: 565, width: 220, height: 255 },

     // 6. Jin con Army Bomb
     { id: 6, x: 700, y: 532, width: 110, height: 320 },

     // 7. Jin con disfraz de RJ
     { id: 7, x: 965, y: 593, width: 240, height: 250 },

     // 8. Firma de Jin
     { id: 8, x: 424, y: 920, width: 345, height: 180 },

     // 9. Nombre Kim Seokjin
     { id: 9, x: 818, y: 975, width: 385, height: 170 }

 ];


 // ==========================================
 // STICKERS NUEVOS DE SUGA
 // Archivo: stickersuga.png
 // Coordenadas de referencia: 1240 x 1240
 // ==========================================

 const COORDENADAS_SUGA_NUEVOS = [

     // 1. SUGA sentado señalando arriba
     { id: 1, x: 70, y: 65, width: 365, height: 455 },

     // 2. SUGA con flor roja
     { id: 2, x: 575, y: 110, width: 140, height: 450 },

     // 3. SUGA con ropa deportiva
     { id: 3, x: 925, y: 70, width: 170, height: 455 },

     // 4. SUGA con camiseta Insta Army
     { id: 4, x: 130, y: 590, width: 205, height: 600 },

     // 5. SUGA ilustrado
     { id: 5, x: 415, y: 640, width: 210, height: 330 },

     // 6. Shooky con Army Bomb
     { id: 6, x: 640, y: 685, width: 305, height: 230 },

     // 7. Shooky sonriente
     { id: 7, x: 985, y: 690, width: 250, height: 215 },

     // 8. Nombre Min Yoongi - Insta Army
     { id: 8, x: 775, y: 970, width: 460, height: 200 }

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
 // ZONAS PROTEGIDAS EXCLUSIVAS B5 Y B10
 // ==========================================

 function obtenerZonasProtegidasB5B10() {

     return [

         // FOTOGRAFÍA SUPERIOR CENTRAL
         {
             x: CONFIGURACION_B5_B10.fotografia.x,
             y: CONFIGURACION_B5_B10.fotografia.y,
             width: CONFIGURACION_B5_B10.fotografia.width,
             height: CONFIGURACION_B5_B10.fotografia.height
         },

         // CÓDIGO DE SPOTIFY INFERIOR DERECHO
         {
             x: 670,
             y: 1110,
             width: 280,
             height: 105
         }

     ];
 }


 // ==========================================
 // RECONOCER DIFERENTES NOMBRES DEL BIAS
 // ==========================================

function normalizarBias(bias) {

    const texto = String(bias || "")
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\s\-_]/g, "");

    const equivalencias = {
        RM: "RM",
        NAMJOON: "RM",
        KIMNAMJOON: "RM",

        JIN: "JIN",
        SEOKJIN: "JIN",
        KIMSEOKJIN: "JIN",

        SUGA: "SUGA",
        YOONGI: "SUGA",
        MINYOONGI: "SUGA",
        AGUSTD: "SUGA",

        JHOPE: "JHOPE",
        HOSEOK: "JHOPE",
        JUNGHOSEOK: "JHOPE",
        HOBI: "JHOPE",

        JIMIN: "JIMIN",
        PARKJIMIN: "JIMIN",

        V: "V",
        TAEHYUNG: "V",
        KIMTAEHYUNG: "V",
        TAE: "V",

        JUNGKOOK: "JUNGKOOK",
        JEONJUNGKOOK: "JUNGKOOK",
        JK: "JUNGKOOK",
        KOOKIE: "JUNGKOOK",

        OT7: "OT7",
        BTS: "OT7"
    };

    return equivalencias[texto] || texto;
}

// ==========================================
// SELECCIONAR REVERSO AUTOMÁTICO DE B1
// ==========================================

function obtenerReversoB1(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        "JIN": "B1REVERSOJIN.jpg",
        "SUGA": "B1REVERSOSUGA.jpg",
        "YOONGI": "B1REVERSOSUGA.jpg",
        "JHOPE": "B1REVERSOJHOPE.jpg",
        "HOSEOK": "B1REVERSOJHOPE.jpg",
        "JIMIN": "B1REVERSOJIMIN.jpg",
        "V": "B1REVERSOV.jpg",
        "TAEHYUNG": "B1REVERSOV.jpg",
        "RM": "B1REVERSORM.jpg",
        "NAMJOON": "B1REVERSORM.jpg",
        "JUNGKOOK": "B1REVERSOJUNGKOOK.jpg",
        "JK": "B1REVERSOJUNGKOOK.jpg",
        "OT7": "B1REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}

// ==========================================
// CARGAR IMAGEN
// ==========================================

function cargarImagenPDF(ruta) {
    return new Promise((resolve, reject) => {
        const imagen = new Image();
        imagen.onload = () => resolve(imagen);
        imagen.onerror = () => reject(
            new Error("No se pudo cargar la imagen: " + ruta)
        );
        imagen.src = ruta;
    });
}


 // ==========================================
 // UNIR CREDENCIAL + STICKERS + MARCOS PARA PDF
 // RESPETANDO SU POSICIÓN EN EL EDITOR
 // ==========================================

function obtenerImagenFrontalCredencial() {

    const canvasBase = document.getElementById("canvas-credencial");
    const capaStickers = document.getElementById("capa-stickers");

    if (!canvasBase) {
        throw new Error("No se encontró el canvas de la credencial.");
    }

    const canvasFinal = document.createElement("canvas");

    canvasFinal.width = canvasBase.width;
    canvasFinal.height = canvasBase.height;

    const contextoFinal = canvasFinal.getContext("2d");

    // Dibujar la credencial original
    contextoFinal.drawImage(
        canvasBase,
        0,
        0,
        canvasFinal.width,
        canvasFinal.height
    );

    if (capaStickers) {

        // Medidas y posiciones reales en pantalla
        const rectBase = canvasBase.getBoundingClientRect();
        const rectStickers = capaStickers.getBoundingClientRect();

        if (
            rectBase.width > 0 &&
            rectBase.height > 0 &&
            rectStickers.width > 0 &&
            rectStickers.height > 0
        ) {

            // Convertir posiciones de pantalla
            // a coordenadas de la credencial
            const escalaX = canvasBase.width / rectBase.width;
            const escalaY = canvasBase.height / rectBase.height;

            const x = (rectStickers.left - rectBase.left) * escalaX;
            const y = (rectStickers.top - rectBase.top) * escalaY;

            const ancho = rectStickers.width * escalaX;
            const alto = rectStickers.height * escalaY;

            // Colocar stickers y marcos en su posición real
            contextoFinal.drawImage(
                capaStickers,
                x,
                y,
                ancho,
                alto
            );

        } else {

            // Respaldo si todavía no hay medidas visibles
            contextoFinal.drawImage(
                capaStickers,
                0,
                0,
                canvasFinal.width,
                canvasFinal.height
            );
        }
    }

    return canvasFinal.toDataURL("image/jpeg", 1.0);
}



// ==========================================
// CREAR IMAGEN EXCLUSIVA PARA COMPARTIR
// EN TIKTOK - CREDENCIALES B1 A B10
// ==========================================

async function crearImagenCredencialTikTok() {

    // Obtener la credencial personalizada completa
    // con datos, fotografía, stickers y marcos
    const imagenOriginal = obtenerImagenFrontalCredencial();

    const imagen = await cargarImagenPDF(imagenOriginal);

    // Crear un canvas independiente
    const canvasTikTok = document.createElement("canvas");

    canvasTikTok.width = imagen.naturalWidth;
    canvasTikTok.height = imagen.naturalHeight;

    const contexto = canvasTikTok.getContext("2d");

    // Dibujar la credencial original
    contexto.drawImage(
        imagen,
        0,
        0,
        canvasTikTok.width,
        canvasTikTok.height
    );

    const ancho = canvasTikTok.width;
    const alto = canvasTikTok.height;

    // ==========================================
    // FRANJA CENTRAL PARA RESALTAR EL MENSAJE
    // ==========================================

    const altoFranja = alto * 0.32;
    const inicioFranja = (alto - altoFranja) / 2;

    contexto.fillStyle = "rgba(37, 5, 60, 0.78)";

    contexto.fillRect(
        0,
        inicioFranja,
        ancho,
        altoFranja
    );

    // ==========================================
    // TEXTO GRANDE PARA TIKTOK
    // ==========================================
const lineas = [
    "YA TODAS LAS ARMYS",
    "ESTÁN HACIENDO",
    "SU CREDENCIAL",
    "SIN PAG@R",
    "UN SOLO PESO 💜"
];

    const tamanoInicial = Math.round(ancho * 0.075);
    let tamano = tamanoInicial;

    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.lineJoin = "round";

    // Ajustar tamaño para que el texto no se salga
    do {

        contexto.font = `bold ${tamano}px Arial`;

        const cabe = lineas.every(linea =>
            contexto.measureText(linea).width <= ancho * 0.92
        );

        if (cabe || tamano <= 18) break;

        tamano -= 2;

    } while (true);

    const espacioLineas = tamano * 1.45;

    const centroY = alto / 2;

    contexto.lineWidth = Math.max(3, tamano * 0.09);
    contexto.strokeStyle = "#310044";
    contexto.fillStyle = "#ffffff";

    lineas.forEach((linea, indice) => {

        const y = centroY +
            (indice - 1) * espacioLineas;

        contexto.strokeText(
            linea,
            ancho / 2,
            y
        );

        contexto.fillText(
            linea,
            ancho / 2,
            y
        );

    });

    // Esta imagen es solo para TikTok.
    // No modifica la credencial ni el PDF.
    return canvasTikTok.toDataURL("image/jpeg", 0.95);
}

// ==========================================
// GIRAR IMAGEN 90° PARA EL PDF
// ==========================================

function rotarImagenDataURL(origen) {
    return new Promise((resolve, reject) => {

        const imagen = new Image();

        imagen.onload = () => {

            const canvas = document.createElement("canvas");
            canvas.width = imagen.height;
            canvas.height = imagen.width;

            const contexto = canvas.getContext("2d");

            contexto.translate(canvas.width / 2, canvas.height / 2);
            contexto.rotate(-Math.PI / 2);

            contexto.drawImage(
                imagen,
                -imagen.width / 2,
                -imagen.height / 2
            );

            resolve(canvas.toDataURL("image/jpeg", 1.0));
        };

        imagen.onerror = () => reject(
            new Error("No se pudo girar la imagen.")
        );

        imagen.src = origen;
    });
}

// ==========================================
// COLOCAR IMAGEN AJUSTADA EN UNA CAJA
// ==========================================

function agregarImagenAjustadaEnCaja(
    pdf,
    imagenData,
    cajaX,
    cajaY,
    cajaAncho,
    cajaAlto
) {

    const propiedades = pdf.getImageProperties(imagenData);

    const anchoImagen = propiedades.width;
    const altoImagen = propiedades.height;

    const escala = Math.min(
        cajaAncho / anchoImagen,
        cajaAlto / altoImagen
    );

    const anchoFinal = anchoImagen * escala;
    const altoFinal = altoImagen * escala;

    const xFinal = cajaX + (cajaAncho - anchoFinal) / 2;
    const yFinal = cajaY + (cajaAlto - altoFinal) / 2;

    pdf.addImage(
        imagenData,
        "JPEG",
        xFinal,
        yFinal,
        anchoFinal,
        altoFinal
    );
}

// ==========================================
// AGREGAR IMAGEN COMO PÁGINA COMPLETA
// ==========================================

function agregarImagenPaginaCompleta(pdf, imagenData, margen = 10) {

    const anchoPagina = pdf.internal.pageSize.getWidth();
    const altoPagina = pdf.internal.pageSize.getHeight();

    agregarImagenAjustadaEnCaja(
        pdf,
        imagenData,
        margen,
        margen,
        anchoPagina - margen * 2,
        altoPagina - margen * 2
    );
}


 // ==========================================
 // REVERSOS EXCLUSIVOS DE B2 PARA PDF
 // ==========================================

function obtenerReversoB2(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B2REVERSOJIN.jpg",
        SUGA: "B2REVERSOSUGA.jpg",
        YOONGI: "B2REVERSOSUGA.jpg",
        JHOPE: "B2REVERSOJHOPE.jpg",
        HOSEOK: "B2REVERSOJHOPE.jpg",
        JIMIN: "B2REVERSOJIMIN.jpg",
        V: "B2REVERSOV.jpg",
        TAEHYUNG: "B2REVERSOV.jpg",
        RM: "B2REVERSORM.jpg",
        NAMJOON: "B2REVERSORM.jpg",
        JUNGKOOK: "B2REVERSOJUNGKOOK.jpg",
        JK: "B2REVERSOJUNGKOOK.jpg",
        OT7: "B2REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}


 // ==========================================
 // REVERSOS EXCLUSIVOS DE B3 PARA PDF
 // ==========================================

function obtenerReversoB3(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B3REVERSOJIN.jpg",
        SUGA: "B3REVERSOSUGA.jpg",
        YOONGI: "B3REVERSOSUGA.jpg",
        JHOPE: "B3REVERSOJHOPE.jpg",
        HOSEOK: "B3REVERSOJHOPE.jpg",
        JIMIN: "B3REVERSOJIMIN.jpg",
        V: "B3REVERSOV.jpg",
        TAEHYUNG: "B3REVERSOV.jpg",
        RM: "B3REVERSORM.jpg",
        NAMJOON: "B3REVERSORM.jpg",
        JUNGKOOK: "B3REVERSOJUNGKOOK.jpg",
        JK: "B3REVERSOJUNGKOOK.jpg",
        OT7: "B3REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}

// ==========================================
// REVERSOS EXCLUSIVOS DE B4 PARA PDF
// ==========================================

function obtenerReversoB4(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B4REVERSOJIN.jpg",
        SUGA: "B4REVERSOSUGA.jpg",
        YOONGI: "B4REVERSOSUGA.jpg",
        JHOPE: "B4REVERSOJHOPE.jpg",
        HOSEOK: "B4REVERSOJHOPE.jpg",
        JIMIN: "B4REVERSOJIMIN.jpg",
        V: "B4REVERSOV.jpg",
        TAEHYUNG: "B4REVERSOV.jpg",
        RM: "B4REVERSORM.jpg",
        NAMJOON: "B4REVERSORM.jpg",
        JUNGKOOK: "B4REVERSOJUNGKOOK.jpg",
        JK: "B4REVERSOJUNGKOOK.jpg",
        OT7: "B4REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}


 // ==========================================
 // REVERSOS COMPARTIDOS DE B5 Y B10 PARA PDF
 // ==========================================

function obtenerReversoB5B10(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B5y10REVERSOJIN.jpg",
        SUGA: "B5y10REVERSOSUGA.jpg",
        YOONGI: "B5y10REVERSOSUGA.jpg",
        JHOPE: "B5y10REVERSOJHOPE.jpg",
        HOSEOK: "B5y10REVERSOJHOPE.jpg",
        JIMIN: "B5y10REVERSOJIMIN.jpg",
        V: "B5y10REVERSOV.jpg",
        TAEHYUNG: "B5y10REVERSOV.jpg",
        RM: "B5y10REVERSORM.jpg",
        NAMJOON: "B5y10REVERSORM.jpg",
        JUNGKOOK: "B5y10REVERSOJUNGKOOK.jpg",
        JK: "B5y10REVERSOJUNGKOOK.jpg",
        OT7: "B5y10REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}


 // ==========================================
 // REVERSOS EXCLUSIVOS DE B6 PARA PDF
 // ==========================================

function obtenerReversoB6(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B6REVERSOJIN.jpg",
        SUGA: "B6REVERSOSUGA.jpg",
        YOONGI: "B6REVERSOSUGA.jpg",
        JHOPE: "B6REVERSOJHOPE.jpg",
        HOSEOK: "B6REVERSOJHOPE.jpg",
        JIMIN: "B6REVERSOJIMIN.jpg",
        V: "B6REVERSOV.jpg",
        TAEHYUNG: "B6REVERSOV.jpg",
        RM: "B6REVERSORM.jpg",
        NAMJOON: "B6REVERSORM.jpg",
        JUNGKOOK: "B6REVERSOJUNGKOOK.jpg",
        JK: "B6REVERSOJUNGKOOK.jpg",
        OT7: "B6REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}


 // ==========================================
 // REVERSOS COMPARTIDOS DE B7 Y B9 PARA PDF
 // ==========================================

function obtenerReversoB7B9(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B7y9REVERSOJIN.jpg",
        SUGA: "B7y9REVERSOSUGA.jpg",
        YOONGI: "B7y9REVERSOSUGA.jpg",
        JHOPE: "B7y9REVERSOJHOPE.jpg",
        HOSEOK: "B7y9REVERSOJHOPE.jpg",
        JIMIN: "B7y9REVERSOJIMIN.jpg",
        V: "B7y9REVERSOV.jpg",
        TAEHYUNG: "B7y9REVERSOV.jpg",
        RM: "B7y9REVERSORM.jpg",
        NAMJOON: "B7y9REVERSORM.jpg",
        JUNGKOOK: "B7y9REVERSOJUNGKOOK.jpg",
        JK: "B7y9REVERSOJUNGKOOK.jpg",
        OT7: "B7y9REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}


 // ==========================================
 // REVERSOS EXCLUSIVOS DE B8 PARA PDF
 // ==========================================

function obtenerReversoB8(bias) {

    const biasNormalizado = String(bias || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");

    const reversos = {
        JIN: "B8REVERSOJIN.jpg",
        SUGA: "B8REVERSOSUGA.jpg",
        YOONGI: "B8REVERSOSUGA.jpg",
        JHOPE: "B8REVERSOJHOPE.jpg",
        HOSEOK: "B8REVERSOJHOPE.jpg",
        JIMIN: "B8REVERSOJIMIN.jpg",
        V: "B8REVERSOV.jpg",
        TAEHYUNG: "B8REVERSOV.jpg",
        RM: "B8REVERSORM.jpg",
        NAMJOON: "B8REVERSORM.jpg",
        JUNGKOOK: "B8REVERSOJUNGKOOK.jpg",
        JK: "B8REVERSOJUNGKOOK.jpg",
        OT7: "B8REVERSOOT7.jpg"
    };

    return reversos[biasNormalizado] || null;
}


// ==========================================
// GENERAR PDF DE B1
// ==========================================

async function descargarPDFB1() {

    try {

       if (
    !window.datosActualesPDF ||
   





!["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"].includes(window.datosActualesPDF.plantilla)






) {
    


alert("Primero abre una de las 10 credenciales antes de descargar el PDF. 💜");




    return;
}

        if (!window.jspdf || !window.jspdf.jsPDF) {
    throw new Error(
        "No se pudo cargar la biblioteca PDF. Revisa tu conexión a internet y vuelve a intentarlo."
    );
}

const { jsPDF } = window.jspdf;

        if (!jsPDF) {
            throw new Error("No se encontró la librería jsPDF.");
        }

        const datos = window.datosActualesPDF;

        





const biasParaReverso = normalizarBias(datos.bias);

const archivoReverso =
    datos.plantilla === "B8"
        ? obtenerReversoB8(biasParaReverso)
        : datos.plantilla === "B7" || datos.plantilla === "B9"
            ? obtenerReversoB7B9(biasParaReverso)
            : datos.plantilla === "B6"
                ? obtenerReversoB6(biasParaReverso)
                : datos.plantilla === "B5" || datos.plantilla === "B10"
                    ? obtenerReversoB5B10(biasParaReverso)
                    : datos.plantilla === "B4"
                        ? obtenerReversoB4(biasParaReverso)
                        : datos.plantilla === "B3"
                            ? obtenerReversoB3(biasParaReverso)
                            : datos.plantilla === "B2"
                                ? obtenerReversoB2(biasParaReverso)
                                : obtenerReversoB1(biasParaReverso);








        if (!archivoReverso) {
            throw new Error(
                "No se encontró el reverso para el bias: " + datos.bias
            );
        }

        // Frente actual con stickers, textos y marcos
        const frenteDataURL = obtenerImagenFrontalCredencial();

        // Cargar imágenes auxiliares
        const instrucciones = await cargarImagenPDF("./INSTRUCCIONESPDF.jpg");
        const bienvenida = await cargarImagenPDF("./bienvenidapdf.jpg");
        const decalogo = await cargarImagenPDF("./decalogopdf.jpg");
        const reverso = await cargarImagenPDF("./" + archivoReverso);

        // Convertir a dataURL
        const canvasInstrucciones = document.createElement("canvas");
        canvasInstrucciones.width = instrucciones.width;
        canvasInstrucciones.height = instrucciones.height;
        canvasInstrucciones.getContext("2d").drawImage(instrucciones, 0, 0);
        const instruccionesDataURL = canvasInstrucciones.toDataURL("image/jpeg", 1.0);

        const canvasBienvenida = document.createElement("canvas");
        canvasBienvenida.width = bienvenida.width;
        canvasBienvenida.height = bienvenida.height;
        canvasBienvenida.getContext("2d").drawImage(bienvenida, 0, 0);
        const bienvenidaDataURL = canvasBienvenida.toDataURL("image/jpeg", 1.0);

        const canvasDecalogo = document.createElement("canvas");
        canvasDecalogo.width = decalogo.width;
        canvasDecalogo.height = decalogo.height;
        canvasDecalogo.getContext("2d").drawImage(decalogo, 0, 0);
        const decalogoDataURL = canvasDecalogo.toDataURL("image/jpeg", 1.0);

        const canvasReverso = document.createElement("canvas");
        canvasReverso.width = reverso.width;
        canvasReverso.height = reverso.height;
        canvasReverso.getContext("2d").drawImage(reverso, 0, 0);
        const reversoDataURL = canvasReverso.toDataURL("image/jpeg", 1.0);

        // Girar frente y reverso como en el ejemplo
        const frenteGirado = await rotarImagenDataURL(frenteDataURL);
        const reversoGirado = await rotarImagenDataURL(reversoDataURL);

        // Crear PDF tamaño carta vertical
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "letter"
        });

        // ==========================================
        // PÁGINA 1 - INSTRUCCIONES
        // ==========================================
        agregarImagenPaginaCompleta(pdf, instruccionesDataURL, 10);

        // ==========================================
        // PÁGINA 2 - FRENTE + REVERSO
        // ==========================================
        pdf.addPage("letter", "portrait");

        const anchoPagina = pdf.internal.pageSize.getWidth();
        const altoPagina = pdf.internal.pageSize.getHeight();

        const margenLateral = 12;
        const margenSuperior = 14;
        const separacion = 12;

        const cajaAncho = anchoPagina - margenLateral * 2;
        const cajaAlto = (altoPagina - margenSuperior * 2 - separacion) / 2;

        agregarImagenAjustadaEnCaja(
            pdf,
            frenteGirado,
            margenLateral,
            margenSuperior,
            cajaAncho,
            cajaAlto
        );

        agregarImagenAjustadaEnCaja(
            pdf,
            reversoGirado,
            margenLateral,
            margenSuperior + cajaAlto + separacion,
            cajaAncho,
            cajaAlto
        );

        // ==========================================
        // PÁGINA 3 - BIENVENIDA
        // ==========================================
        pdf.addPage("letter", "portrait");
        agregarImagenPaginaCompleta(pdf, bienvenidaDataURL, 10);

        // ==========================================
        // PÁGINA 4 - DECÁLOGO
        // ==========================================
        pdf.addPage("letter", "portrait");
        agregarImagenPaginaCompleta(pdf, decalogoDataURL, 10);

       
        // ==========================================
        // DESCARGAR PDF Y ABRIR RULETA INSTA ARMY
        // ==========================================

        const nombreArchivo =
            "Insta-Army-" +
            datos.plantilla + "-" +
            String(datos.codigo || "credencial").replace(/\s+/g, "-") +
            ".pdf";

        // Iniciar la descarga del PDF
        pdf.save(nombreArchivo);

        // Abrir la ruleta después de iniciar la descarga
        setTimeout(() => {
            window.location.href =
                "https://purplesitew.github.io/ruletainstaarmy/";
        }, 2000);


    } catch (error) {
        console.error("Error al generar el PDF de B1:", error);
        alert(error.message);
    }
}

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

  
    // Guardar los datos para mostrarlos encima de los stickers
    window.datosB1SobreStickers = {
        nombre: datos.nombre,
        pais: datos.pais,
        bias: datos.bias,
        codigo: datos.codigo
      
    };
    window.datosActualesPDF = {
    plantilla: "B1",
    nombre: datos.nombre,
    pais: datos.pais,
    bias: datos.bias,
    codigo: datos.codigo
};
  
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
// CONFIGURACIÓN EXCLUSIVA B2
// ==========================================

const CONFIGURACION_B2 = {
    width: 880,
    height: 1204,

    fuente: "TangoArmy",

    fotografia: {
        x: 14,
        y: 63,
        width: 246,
        height: 345
    },

    nombre: {
        centerX: 522,
        baselineY: 217,
        maxWidth: 420,
        fontSize: 72,
        color: "#d4a017",
        outline: "#8a8a8a"
    },

    pais: {
        centerX: 522,
        baselineY: 344,
        maxWidth: 420,
        fontSize: 72,
        color: "#d4a017",
        outline: "#8a8a8a"
    },

    bias: {
        centerX: 617,
        baselineY: 531,
        maxWidth: 360,
        fontSize: 62,
        color: "#d9d9d9",
        outline: "#2f2f2f"
    },

    codigo: {
        centerX: 141,
        baselineY: 535,
        maxWidth: 220,
        fontSize: 70,
        color: "#ff0000",
        outline: "#8a8a8a"
    }
};


 // ==========================================
 // CONFIGURACIÓN EXCLUSIVA B3
 // ==========================================

const CONFIGURACION_B3 = {

    width: 880,
    height: 1204,

    fotografia: {
        x: 298,
        y: 240,
        width: 285,
        height: 343
    },

  nombre: {
    centerX: 440,
    baselineY: 680,
    maxWidth: 650,
    fontSize: 120,
    color: "#e59be9",
    outline: "#9225b1"
},

pais: {
    centerX: 718,
    baselineY: 357,
    maxWidth: 290,
    fontSize: 90,
    color: "#e59be9",
    outline: "#9225b1"
},

bias: {
    centerX: 155,
    baselineY: 380,
    maxWidth: 300,
    fontSize: 60,
    color: "#e59be9",
    outline: "#9225b1"
},

    codigo: {
        centerX: 153,
        baselineY: 523,
        maxWidth: 240,
        fontSize: 60,
        color: "#e9a5e9",
        outline: "#ff0000"
    }
};

// ==========================================
// CONFIGURACIÓN EXCLUSIVA B4
// ==========================================

const CONFIGURACION_B4 = {
    width: 880,
    height: 1204,

    fotografia: {
        x: 77,
        y: 160,
        width: 202,
        height: 274
    },

    biasFoto: {
        x: 579,
        y: 160,
        width: 202,
        height: 274
    },


nombre: {
    centerX: 290,
    baselineY: 553,
    maxWidth: 650,
    fontSize: 110,
    color: "#f28cff",
    outline: "#8a00c2"
},

bias: {
    centerX: 290,
    baselineY: 736,
    maxWidth: 650,
    fontSize: 110,
    color: "#f28cff",
    outline: "#8a00c2"
},

pais: {
    centerX: 170,
    baselineY: 870,
    maxWidth: 270,
    fontSize: 72,
    color: "#f28cff",
    outline: "#8a00c2"
},

codigo: {
    centerX: 725,
    baselineY: 866,
    maxWidth: 180,
    fontSize: 66,
    color: "#ff4da6",
    outline: "#ff0000"
}

  
};
// ==========================================
// ZONAS PROTEGIDAS EXCLUSIVAS B4
// ==========================================

function obtenerZonasProtegidasB4() {
    return [

        // FOTO IZQUIERDA
        {
            x: CONFIGURACION_B4.fotografia.x,
            y: CONFIGURACION_B4.fotografia.y,
            width: CONFIGURACION_B4.fotografia.width,
            height: CONFIGURACION_B4.fotografia.height
        },

        // FOTO DERECHA (BIAS / GRUPO)
        {
            x: CONFIGURACION_B4.biasFoto.x,
            y: CONFIGURACION_B4.biasFoto.y,
            width: CONFIGURACION_B4.biasFoto.width,
            height: CONFIGURACION_B4.biasFoto.height
        },

        // SPOTIFY
        {
            x: 286,
            y: 923,
            width: 311,
            height: 94
        }
    ];
}

  
// ==========================================
// CONFIGURACIÓN EXCLUSIVA B6
// ==========================================

const CONFIGURACION_B6 = {
    width: 840,
    height: 1204,

    fuente: "FankyBubbleArmy",

    fotografia: {
        x: 37,
        y: 47,
        width: 244,
        height: 310
    },

    spotify: {
        x: 0,
        y: 464,
        width: 308,
        height: 76
    },

    codigo: {
        centerX: 156,
        baselineY: 436,
        maxWidth: 230,
        fontSize: 82,
        color: "#ff0000",
        outline: "#ffffff"
    },

    nombre: {
        centerX: 555,
        baselineY: 470,
        maxWidth: 360,
        fontSize: 110,
        color: "#ffffff",
        outline: "#f2d56b"
    },

    bias: {
        centerX: 163,
        baselineY: 650,
        maxWidth: 220,
        fontSize: 108,
        color: "#ffffff",
        outline: "#f2d56b"
    }
};

// ==========================================
// ZONAS PROTEGIDAS EXCLUSIVAS B6
// ==========================================

function obtenerZonasProtegidasB6() {
    return [
        {
            x: CONFIGURACION_B6.fotografia.x,
            y: CONFIGURACION_B6.fotografia.y,
            width: CONFIGURACION_B6.fotografia.width,
            height: CONFIGURACION_B6.fotografia.height
        },
        {
            x: CONFIGURACION_B6.spotify.x,
            y: CONFIGURACION_B6.spotify.y,
            width: CONFIGURACION_B6.spotify.width,
            height: CONFIGURACION_B6.spotify.height
        }
    ];
}

// ==========================================
// CONFIGURACIÓN EXCLUSIVA B8 CORREGIDA
// ==========================================

const CONFIGURACION_B8 = {

    width: 750,
    height: 1000,

    fuente: "AlterCreedArmy",

 fotografia: {
    x: 145,
    y: 324,
    width: 212,
    height: 340
},
  
    nombre: {
        centerX: 480,
        baselineY: 359,
        maxWidth: 195,
        fontSize: 39,
        color: "#ffffff",
        outline: "#333333"
    },

    armyTipo: {
    centerX: 488,
    baselineY: 417,
    maxWidth: 200,
    fontSize: 34,
    color: "#ffffff",
    outline: "#333333"
},

codigo: {
    centerX: 490,
    baselineY: 490,
    maxWidth: 210,
    fontSize: 30,
    color: "#ffffff",
    outline: "#ff0000"
},

fechaRegistro: {
    centerX: 480,
    baselineY: 558,
    maxWidth: 110,
    fontSize: 42,
    color: "#ffffff",
    outline: "#333333"
},

    paisRegion: {
        centerX: 477,
        baselineY: 677,
        maxWidth: 195,
        fontSize: 35,
        color: "#ffffff",
        outline: "#333333"
    },

    paisDebajoFoto: {
        centerX: 240,
        baselineY: 710,
        maxWidth: 220,
        fontSize: 40,
        color: "#ffffff",
        outline: "#333333"
    }
};


// ==========================================
// CONFIGURACIÓN EXCLUSIVA B7 Y B9
// ==========================================

const CONFIGURACION_B7_B9 = {
    width: 720,
    height: 963,

    fuente: "PiedraArmy",

    fotografia: {
        x: 86,
        y: 174,
        width: 182,
        height: 265
    },

    codigo: {
        centerX: 424,
        baselineY: 215,
        maxWidth: 180,
        fontSize: 78,
        color: "#ffffff",
        outline: "#ff0000"
    },

    pais: {
        centerX: 436,
        baselineY: 385,
        maxWidth: 180,
        fontSize: 60,
        color: "#ffffff",
        outline: "#ff4db8"
    },

 
nombre: {
    centerX: 177,
    baselineY: 575,
    maxWidth: 250,
    fontSize: 74,
    color: "#ffffff",
    outline: "#ff4db8"
},


   
bias: {
    centerX: 243,
    baselineY: 730,
    maxWidth: 220,
    fontSize: 70,
    color: "#ffffff",
    outline: "#ff4db8"
},


    qr: {
        x: 84,
        y: 806,
        width: 97,
        height: 106
    },

    spotify: {
        x: 196,
        y: 811,
        width: 188,
        height: 63
    }
};

 // ==========================================
 // ZONAS PROTEGIDAS EXCLUSIVAS B7 Y B9
 // ==========================================

 function obtenerZonasProtegidasB7B9() {

     return [

         // FOTOGRAFÍA
         {
             x: CONFIGURACION_B7_B9.fotografia.x,
             y: CONFIGURACION_B7_B9.fotografia.y,
             width: CONFIGURACION_B7_B9.fotografia.width,
             height: CONFIGURACION_B7_B9.fotografia.height
         },

         // CÓDIGO QR
         {
             x: CONFIGURACION_B7_B9.qr.x,
             y: CONFIGURACION_B7_B9.qr.y,
             width: CONFIGURACION_B7_B9.qr.width,
             height: CONFIGURACION_B7_B9.qr.height
         },

         // SPOTIFY
         {
             x: CONFIGURACION_B7_B9.spotify.x,
             y: CONFIGURACION_B7_B9.spotify.y,
             width: CONFIGURACION_B7_B9.spotify.width,
             height: CONFIGURACION_B7_B9.spotify.height
         }

     ];
 }

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

       
        // ==========================================
        // GUARDAR DATOS DE B7 Y B9 PARA EL PDF
        // ==========================================

        window.datosActualesPDF = {
            plantilla: archivoPlantilla === "B7PLANTILLA.jpg" ? "B7" : "B9",
            nombre: datos.nombre,
            pais: datos.pais,
            bias: datos.bias,
            codigo: datos.codigo
        };

      
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

   // ==========================================
// NOMBRE B7 Y B9 - POSICIÓN HORIZONTAL
// ==========================================

escribirDato(
    datos.nombre,
    {
        ...CONFIGURACION_B7_B9.nombre,
        centerX: 165
    }
);

// ==========================================
// BIAS B7 Y B9 - POSICIÓN HORIZONTAL
// ==========================================

escribirDato(
    datos.bias,
    {
        ...CONFIGURACION_B7_B9.bias,
        centerX: 240
    }
);
      
        // ==========================================
        // GUARDAR DATOS PARA STICKERS B7 Y B9
        // ==========================================

        window.datosB7B9SobreStickers = {
            nombre: datos.nombre,
            pais: datos.pais,
            bias: datos.bias,
            codigo: datos.codigo
        };

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

 // ==========================================
 // MOSTRAR PLANTILLAS PENDIENTES B2 B3 B4 B6 B8
 // ==========================================

async function mostrarCredencialPendiente(datos, archivoPlantilla) {

    const plantillasPermitidas = [
        "B2PLANTILLA.jpg",
        "B3PLANTILLA.jpg",
        "B4PLANTILLA.jpg",
        "B6PLANTILLA.jpg",
        "B8PLANTILLA.jpg"
    ];

    if (!plantillasPermitidas.includes(archivoPlantilla)) {
        throw new Error("Plantilla no válida: " + archivoPlantilla);
    }

    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !creador || !canvas) {
        throw new Error("No se encontró el editor.");
    }

    const plantilla = new Image();

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar " + archivoPlantilla)
        );
        plantilla.src = "./" + archivoPlantilla;
    });

    // Evitar utilizar posiciones de fotografías anteriores
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

    // Utilizar las dimensiones de la plantilla original
    canvas.width = plantilla.naturalWidth;
    canvas.height = plantilla.naturalHeight;

    const contexto = canvas.getContext("2d");

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Mostrar la plantilla elegida
    creador.classList.add("oculta");
    editor.classList.remove("oculta");

    editor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ==========================================
// MOSTRAR CREDENCIAL B2
// ==========================================

async function mostrarCredencialB2(datos) {

 
window.datosCredencialActual = { ...datos };

// ==========================================
// GUARDAR DATOS DE B2 PARA DESCARGAR PDF
// ==========================================

window.datosActualesPDF = {
    plantilla: "B2",
    nombre: datos.nombre,
    pais: datos.pais,
    bias: datos.bias,
    codigo: datos.codigo
};

  
    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !creador || !canvas) {
        throw new Error("No se encontró el área de la credencial.");
    }

    const contexto = canvas.getContext("2d");

    // CARGAR FUENTE
    await document.fonts.load('72px "TangoArmy"');

    // CARGAR PLANTILLA
    const plantilla = new Image();
    plantilla.src = "./B2PLANTILLA.jpg";

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar la plantilla B2.")
        );
    });

    canvas.width = CONFIGURACION_B2.width;
    canvas.height = CONFIGURACION_B2.height;

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    function escribirDato(texto, configuracion, esCodigo = false) {

        if (!texto) return;

        let tamano = configuracion.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "TangoArmy"`;

        while (
            contexto.measureText(texto).width > configuracion.maxWidth &&
            tamano > 20
        ) {
            tamano--;
            contexto.font = `${tamano}px "TangoArmy"`;
        }

        contexto.fillStyle = configuracion.color;
        contexto.strokeStyle = configuracion.outline;
        contexto.lineWidth = esCodigo ? 6 : 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            configuracion.centerX,
            configuracion.baselineY
        );

        contexto.fillText(
            texto,
            configuracion.centerX,
            configuracion.baselineY
        );

        contexto.restore();
    }

    // NOMBRE (PRIMERA LÍNEA)
    escribirDato(
        datos.nombre,
        CONFIGURACION_B2.nombre
    );

    // PAÍS (SEGUNDA LÍNEA)
    escribirDato(
        datos.pais,
        CONFIGURACION_B2.pais
    );

    // BIAS
    escribirDato(
        datos.bias,
        CONFIGURACION_B2.bias
    );

    // CÓDIGO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B2.codigo,
        true
    );

    // ACTIVAR CONTROLES
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

    creador.classList.add("oculta");
    editor.classList.remove("oculta");

    editor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// MOSTRAR CREDENCIAL EXCLUSIVA B3
// ==========================================

async function mostrarCredencialB3(datos) {

  
    // ==========================================
    // GUARDAR DATOS DE B3 PARA DESCARGAR PDF
    // ==========================================

    window.datosActualesPDF = {
        plantilla: "B3",
        nombre: datos.nombre,
        pais: datos.pais,
        bias: datos.bias,
        codigo: datos.codigo
    };


  window.datosActualesB3 = datos;

    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !creador || !canvas) {
        throw new Error("No se encontró el editor de B3.");
    }

    // CARGAR FUENTES
    await document.fonts.load('92px "AlwaysStarArmy"');
    await document.fonts.load('60px "ChiladaArmy"');

    // CARGAR PLANTILLA ORIGINAL
    const plantilla = new Image();

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar B3PLANTILLA.jpg")
        );
        plantilla.src = "./B3PLANTILLA.jpg";
    });

    canvas.width = CONFIGURACION_B3.width;
    canvas.height = CONFIGURACION_B3.height;

    const contexto = canvas.getContext("2d");

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ==========================================
    // ESCRIBIR DATOS B3
    // ==========================================

    function escribirDato(texto, config, fuente) {

        if (!texto) return;

        texto = String(texto);

        let tamano = config.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";

        contexto.font = `${tamano}px "${fuente}"`;

        while (
            contexto.measureText(texto).width > config.maxWidth &&
            tamano > 18
        ) {
            tamano--;
            contexto.font = `${tamano}px "${fuente}"`;
        }

        contexto.fillStyle = config.color;
        contexto.strokeStyle = config.outline;
        contexto.lineWidth = 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.fillText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.restore();
    }

    // NOMBRE
    escribirDato(
        datos.nombre,
        CONFIGURACION_B3.nombre,
        "AlwaysStarArmy"
    );

    // PAÍS
    escribirDato(
        datos.pais,
        CONFIGURACION_B3.pais,
        "AlwaysStarArmy"
    );

    // BIAS
    escribirDato(
        datos.bias,
        CONFIGURACION_B3.bias,
        "AlwaysStarArmy"
    );

    // CÓDIGO AUTOMÁTICO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B3.codigo,
        "ChiladaArmy"
    );

    // PREPARAR FOTOGRAFÍA
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

    // MOSTRAR EDITOR
    creador.classList.add("oculta");
    editor.classList.remove("oculta");

    editor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// MOSTRAR CREDENCIAL EXCLUSIVA B4
// ==========================================

async function mostrarCredencialB4(datos) {

  window.datosActualesPDF = { ...datos, plantilla: "B4" };

    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !creador || !canvas) {
        throw new Error("No se encontró el editor de B4.");
    }

    const contexto = canvas.getContext("2d");

    // CARGAR FUENTES
    await document.fonts.load('96px "CurlzArmy"');
    await document.fonts.load('66px "ArialArmy"');

    // CARGAR PLANTILLA
    const plantilla = new Image();

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar B4PLANTILLA.jpg")
        );
        plantilla.src = "./B4PLANTILLA.jpg";
    });

    canvas.width = CONFIGURACION_B4.width;
    canvas.height = CONFIGURACION_B4.height;

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ==========================================
    // DIBUJAR FOTO DEL BIAS EN EL LADO DERECHO
    // ==========================================

    const archivoBias = window.obtenerArchivoBiasB4(datos.bias);

    if (archivoBias) {

        const imagenBias = new Image();

        await new Promise((resolve, reject) => {
            imagenBias.onload = resolve;
            imagenBias.onerror = reject;
            imagenBias.src = archivoBias;
        });

        const zona = CONFIGURACION_B4.biasFoto;

        const escalaBias = Math.max(
            zona.width / imagenBias.width,
            zona.height / imagenBias.height
        );

        const anchoBias = imagenBias.width * escalaBias;
        const altoBias = imagenBias.height * escalaBias;

        const dxBias = (zona.width - anchoBias) / 2;
        const dyBias = (zona.height - altoBias) / 2;

        contexto.save();
        contexto.beginPath();
        contexto.rect(zona.x, zona.y, zona.width, zona.height);
        contexto.clip();

        contexto.drawImage(
            imagenBias,
            zona.x + dxBias,
            zona.y + dyBias,
            anchoBias,
            altoBias
        );

        contexto.restore();
    }

    // ==========================================
    // FUNCIÓN PARA ESCRIBIR DATOS B4
    // ==========================================

    function escribirDato(texto, config, fuente, esCodigo = false) {

        if (!texto) return;

        texto = String(texto);

        let tamano = config.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "${fuente}"`;

        while (
            contexto.measureText(texto).width > config.maxWidth &&
            tamano > 18
        ) {
            tamano--;
            contexto.font = `${tamano}px "${fuente}"`;
        }

        contexto.fillStyle = config.color;
        contexto.strokeStyle = config.outline;
        contexto.lineWidth = esCodigo ? 6 : 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.fillText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.restore();
    }

    // NOMBRE
    escribirDato(
        datos.nombre,
        CONFIGURACION_B4.nombre,
        "CurlzArmy"
    );

    // BIAS
    escribirDato(
        datos.bias,
        CONFIGURACION_B4.bias,
        "CurlzArmy"
    );

    // PAÍS
    escribirDato(
        datos.pais,
        CONFIGURACION_B4.pais,
        "CurlzArmy"
    );

    // CÓDIGO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B4.codigo,
        "ArialArmy",
        true
    );
  // GUARDAR DATOS ACTUALES DE B4
window.datosActualesB4 = {
    nombre: datos.nombre,
    bias: datos.bias,
    pais: datos.pais,
    codigo: datos.codigo
};

    // PREPARAR LA FOTO DEL USUARIO
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

    creador.classList.add("oculta");
    editor.classList.remove("oculta");

    editor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// MOSTRAR CREDENCIAL EXCLUSIVA B6
// ==========================================

async function mostrarCredencialB6(datos) {

    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !creador || !canvas) {
        throw new Error("No se encontró el editor de B6.");
    }

    const contexto = canvas.getContext("2d");

    // CARGAR FUENTE
    await document.fonts.load('110px "FankyBubbleArmy"');

    // CARGAR PLANTILLA
    const plantilla = new Image();

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar B6PLANTILLA.jpg")
        );
        plantilla.src = "./B6PLANTILLA.jpg";
    });

    canvas.width = CONFIGURACION_B6.width;
    canvas.height = CONFIGURACION_B6.height;

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    function escribirDato(texto, config, esCodigo = false) {

        if (!texto) return;

        texto = String(texto);

        let tamano = config.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "FankyBubbleArmy"`;

        while (
            contexto.measureText(texto).width > config.maxWidth &&
            tamano > 18
        ) {
            tamano--;
            contexto.font = `${tamano}px "FankyBubbleArmy"`;
        }

        contexto.fillStyle = config.color;
        contexto.strokeStyle = config.outline;
        contexto.lineWidth = esCodigo ? 6 : 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.fillText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.restore();
    }

    // CÓDIGO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B6.codigo,
        true
    );

    // NOMBRE
    escribirDato(
        datos.nombre,
        CONFIGURACION_B6.nombre
    );

    // BIAS
    escribirDato(
        datos.bias,
        CONFIGURACION_B6.bias
    );

      // GUARDAR DATOS PARA REDIBUJARLOS SOBRE LOS STICKERS
    window.datosActualesB6 = {
        nombre: datos.nombre,
        bias: datos.bias,
        codigo: datos.codigo
    };

  
    // ==========================================
    // GUARDAR DATOS DE B6 PARA DESCARGAR PDF
    // ==========================================

    window.datosActualesPDF = {
        plantilla: "B6",
        nombre: datos.nombre,
        pais: datos.pais,
        bias: datos.bias,
        codigo: datos.codigo
    };

  
    // PREPARAR FOTOGRAFÍA
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

    // MOSTRAR EDITOR
    creador.classList.add("oculta");
    editor.classList.remove("oculta");

    editor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// MOSTRAR CREDENCIAL EXCLUSIVA B8
// ==========================================

async function mostrarCredencialB8(datos) {

    const editor = document.getElementById("editor-credencial");
    const creador = document.getElementById("creador-credencial");
    const canvas = document.getElementById("canvas-credencial");

    if (!editor || !creador || !canvas) {
        throw new Error("No se encontró el editor de B8.");
    }

    const contexto = canvas.getContext("2d");

    // CARGAR FUENTE
    await document.fonts.load('48px "AlterCreedArmy"');
    await document.fonts.load('42px "ArialArmy"');

    // CARGAR PLANTILLA
    const plantilla = new Image();

    await new Promise((resolve, reject) => {
        plantilla.onload = resolve;
        plantilla.onerror = () => reject(
            new Error("No se pudo cargar B8PLANTILLA.jpg")
        );
        plantilla.src = "./B8PLANTILLA.jpg";
    });

    canvas.width = CONFIGURACION_B8.width;
    canvas.height = CONFIGURACION_B8.height;

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
        plantilla,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ==========================================
    // FECHA DE REGISTRO
    // ==========================================

    function formatearFechaB8(fechaEntrada) {

        const fecha = fechaEntrada
            ? new Date(fechaEntrada)
            : new Date();

        const meses = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const dia = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const anio = fecha.getFullYear();

        return `${mes} ${dia}, ${anio}`;
    }

   function escribirDato(
    texto,
    config,
    esCodigo = false,
    fuente = "AlterCreedArmy"
) {

        if (!texto) return;

        texto = String(texto);

        let tamano = config.fontSize;

        contexto.save();

        contexto.textAlign = "left";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "${fuente}"`;

        while (
            contexto.measureText(texto).width > config.maxWidth &&
            tamano > 16
        ) {
            tamano--;
            contexto.font = `${tamano}px "${fuente}"`;
        }

        
if (esCodigo) {

    // CÓDIGO: BLANCO CON BORDE ROJO
    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "#ff0000";
    contexto.lineWidth = 5;

} else {

    // DEMÁS DATOS: DEGRADADO BLANCO A GRIS
    const degradado = contexto.createLinearGradient(
        0,
        config.baselineY - tamano,
        0,
        config.baselineY
    );

    degradado.addColorStop(0, "#ffffff");
    degradado.addColorStop(0.45, "#e5e5e5");
    degradado.addColorStop(1, "#888888");

    contexto.fillStyle = degradado;
    contexto.strokeStyle = "#333333";
    contexto.lineWidth = 3;
}

contexto.lineJoin = "round";


        const x = config.centerX - (config.maxWidth / 2);

        contexto.strokeText(
            texto,
            x,
            config.baselineY,
            config.maxWidth
        );

        contexto.fillText(
            texto,
            x,
            config.baselineY,
            config.maxWidth
        );

        contexto.restore();
    }

    const fechaRegistroTexto = String(
    new Date(datos.fechaRegistro || Date.now()).getFullYear()
);
    const armyTipoTexto = datos.armyTipo || "ARMY GIRL";

    // NAME
    escribirDato(
        datos.nombre,
        CONFIGURACION_B8.nombre
    );

    // INSTA USERNAME
    escribirDato(
        armyTipoTexto,
        CONFIGURACION_B8.armyTipo
    );
  
    // MEMBERSHIP NO.
escribirDato(
    datos.codigo,
    CONFIGURACION_B8.codigo,
    true,
    "ArialArmy"
);

   // JOIN DATE
escribirDato(
    fechaRegistroTexto,
    CONFIGURACION_B8.fechaRegistro,
    false,
    "ArialArmy"
);

    // REGION
    escribirDato(
        datos.pais,
        CONFIGURACION_B8.paisRegion
    );

  
    // ==========================================
    // GUARDAR DATOS PARA STICKERS DE B8
    // ==========================================

    window.datosB8SobreStickers = {
        nombre: datos.nombre,
        armyTipo: armyTipoTexto,
        codigo: datos.codigo,
        fechaRegistro: fechaRegistroTexto,
        pais: datos.pais
    };

    
    // ==========================================
    // GUARDAR DATOS DE B8 PARA DESCARGAR PDF
    // ==========================================

    window.datosActualesPDF = {
        plantilla: "B8",
        nombre: datos.nombre,
        pais: datos.pais,
        bias: datos.bias,
        codigo: datos.codigo
    };




    // PREPARAR FOTOGRAFÍA
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

  
    // MOSTRAR EDITOR
    creador.classList.add("oculta");
    editor.classList.remove("oculta");

    editor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
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
     
    // ==========================================
    // GUARDAR DATOS DE B5 Y B10 PARA EL PDF
    // ==========================================

    window.datosActualesPDF = {
        plantilla: archivoPlantilla === "B5PLANTILLA.jpeg" ? "B5" : "B10",
        nombre: datos.nombre,
        pais: datos.pais,
        bias: datos.bias,
        codigo: datos.codigo
    };

  
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

    
 // ==========================================
 // NOMBRE B5 Y B10 - HACIA LA IZQUIERDA
 // ==========================================

escribirTextoAjustado(
    datos.nombre,
    CONFIGURACION_B5_B10.nombre.centerX - 270,
    CONFIGURACION_B5_B10.nombre.baselineY,
    CONFIGURACION_B5_B10.nombre.maxWidth
);

// ==========================================
 // BIAS B5 Y B10 - HACIA LA IZQUIERDA
 // ==========================================

escribirTextoAjustado(
    datos.bias,
    CONFIGURACION_B5_B10.bias.centerX - 210,
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

      // Guardar datos para mostrarlos encima de los stickers
    window.datosB5B10SobreStickers = {
        nombre: datos.nombre,
        bias: datos.bias,
        codigo: datos.codigo
    };

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
// VENTANA PREVIA ANTES DE DESCARGAR PDF
// ==========================================

const btnDescargarPDF = document.getElementById("btnDescargarPDF");
const modalDescargaTikTok = document.getElementById("modalDescargaTikTok");
const textoEsperaPDF = document.getElementById("textoEsperaPDF");
const btnCompartirTikTokAntesPDF = document.getElementById("btnCompartirTikTokAntesPDF");
const btnDescargarPDFAhora = document.getElementById("btnDescargarPDFAhora");
const btnCerrarModalDescargaPDF = document.getElementById("btnCerrarModalDescargaPDF");

let temporizadorEsperaPDF = null;

function dataURLaArchivo(dataURL, nombreArchivo) {

    const partes = dataURL.split(",");
    const mime = partes[0].match(/:(.*?);/)[1];
    const binario = atob(partes[1]);

    let longitud = binario.length;
    const arreglo = new Uint8Array(longitud);

    while (longitud--) {
        arreglo[longitud] = binario.charCodeAt(longitud);
    }

    return new File(
        [arreglo],
        nombreArchivo,
        { type: mime }
    );
}

function descargarArchivoTemporal(archivo) {

    const url = URL.createObjectURL(archivo);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = archivo.name;

    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
}

function cerrarModalDescargaTikTok() {

    if (temporizadorEsperaPDF) {
        clearInterval(temporizadorEsperaPDF);
        temporizadorEsperaPDF = null;
    }

    if (modalDescargaTikTok) {
        modalDescargaTikTok.classList.add("oculta");
    }

    if (btnDescargarPDFAhora) {
        btnDescargarPDFAhora.classList.add("oculta");
    }

    if (btnCerrarModalDescargaPDF) {
        btnCerrarModalDescargaPDF.classList.add("oculta");
    }
}

function abrirModalDescargaTikTok() {

    if (!window.datosActualesPDF) {
        alert("Primero abre una credencial antes de descargar el PDF. 💜");
        return;
    }

    if (!modalDescargaTikTok || !textoEsperaPDF) return;

    let segundosRestantes = 8;

    modalDescargaTikTok.classList.remove("oculta");

    if (btnDescargarPDFAhora) {
        btnDescargarPDFAhora.classList.add("oculta");
    }

    if (btnCerrarModalDescargaPDF) {
        btnCerrarModalDescargaPDF.classList.add("oculta");
    }

    textoEsperaPDF.textContent =
        "Tu PDF estará listo en " +
        segundosRestantes +
        " segundos...";

    if (temporizadorEsperaPDF) {
        clearInterval(temporizadorEsperaPDF);
    }

    temporizadorEsperaPDF = setInterval(() => {

        segundosRestantes--;

        if (segundosRestantes > 0) {

            textoEsperaPDF.textContent =
                "Tu PDF estará listo en " +
                segundosRestantes +
                " segundos...";

            return;
        }

        clearInterval(temporizadorEsperaPDF);
        temporizadorEsperaPDF = null;

        textoEsperaPDF.textContent =
            "Ya puedes descargar tu PDF 💜";

        if (btnDescargarPDFAhora) {
            btnDescargarPDFAhora.classList.remove("oculta");
        }

        if (btnCerrarModalDescargaPDF) {
            btnCerrarModalDescargaPDF.classList.remove("oculta");
        }

    }, 1000);
}

async function compartirCredencialTikTok() {

    try {

        const imagenTikTokDataURL =
            await crearImagenCredencialTikTok();

        const archivoTikTok = dataURLaArchivo(
            imagenTikTokDataURL,
            "credencial-instaarmy-tiktok.jpg"
        );

        if (
            navigator.canShare &&
            navigator.canShare({
                files: [archivoTikTok]
            })
        ) {

            await navigator.share({
                files: [archivoTikTok],
                title: "Mi credencial Insta Army",
                text: "Por fin tengo mi credencial y fue súper fácil 💜"
            });

            return;
        }

        // Si el dispositivo no soporta compartir archivos,
        // descargar la imagen y abrir TikTok como apoyo.
        descargarArchivoTemporal(archivoTikTok);

        window.open(
            "https://www.tiktok.com/upload?lang=es",
            "_blank"
        );

        alert(
            "Se descargó la imagen para TikTok. Ahora puedes subirla desde tu dispositivo. 💜"
        );

    } catch (error) {

        if (error && error.name === "AbortError") {
            return;
        }

        console.error(
            "Error al compartir en TikTok:",
            error
        );

        alert(
            "No se pudo preparar la imagen para TikTok."
        );
    }
}

if (btnDescargarPDF) {
    btnDescargarPDF.addEventListener("click", (evento) => {
        evento.preventDefault();
        abrirModalDescargaTikTok();
    });
}

if (btnCompartirTikTokAntesPDF) {
    btnCompartirTikTokAntesPDF.addEventListener(
        "click",
        async () => {
            await compartirCredencialTikTok();
        }
    );
}

if (btnDescargarPDFAhora) {
    btnDescargarPDFAhora.addEventListener(
        "click",
        async () => {
            cerrarModalDescargaTikTok();
            await descargarPDFB1();
        }
    );
}

if (btnCerrarModalDescargaPDF) {
    btnCerrarModalDescargaPDF.addEventListener(
        "click",
        () => {
            cerrarModalDescargaTikTok();
        }
    );
}
  
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
// FOTOGRAFÍA EXCLUSIVA B2
// ==========================================

function dibujarFotografiaB2(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");
   const btnDescargarPDF = document.getElementById("btn-descargar-pdf");

    const foto = CONFIGURACION_B2.fotografia;

    const x = foto.x;
    const y = foto.y;
    const ancho = foto.width;
    const alto = foto.height;

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
// ZONAS PROTEGIDAS EXCLUSIVAS B2
// SOLO LA FOTO REBOTA
// ==========================================

function obtenerZonasProtegidasB2() {
    return [
        {
            x: CONFIGURACION_B2.fotografia.x,
            y: CONFIGURACION_B2.fotografia.y,
            ancho: CONFIGURACION_B2.fotografia.width,
            alto: CONFIGURACION_B2.fotografia.height
        }
    ];
}

// ==========================================
// REDIBUJAR TEXTOS DE B2 ENCIMA DE STICKERS
// ==========================================

function dibujarTextosEncimaB2(contexto) {

    if (!window.datosCredencialActual) return;

    const datos = window.datosCredencialActual;

    function escribirDatoB2(texto, configuracion) {

        if (!texto) return;

        let tamano = configuracion.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "TangoArmy"`;

        while (
            contexto.measureText(texto).width > configuracion.maxWidth &&
            tamano > 18
        ) {
            tamano--;
            contexto.font = `${tamano}px "TangoArmy"`;
        }

        contexto.fillStyle = configuracion.color;
        contexto.strokeStyle = configuracion.outline;
        contexto.lineWidth = 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            configuracion.centerX,
            configuracion.baselineY
        );

        contexto.fillText(
            texto,
            configuracion.centerX,
            configuracion.baselineY
        );

        contexto.restore();
    }

    // NOMBRE
    escribirDatoB2(
        datos.nombre,
        CONFIGURACION_B2.nombre
    );

    // PAÍS (donde antes iba el apellido)
    escribirDatoB2(
        datos.pais,
        CONFIGURACION_B2.pais
    );

  
    // BIAS: siempre encima de los stickers
    escribirDatoB2(
        datos.bias,
        CONFIGURACION_B2.bias
    );


  
    // CÓDIGO
    escribirDatoB2(
        datos.codigo,
        CONFIGURACION_B2.codigo
    );
}
// ==========================================
// FOTOGRAFÍA EXCLUSIVA B3
// ==========================================

function dibujarFotografiaB3(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");

    const foto = CONFIGURACION_B3.fotografia;

    const x = foto.x;
    const y = foto.y;
    const ancho = foto.width;
    const alto = foto.height;

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
// FOTOGRAFÍA EXCLUSIVA B4
// ==========================================

function dibujarFotografiaB4(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");

    const foto = CONFIGURACION_B4.fotografia;

    const x = foto.x;
    const y = foto.y;
    const ancho = foto.width;
    const alto = foto.height;

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
// FOTOGRAFÍA EXCLUSIVA B6
// ==========================================

function dibujarFotografiaB6(imagen) {

    const canvas = document.getElementById("canvas-credencial");
    const contexto = canvas.getContext("2d");

    const foto = CONFIGURACION_B6.fotografia;

    const x = foto.x;
    const y = foto.y;
    const ancho = foto.width;
    const alto = foto.height;

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
 // FOTOGRAFÍA EXCLUSIVA B8
 // ==========================================

 function dibujarFotografiaB8(imagen) {

     const canvas = document.getElementById("canvas-credencial");
     const contexto = canvas.getContext("2d");

     const foto = CONFIGURACION_B8.fotografia;

     const x = foto.x;
     const y = foto.y;
     const ancho = foto.width;
     const alto = foto.height;

     // Ajustar la foto sin deformarla
     const escala = Math.max(
         ancho / imagen.width,
         alto / imagen.height
     );

     const anchoImagen = imagen.width * escala;
     const altoImagen = imagen.height * escala;

     const desplazamientoX = (ancho - anchoImagen) / 2;
     const desplazamientoY = (alto - altoImagen) / 2;

     contexto.save();

     // Mantener la fotografía dentro de su recuadro
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


if (plantillaSeleccionada === "B8.jpeg") {

    dibujarFotografiaB8(imagen);

} else if (plantillaSeleccionada === "B6.jpeg") {

    dibujarFotografiaB6(imagen);

} else if (plantillaSeleccionada === "B4.jpeg") {


    dibujarFotografiaB4(imagen);

} else if (plantillaSeleccionada === "B3.jpeg") {

    dibujarFotografiaB3(imagen);

} else if (plantillaSeleccionada === "B2.jpeg") {

    dibujarFotografiaB2(imagen);

} else if (credencialB7B9Activa) {

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

  
 // ==========================================
 // PROTECCIÓN DE STICKERS EXCLUSIVA B8
 // ==========================================

 function stickerInvadeZonaB8(x, y, ancho, alto) {

     // Las demás credenciales no se modifican
     if (plantillaSeleccionada !== "B8.jpeg") {
         return false;
     }

     const canvasFoto = document.getElementById(
         "canvas-credencial"
     );

     if (!canvasFoto || !capaStickers) {
         return false;
     }

     const rectFoto = canvasFoto.getBoundingClientRect();
     const rectCapa = capaStickers.getBoundingClientRect();

     if (
         !rectFoto.width ||
         !rectFoto.height ||
         !rectCapa.width ||
         !rectCapa.height
     ) {
         return false;
     }

     const escalaX =
         rectFoto.width / CONFIGURACION_B8.width *
         capaStickers.width / rectCapa.width;

     const escalaY =
         rectFoto.height / CONFIGURACION_B8.height *
         capaStickers.height / rectCapa.height;

     const desplazamientoX =
         (rectFoto.left - rectCapa.left) *
         capaStickers.width / rectCapa.width;

     const desplazamientoY =
         (rectFoto.top - rectCapa.top) *
         capaStickers.height / rectCapa.height;

     // Zonas protegidas de B8
     const zonas = [
         CONFIGURACION_B8.fotografia,
         { x: 370, y: 310, width: 230, height: 55 },
         { x: 370, y: 370, width: 230, height: 55 },
         { x: 370, y: 445, width: 240, height: 55 },
         { x: 370, y: 515, width: 230, height: 55 },
         { x: 370, y: 630, width: 230, height: 60 }
     ];

     return zonas.some((zona) => {

         const zx = desplazamientoX + zona.x * escalaX;
         const zy = desplazamientoY + zona.y * escalaY;
         const zw = zona.width * escalaX;
         const zh = zona.height * escalaY;

         return (
             x < zx + zw &&
             x + ancho > zx &&
             y < zy + zh &&
             y + alto > zy
         );

     });
 }

  // ==========================================
// ZONAS PROTEGIDAS EXCLUSIVAS DE B8
// ==========================================

function obtenerZonasProtegidasB8() {

    if (plantillaSeleccionada !== "B8.jpeg") {
        return [];
    }

    const foto = CONFIGURACION_B8.fotografia;

    return [
        // FOTO PRINCIPAL: aquí sí debe rebotar
        {
            x: foto.x,
            y: foto.y,
            width: foto.width,
            height: foto.height
        },

        // ZONA INFERIOR: QR + SPOTIFY
        // Aquí también debe rebotar
        {
            x: 390,
            y: 760,
            width: 250,
            height: 180
        }
    ];
}


// ==========================================
// COMPROBAR ZONAS PROTEGIDAS DE B8
// ==========================================

function stickerInvadeZonaB8(x, y, ancho, alto) {

    if (plantillaSeleccionada !== "B8.jpeg") {
        return false;
    }

    const canvasFoto = document.getElementById("canvas-credencial");

    if (!canvasFoto || !capaStickers) return false;

    const rectFoto = canvasFoto.getBoundingClientRect();
    const rectCapa = capaStickers.getBoundingClientRect();

    if (
        !rectFoto.width ||
        !rectFoto.height ||
        !rectCapa.width ||
        !rectCapa.height
    ) {
        return true;
    }

    const escalaX =
        (rectFoto.width / CONFIGURACION_B8.width) *
        (capaStickers.width / rectCapa.width);

    const escalaY =
        (rectFoto.height / CONFIGURACION_B8.height) *
        (capaStickers.height / rectCapa.height);

    const desplazamientoX =
        (rectFoto.left - rectCapa.left) *
        capaStickers.width / rectCapa.width;

    const desplazamientoY =
        (rectFoto.top - rectCapa.top) *
        capaStickers.height / rectCapa.height;

    return obtenerZonasProtegidasB8().some((zona) => {

        const zx = desplazamientoX + zona.x * escalaX;
        const zy = desplazamientoY + zona.y * escalaY;
        const zw = zona.width * escalaX;
        const zh = zona.height * escalaY;

        return (
            x < zx + zw &&
            x + ancho > zx &&
            y < zy + zh &&
            y + alto > zy
        );

    });
}
  
 // ==========================================
 // ZONAS PROTEGIDAS EXCLUSIVAS DE B1
 // ==========================================

 function obtenerZonasProtegidasB1() {

     if (plantillaSeleccionada !== "B1.jpeg") {
         return [];
     }

     return [

         // FOTOGRAFÍA
         {
             x: 25,
             y: 209,
             width: 273,
             height: 365
         },

         // CÓDIGO QR
         {
             x: 20,
             y: 675,
             width: 285,
             height: 280
         },

         // SPOTIFY
         {
             x: 30,
             y: 985,
             width: 375,
             height: 90
         }

     ];
 }

function obtenerZonasProtegidasB3() {
    return [
        // FOTO CENTRAL
        {
            x: 298,
            y: 240,
            width: 285,
            height: 343
        },

        // QR INFERIOR IZQUIERDO
        {
            x: 30,
            y: 885,
            width: 230,
            height: 220
        },

        // SPOTIFY INFERIOR DERECHO
        {
            x: 565,
            y: 945,
            width: 275,
            height: 100
        }
    ];
}
function stickerInvadeZonaProtegida(x, y, ancho, alto) {

    // Mantener la protección de B8 como ya funciona
    if (plantillaSeleccionada === "B8.jpeg") {
        return stickerInvadeZonaB8(x, y, ancho, alto);
    }

    let zonas = [];
    let anchoBase = 880;
    let altoBase = 1204;

    if (plantillaSeleccionada === "B1.jpeg") {
        zonas = obtenerZonasProtegidasB1();
        anchoBase = 880;
        altoBase = 1204;
    } else if (plantillaSeleccionada === "B2.jpeg") {
        zonas = obtenerZonasProtegidasB2();
        anchoBase = CONFIGURACION_B2.width;
        altoBase = CONFIGURACION_B2.height;
    
} else if (plantillaSeleccionada === "B3.jpeg") {
    zonas = obtenerZonasProtegidasB3();
    anchoBase = CONFIGURACION_B3.width;
    altoBase = CONFIGURACION_B3.height;


} else if (plantillaSeleccionada === "B4.jpeg") {
    zonas = obtenerZonasProtegidasB4();
    anchoBase = CONFIGURACION_B4.width;
    altoBase = CONFIGURACION_B4.height;


} else if (
    plantillaSeleccionada === "B5.jpeg" ||
    plantillaSeleccionada === "B10.jpeg"
) {
    zonas = obtenerZonasProtegidasB5B10();

    anchoBase = CONFIGURACION_B5_B10.imagen.width;
    altoBase = CONFIGURACION_B5_B10.imagen.height;


} else if (plantillaSeleccionada === "B6.jpeg") {

    zonas = obtenerZonasProtegidasB6();

    anchoBase = CONFIGURACION_B6.width;
    altoBase = CONFIGURACION_B6.height;

} else if (
    plantillaSeleccionada === "B7.jpeg" ||
    plantillaSeleccionada === "B9.jpeg"
) {

    // B7 y B9: fotografía, QR y Spotify
    zonas = obtenerZonasProtegidasB7B9();

    anchoBase = CONFIGURACION_B7_B9.width;
    altoBase = CONFIGURACION_B7_B9.height;

} else {
    return false;
}





    const canvasFoto = document.getElementById("canvas-credencial");

    if (!canvasFoto || !capaStickers) return false;

    const rectFoto = canvasFoto.getBoundingClientRect();
    const rectCapa = capaStickers.getBoundingClientRect();

    if (
        !rectFoto.width ||
        !rectFoto.height ||
        !rectCapa.width ||
        !rectCapa.height
    ) {
        return true;
    }

    const escalaX =
        (rectFoto.width / anchoBase) *
        (capaStickers.width / rectCapa.width);

    const escalaY =
        (rectFoto.height / altoBase) *
        (capaStickers.height / rectCapa.height);

    const desplazamientoX =
        (rectFoto.left - rectCapa.left) *
        capaStickers.width / rectCapa.width;

    const desplazamientoY =
        (rectFoto.top - rectCapa.top) *
        capaStickers.height / rectCapa.height;

    return zonas.some((zona) => {

        const zx = desplazamientoX + zona.x * escalaX;
        const zy = desplazamientoY + zona.y * escalaY;
        const zw = zona.width * escalaX;
        const zh = zona.height * escalaY;

        return (
            x < zx + zw &&
            x + ancho > zx &&
            y < zy + zh &&
            y + alto > zy
        );
    });
}



let imagenStickersActiva = null;
  let datosActualesB3 = null;
let stickerArrastrado = null;
  let posicionSeguraArrastre = null;
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

    // B1: mostrar datos encima de los stickers
    if (plantillaSeleccionada === "B1.jpeg") {
        dibujarDatosB1SobreStickers(contexto);
    }

    // B2: mostrar nombre, país, bias y código encima
    if (plantillaSeleccionada === "B2.jpeg") {
        dibujarTextosEncimaB2(contexto);
    }

    // B3: mostrar nombre, país, bias y código encima
    if (plantillaSeleccionada === "B3.jpeg") {
        dibujarDatosB3SobreStickers(contexto);
    }
  
  if (plantillaSeleccionada === "B4.jpeg") {
    dibujarDatosB4SobreStickers(contexto);
}
      if (
        plantillaSeleccionada === "B5.jpeg" ||
        plantillaSeleccionada === "B10.jpeg"
    ) {
        dibujarDatosB5B10SobreStickers(contexto);
    }
  if (plantillaSeleccionada === "B6.jpeg") {
    dibujarDatosB6SobreStickers(contexto);
}

  
    // B7 y B9: textos por encima de los stickers
    if (
        plantillaSeleccionada === "B7.jpeg" ||
        plantillaSeleccionada === "B9.jpeg"
    ) {
        dibujarDatosB7B9SobreStickers(contexto);
    }

  
    // B8: textos siempre encima de los stickers
    if (plantillaSeleccionada === "B8.jpeg") {
        dibujarDatosB8SobreStickers(contexto);
    }

  
}
// ==========================================
// TEXTOS DE B4 POR ENCIMA DE LOS STICKERS
// ==========================================

function dibujarDatosB4SobreStickers(contexto) {

    if (
        plantillaSeleccionada !== "B4.jpeg" ||
        !window.datosActualesB4
    ) {
        return;
    }

    const datos = window.datosActualesB4;

    const canvasBase = document.getElementById("canvas-credencial");

    if (!canvasBase || !capaStickers) return;

    const rectBase = canvasBase.getBoundingClientRect();
    const rectCapa = capaStickers.getBoundingClientRect();

    if (
        !rectBase.width ||
        !rectBase.height ||
        !rectCapa.width ||
        !rectCapa.height
    ) return;

    const escalaX =
        rectBase.width / CONFIGURACION_B4.width *
        capaStickers.width / rectCapa.width;

    const escalaY =
        rectBase.height / CONFIGURACION_B4.height *
        capaStickers.height / rectCapa.height;

    const desplazamientoX =
        (rectBase.left - rectCapa.left) *
        capaStickers.width / rectCapa.width;

    const desplazamientoY =
        (rectBase.top - rectCapa.top) *
        capaStickers.height / rectCapa.height;

    contexto.save();

    contexto.setTransform(
        escalaX,
        0,
        0,
        escalaY,
        desplazamientoX,
        desplazamientoY
    );

    function escribirDato(texto, config, fuente, esCodigo = false) {

        texto = String(texto || "");

        let tamano = config.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "${fuente}"`;

        while (
            contexto.measureText(texto).width > config.maxWidth &&
            tamano > 18
        ) {
            tamano--;
            contexto.font = `${tamano}px "${fuente}"`;
        }

        contexto.fillStyle = config.color;
        contexto.strokeStyle = config.outline;
        contexto.lineWidth = esCodigo ? 6 : 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.fillText(
            texto,
            config.centerX,
            config.baselineY,
            config.maxWidth
        );

        contexto.restore();
    }

    // NOMBRE
    escribirDato(
        datos.nombre,
        CONFIGURACION_B4.nombre,
        "CurlzArmy"
    );

    // BIAS
    escribirDato(
        datos.bias,
        CONFIGURACION_B4.bias,
        "CurlzArmy"
    );

    // PAÍS
    escribirDato(
        datos.pais,
        CONFIGURACION_B4.pais,
        "CurlzArmy"
    );

    // CÓDIGO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B4.codigo,
        "ArialArmy",
        true
    );

    contexto.restore();
}
// ==========================================
// TEXTOS DE B5 Y B10 POR ENCIMA DE LOS STICKERS
// ==========================================

function dibujarDatosB5B10SobreStickers(contexto) {

    if (
        (plantillaSeleccionada !== "B5.jpeg" &&
         plantillaSeleccionada !== "B10.jpeg") ||
        !window.datosB5B10SobreStickers
    ) {
        return;
    }

    const datos = window.datosB5B10SobreStickers;

    const canvasBase = document.getElementById("canvas-credencial");

    if (!canvasBase || !capaStickers) return;

    const rectBase = canvasBase.getBoundingClientRect();
    const rectStickers = capaStickers.getBoundingClientRect();

    if (
        !rectBase.width ||
        !rectBase.height ||
        !rectStickers.width ||
        !rectStickers.height
    ) return;

    const escalaX =
        rectBase.width / CONFIGURACION_B5_B10.imagen.width *
        capaStickers.width / rectStickers.width;

    const escalaY =
        rectBase.height / CONFIGURACION_B5_B10.imagen.height *
        capaStickers.height / rectStickers.height;

    const desplazamientoX =
        (rectBase.left - rectStickers.left) *
        capaStickers.width / rectStickers.width;

    const desplazamientoY =
        (rectBase.top - rectStickers.top) *
        capaStickers.height / rectStickers.height;

    contexto.save();

    contexto.setTransform(
        escalaX,
        0,
        0,
        escalaY,
        desplazamientoX,
        desplazamientoY
    );

    // ESTILO GENERAL
    contexto.textAlign = "center";
    contexto.textBaseline = "alphabetic";
    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "transparent";
    contexto.lineWidth = 0;

    function escribirTextoAjustado(texto, centroX, baselineY, anchoMaximo) {

        texto = String(texto || "");

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
        CONFIGURACION_B5_B10.nombre.centerX - 270,
        CONFIGURACION_B5_B10.nombre.baselineY,
        CONFIGURACION_B5_B10.nombre.maxWidth
    );

    // BIAS
    escribirTextoAjustado(
        datos.bias,
        CONFIGURACION_B5_B10.bias.centerX - 210,
        CONFIGURACION_B5_B10.bias.baselineY,
        CONFIGURACION_B5_B10.bias.maxWidth
    );

    // CÓDIGO
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

    contexto.restore();
}

  // ==========================================
// TEXTOS DE B6 POR ENCIMA DE LOS STICKERS
// ==========================================

function dibujarDatosB6SobreStickers(contexto) {

    if (
        plantillaSeleccionada !== "B6.jpeg" ||
        !window.datosActualesB6
    ) {
        return;
    }

    const datos = window.datosActualesB6;

    const canvasBase = document.getElementById("canvas-credencial");

    if (!canvasBase || !capaStickers) return;

    const rectBase = canvasBase.getBoundingClientRect();
    const rectCapa = capaStickers.getBoundingClientRect();

    if (
        !rectBase.width ||
        !rectBase.height ||
        !rectCapa.width ||
        !rectCapa.height
    ) return;

    const escalaX =
        rectBase.width / CONFIGURACION_B6.width *
        capaStickers.width / rectCapa.width;

    const escalaY =
        rectBase.height / CONFIGURACION_B6.height *
        capaStickers.height / rectCapa.height;

    const desplazamientoX =
        (rectBase.left - rectCapa.left) *
        capaStickers.width / rectCapa.width;

    const desplazamientoY =
        (rectBase.top - rectCapa.top) *
        capaStickers.height / rectCapa.height;

    contexto.save();

    contexto.setTransform(
        escalaX,
        0,
        0,
        escalaY,
        desplazamientoX,
        desplazamientoY
    );

    function escribirDato(texto, configuracion, esCodigo = false) {

        texto = String(texto || "");

        let tamano = configuracion.fontSize;

        contexto.save();

        contexto.textAlign = "center";
        contexto.textBaseline = "alphabetic";
        contexto.font = `${tamano}px "${CONFIGURACION_B6.fuente}"`;

        while (
            contexto.measureText(texto).width > configuracion.maxWidth &&
            tamano > 18
        ) {
            tamano--;
            contexto.font = `${tamano}px "${CONFIGURACION_B6.fuente}"`;
        }

        contexto.fillStyle = configuracion.color;
        contexto.strokeStyle = configuracion.outline;
        contexto.lineWidth = esCodigo ? 6 : 5;
        contexto.lineJoin = "round";

        contexto.strokeText(
            texto,
            configuracion.centerX,
            configuracion.baselineY
        );

        contexto.fillText(
            texto,
            configuracion.centerX,
            configuracion.baselineY
        );

        contexto.restore();
    }

    // CÓDIGO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B6.codigo,
        true
    );

    // NOMBRE
    escribirDato(
        datos.nombre,
        CONFIGURACION_B6.nombre
    );

    // BIAS
    escribirDato(
        datos.bias,
        CONFIGURACION_B6.bias
    );

    contexto.restore();
}
  
// ==========================================
// TEXTOS DE B1 POR ENCIMA DE LOS STICKERS
// ==========================================

function dibujarDatosB1SobreStickers(contexto) {

    if (plantillaSeleccionada !== "B1.jpeg") return;

    const datos = window.datosB1SobreStickers;

    if (!datos || !capaStickers) return;

    const canvasBase = document.getElementById(
        "canvas-credencial"
    );

    if (!canvasBase) return;

    const rectBase = canvasBase.getBoundingClientRect();
    const rectStickers = capaStickers.getBoundingClientRect();

    if (
        !rectBase.width ||
        !rectBase.height ||
        !rectStickers.width ||
        !rectStickers.height
    ) return;

    // Alinear los textos con la credencial original
    const escalaX =
        rectBase.width / canvasBase.width *
        capaStickers.width / rectStickers.width;

    const escalaY =
        rectBase.height / canvasBase.height *
        capaStickers.height / rectStickers.height;

    const desplazamientoX =
        (rectBase.left - rectStickers.left) *
        capaStickers.width / rectStickers.width;

    const desplazamientoY =
        (rectBase.top - rectStickers.top) *
        capaStickers.height / rectStickers.height;

    contexto.save();

    contexto.setTransform(
        escalaX,
        0,
        0,
        escalaY,
        desplazamientoX,
        desplazamientoY
    );

    contexto.textAlign = "center";
    contexto.textBaseline = "bottom";

    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "#c58aff";
    contexto.lineJoin = "round";
    contexto.lineWidth = 3;

    // Mismo ajuste de textos que ya tiene B1
    function escribirTexto(texto, x, y, anchoMaximo) {

        texto = String(texto || "");

        let tamano = 68;

        contexto.font = `${tamano}px "MilasianArmy"`;

        while (
            contexto.measureText(texto).width > anchoMaximo &&
            tamano > 30
        ) {
            tamano--;
            contexto.font = `${tamano}px "MilasianArmy"`;
        }

        contexto.strokeText(texto, x, y);
        contexto.fillText(texto, x, y);
    }

    // NOMBRE
    escribirTexto(datos.nombre, 603, 430, 536);

    // PAÍS
    escribirTexto(datos.pais, 603, 692, 536);

    // BIAS
    escribirTexto(datos.bias, 603, 933, 536);

    // CÓDIGO PERSONAL
    contexto.textBaseline = "middle";
    contexto.font = '32px "MoliendaArmy"';

    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "#ff0000";
    contexto.lineWidth = 6;
    contexto.lineJoin = "round";

    contexto.strokeText(datos.codigo, 160, 630, 270);
    contexto.fillText(datos.codigo, 160, 630, 270);

    contexto.restore();
}


  
// ==========================================
// TEXTOS DE B1 POR ENCIMA DE LOS STICKERS
// ==========================================

function dibujarDatosB1SobreStickers(contexto) {

    if (plantillaSeleccionada !== "B1.jpeg") return;

    const datos = window.datosB1SobreStickers;

    if (!datos || !capaStickers) return;

    const canvasBase = document.getElementById(
        "canvas-credencial"
    );

    if (!canvasBase) return;

    const rectBase = canvasBase.getBoundingClientRect();
    const rectStickers = capaStickers.getBoundingClientRect();

    if (
        !rectBase.width ||
        !rectBase.height ||
        !rectStickers.width ||
        !rectStickers.height
    ) return;

    // Alinear los textos con la credencial original
    const escalaX =
        rectBase.width / canvasBase.width *
        capaStickers.width / rectStickers.width;

    const escalaY =
        rectBase.height / canvasBase.height *
        capaStickers.height / rectStickers.height;

    const desplazamientoX =
        (rectBase.left - rectStickers.left) *
        capaStickers.width / rectStickers.width;

    const desplazamientoY =
        (rectBase.top - rectStickers.top) *
        capaStickers.height / rectStickers.height;

    contexto.save();

    contexto.setTransform(
        escalaX,
        0,
        0,
        escalaY,
        desplazamientoX,
        desplazamientoY
    );

    contexto.textAlign = "center";
    contexto.textBaseline = "bottom";

    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "#c58aff";
    contexto.lineJoin = "round";
    contexto.lineWidth = 3;

    // Mismo ajuste de textos que ya tiene B1
    function escribirTexto(texto, x, y, anchoMaximo) {

        texto = String(texto || "");

        let tamano = 68;

        contexto.font = `${tamano}px "MilasianArmy"`;

        while (
            contexto.measureText(texto).width > anchoMaximo &&
            tamano > 30
        ) {
            tamano--;
            contexto.font = `${tamano}px "MilasianArmy"`;
        }

        contexto.strokeText(texto, x, y);
        contexto.fillText(texto, x, y);
    }

    // NOMBRE
    escribirTexto(datos.nombre, 603, 430, 536);

    // PAÍS
    escribirTexto(datos.pais, 603, 692, 536);

    // BIAS
    escribirTexto(datos.bias, 603, 933, 536);

    // CÓDIGO PERSONAL
    contexto.textBaseline = "middle";
    contexto.font = '32px "MoliendaArmy"';

    contexto.fillStyle = "#ffffff";
    contexto.strokeStyle = "#ff0000";
    contexto.lineWidth = 6;
    contexto.lineJoin = "round";

    contexto.strokeText(datos.codigo, 160, 630, 270);
    contexto.fillText(datos.codigo, 160, 630, 270);

    contexto.restore();
}


 // ==========================================
 // TEXTOS EXCLUSIVOS B3 SOBRE LOS STICKERS
 // ==========================================

 function dibujarDatosB3SobreStickers(contexto) {

     if (
         plantillaSeleccionada !== "B3.jpeg" ||
         !window.datosActualesB3
     ) {
         return;
     }

     const datos = window.datosActualesB3;

     const canvasBase = document.getElementById(
         "canvas-credencial"
     );

     if (!canvasBase || !capaStickers) return;

     const rectBase = canvasBase.getBoundingClientRect();
     const rectCapa = capaStickers.getBoundingClientRect();

     if (
         !rectBase.width ||
         !rectBase.height ||
         !rectCapa.width ||
         !rectCapa.height
     ) return;

     const escalaX =
         rectBase.width / CONFIGURACION_B3.width *
         capaStickers.width / rectCapa.width;

     const escalaY =
         rectBase.height / CONFIGURACION_B3.height *
         capaStickers.height / rectCapa.height;

     const desplazamientoX =
         (rectBase.left - rectCapa.left) *
         capaStickers.width / rectCapa.width;

     const desplazamientoY =
         (rectBase.top - rectCapa.top) *
         capaStickers.height / rectCapa.height;

     contexto.save();

     contexto.setTransform(
         escalaX,
         0,
         0,
         escalaY,
         desplazamientoX,
         desplazamientoY
     );

     function escribirDato(texto, configuracion, fuente, esCodigo = false) {

         texto = String(texto || "");

         let tamano = configuracion.fontSize;

         contexto.save();

         contexto.textAlign = "center";
         contexto.textBaseline = "alphabetic";

         contexto.font = `${tamano}px "${fuente}"`;

         while (
             contexto.measureText(texto).width > configuracion.maxWidth &&
             tamano > 18
         ) {
             tamano--;
             contexto.font = `${tamano}px "${fuente}"`;
         }

         contexto.fillStyle = configuracion.color;
         contexto.strokeStyle = configuracion.outline;
         contexto.lineWidth = esCodigo ? 5 : 4;
         contexto.lineJoin = "round";

         contexto.strokeText(
             texto,
             configuracion.centerX,
             configuracion.baselineY
         );

         contexto.fillText(
             texto,
             configuracion.centerX,
             configuracion.baselineY
         );

         contexto.restore();
     }

     // BIAS
     escribirDato(
         datos.bias,
         CONFIGURACION_B3.bias,
         "Always in the Star"
     );

     // CÓDIGO
     escribirDato(
         datos.codigo,
         CONFIGURACION_B3.codigo,
         "Chilada ICG Dos Regular",
         true
     );

     // PAÍS
     escribirDato(
         datos.pais,
         CONFIGURACION_B3.pais,
         "Always in the Star"
     );

     // NOMBRE
     escribirDato(
         datos.nombre,
         CONFIGURACION_B3.nombre,
         "Always in the Star"
     );

     contexto.restore();
 }


 // ==========================================
 // TEXTOS B7 Y B9 ENCIMA DE LOS STICKERS
 // ALINEADOS CON LA CREDENCIAL ORIGINAL
 // ==========================================

function dibujarDatosB7B9SobreStickers(contexto) {

    if (
        plantillaSeleccionada !== "B7.jpeg" &&
        plantillaSeleccionada !== "B9.jpeg"
    ) {
        return;
    }

    const datos = window.datosB7B9SobreStickers;

    if (!datos || !capaStickers) return;

    const canvasBase =
        document.getElementById("canvas-credencial");

    if (!canvasBase) return;

    const rectBase = canvasBase.getBoundingClientRect();
    const rectCapa = capaStickers.getBoundingClientRect();

    if (
        !rectBase.width ||
        !rectBase.height ||
        !rectCapa.width ||
        !rectCapa.height
    ) {
        return;
    }

    // Convertir las coordenadas del canvas original
    // a la capa de stickers.

    const escalaX =
        (rectBase.width / canvasBase.width) *
        (capaStickers.width / rectCapa.width);

    const escalaY =
        (rectBase.height / canvasBase.height) *
        (capaStickers.height / rectCapa.height);

    const desplazamientoX =
        (rectBase.left - rectCapa.left) *
        capaStickers.width / rectCapa.width;

    const desplazamientoY =
        (rectBase.top - rectCapa.top) *
        capaStickers.height / rectCapa.height;

    const escalaOriginalX =
        canvasBase.width / CONFIGURACION_B7_B9.width;

    const escalaOriginalY =
        canvasBase.height / CONFIGURACION_B7_B9.height;

    contexto.save();

    contexto.setTransform(
        escalaX,
        0,
        0,
        escalaY,
        desplazamientoX,
        desplazamientoY
    );

    // MISMA FUNCIÓN DE TEXTO QUE LA CREDENCIAL

    function escribirDato(texto, configuracion, esCodigo = false) {

        if (!texto) return;

        texto = String(texto);

        const x =
            configuracion.centerX * escalaOriginalX;

        const y =
            configuracion.baselineY * escalaOriginalY;

        const anchoMaximo =
            configuracion.maxWidth * escalaOriginalX;

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

    // CÓDIGO
    escribirDato(
        datos.codigo,
        CONFIGURACION_B7_B9.codigo,
        true
    );

    // PAÍS
    escribirDato(
        datos.pais,
        CONFIGURACION_B7_B9.pais
    );

    // NOMBRE: MISMA POSICIÓN QUE EL ORIGINAL
    escribirDato(
        datos.nombre,
        {
            ...CONFIGURACION_B7_B9.nombre,
            centerX: 165
        }
    );

    // BIAS: MISMA POSICIÓN QUE EL ORIGINAL
    escribirDato(
        datos.bias,
        {
            ...CONFIGURACION_B7_B9.bias,
            centerX: 240
        }
    );

    contexto.restore();
}


  
 // ==========================================
 // TEXTOS DE B8 POR ENCIMA DE LOS STICKERS
 // ==========================================

 function dibujarDatosB8SobreStickers(contexto) {

     if (
         plantillaSeleccionada !== "B8.jpeg" ||
         !window.datosB8SobreStickers
     ) {
         return;
     }

     const datos = window.datosB8SobreStickers;

     const canvasBase = document.getElementById(
         "canvas-credencial"
     );

     if (!canvasBase || !capaStickers) return;

     const rectBase = canvasBase.getBoundingClientRect();
     const rectCapa = capaStickers.getBoundingClientRect();

     if (
         !rectBase.width ||
         !rectBase.height ||
         !rectCapa.width ||
         !rectCapa.height
     ) return;

     // Convertir las coordenadas de B8 a la capa de stickers
     const escalaX =
         rectBase.width / CONFIGURACION_B8.width *
         capaStickers.width / rectCapa.width;

     const escalaY =
         rectBase.height / CONFIGURACION_B8.height *
         capaStickers.height / rectCapa.height;

     const desplazamientoX =
         (rectBase.left - rectCapa.left) *
         capaStickers.width / rectCapa.width;

     const desplazamientoY =
         (rectBase.top - rectCapa.top) *
         capaStickers.height / rectCapa.height;

     contexto.save();

     contexto.setTransform(
         escalaX,
         0,
         0,
         escalaY,
         desplazamientoX,
         desplazamientoY
     );

     // Misma función de texto que utiliza B8 originalmente
     function escribirDato(
         texto,
         config,
         esCodigo = false,
         fuente = "AlterCreedArmy"
     ) {

         if (!texto) return;

         texto = String(texto);

         let tamano = config.fontSize;

         contexto.save();

         contexto.textAlign = "left";
         contexto.textBaseline = "alphabetic";
         contexto.font = `${tamano}px "${fuente}"`;

         while (
             contexto.measureText(texto).width > config.maxWidth &&
             tamano > 16
         ) {
             tamano--;
             contexto.font = `${tamano}px "${fuente}"`;
         }

         if (esCodigo) {

             contexto.fillStyle = "#ffffff";
             contexto.strokeStyle = "#ff0000";
             contexto.lineWidth = 5;

         } else {

             // Degradado original de B8
             const degradado = contexto.createLinearGradient(
                 0,
                 config.baselineY - tamano,
                 0,
                 config.baselineY
             );

             degradado.addColorStop(0, "#ffffff");
             degradado.addColorStop(0.45, "#e5e5e5");
             degradado.addColorStop(1, "#888888");

             contexto.fillStyle = degradado;
             contexto.strokeStyle = "#333333";
             contexto.lineWidth = 3;
         }

         contexto.lineJoin = "round";

         const x = config.centerX - (config.maxWidth / 2);

         contexto.strokeText(
             texto,
             x,
             config.baselineY,
             config.maxWidth
         );

         contexto.fillText(
             texto,
             x,
             config.baselineY,
             config.maxWidth
         );

         contexto.restore();
     }

     // NOMBRE
     escribirDato(
         datos.nombre,
         CONFIGURACION_B8.nombre
     );

     // TIPO DE ARMY
     escribirDato(
         datos.armyTipo,
         CONFIGURACION_B8.armyTipo
     );

     // CÓDIGO PERSONAL
     escribirDato(
         datos.codigo,
         CONFIGURACION_B8.codigo,
         true,
         "ArialArmy"
     );

     // AÑO DE REGISTRO
     escribirDato(
         datos.fechaRegistro,
         CONFIGURACION_B8.fechaRegistro,
         false,
         "ArialArmy"
     );

     // REGIÓN
     escribirDato(
         datos.pais,
         CONFIGURACION_B8.paisRegion
     );

     contexto.restore();
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

// ==========================================
// COLOCAR STICKERS SIN CÍRCULOS OBLIGATORIOS
// ==========================================

function colocarSticker(sticker, imagen) {

     // Máximo 2 stickers para B7 y B9.
     // Máximo 3 para las demás credenciales.
     const maximoStickers =
         plantillaSeleccionada === "B7.jpeg" ||
         plantillaSeleccionada === "B9.jpeg"
             ? 2
             : 3;

     if (stickersColocados.length >= maximoStickers) {
         alert(
             "Puedes colocar un máximo de " +
             maximoStickers +
             " stickers en esta credencial. 💜"
         );
         return;
     }

     // Tamaños de referencia de las imágenes PNG
     const tamanoBase =
         imagen === imagenesStickers.jungkook ? 2047 :
         imagen === imagenesStickers.rm ? 2048 :
         imagen === imagenesStickers.ot7 ? 1097 :
         imagen === imagenesStickers.jhope ? 1462 :
         imagen === imagenesStickers.v ? 1097 :
         imagen === imagenesStickers.jimin ? 1240 :
         imagen === imagenesStickers.jin ? 1240 :
         imagen === imagenesStickers.suga ? 1240 :
         3464;

     const escalaX = imagen.naturalWidth / tamanoBase;
     const escalaY = imagen.naturalHeight / tamanoBase;

     const origenX = sticker.x * escalaX;
     const origenY = sticker.y * escalaY;
     const origenAncho = sticker.width * escalaX;
     const origenAlto = sticker.height * escalaY;

     // Tamaño inicial, conservando proporciones
     const escala = Math.min(
         180 / origenAncho,
         180 / origenAlto
     );

     const ancho = origenAncho * escala;
     const alto = origenAlto * escala;

     // Posiciones iniciales provisionales
     const posiciones = [
         { x: 10, y: 10 },
         { x: capaStickers.width - ancho - 10, y: 10 },
         {
             x: 10,
             y: capaStickers.height - alto - 10
         }
     ];

     
     // Buscar una posición inicial libre y permitida
     let posicion = null;

     const margen = 10;
     const paso = 15;

     for (
         let py = margen;
         py <= capaStickers.height - alto - margen;
         py += paso
     ) {

         for (
             let px = margen;
             px <= capaStickers.width - ancho - margen;
             px += paso
         ) {

             // Evitar zonas protegidas de B8
             if (stickerInvadeZonaB8(px, py, ancho, alto)) {
                 continue;
             }

             // Evitar superponer los stickers existentes
             const ocupado = stickersColocados.some((otro) => (
                 px < otro.x + otro.ancho &&
                 px + ancho > otro.x &&
                 py < otro.y + otro.alto &&
                 py + alto > otro.y
             ));

             if (!ocupado) {
                 posicion = { x: px, y: py };
                 break;
             }
         }

         if (posicion) break;
     }

     if (!posicion) {
         alert("No hay espacio libre para colocar otro sticker. 💜");
         return;
     }


     const x = Math.max(
         0,
         Math.min(
             posicion.x,
             capaStickers.width - ancho
         )
     );

     const y = Math.max(
         0,
         Math.min(
             posicion.y,
             capaStickers.height - alto
         )
     );

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
         zonaId: null
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



imagenesStickers[biasSeleccionado] = imagen;

}

            imagenStickersActiva = imagen;

let coordenadasActuales;

if (biasSeleccionado === "jhope") {
   coordenadasActuales = COORDENADAS_JHOPE_NUEVOS.slice(0, 9);
} else if (biasSeleccionado === "jin") {
    coordenadasActuales = COORDENADAS_JIN_NUEVOS.slice(0, 9);
} else if (biasSeleccionado === "v") {
    coordenadasActuales = COORDENADAS_V_NUEVOS.slice(0, 9);
} else if (biasSeleccionado === "jimin") {
    coordenadasActuales = COORDENADAS_JIMIN_NUEVOS.slice(0, 9);
} else if (biasSeleccionado === "suga") {
    coordenadasActuales = COORDENADAS_SUGA_NUEVOS.slice(0, 8);
} else if (biasSeleccionado === "ot7") {
    coordenadasActuales = COORDENADAS_OT7_NUEVOS.slice(0, 7);
} else if (biasSeleccionado === "rm") {
    coordenadasActuales = COORDENADAS_RM_NUEVOS.slice(0, 9);
} else if (biasSeleccionado === "jungkook") {
    coordenadasActuales = COORDENADAS_JUNGKOOK_NUEVOS.slice(0, 9);
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

      
    // ==========================================
    // ESCALA PARA LAS MINIATURAS
    // ==========================================
  

const tamanoBase =
    biasSeleccionado === "jungkook" ? 2047 :
    biasSeleccionado === "rm" ? 2048 :
    biasSeleccionado === "ot7" ? 1097 :
    biasSeleccionado === "jhope" ? 1462 :
    biasSeleccionado === "v" ? 1097 :
    biasSeleccionado === "jimin" ? 1240 :
    biasSeleccionado === "jin" ? 1240 :
    biasSeleccionado === "suga" ? 1240 :
    3464;




  
    const escalaX = imagen.naturalWidth / tamanoBase;
    const escalaY = imagen.naturalHeight / tamanoBase;


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
// FOTOS DE BIAS PARA LA CREDENCIAL B4
// ==========================================

const ARCHIVOS_BIAS_B4 = {
    jin: "./kimseokjin-jin.jpg",
    v: "./kimtaehyung-v.jpg",
    suga: "./minyoongi-suga.jpg",
    jimin: "./parkjimin.jpg",
    jungkook: "./jeonjungook.jpg",
    jhope: "./junghoseok-jhope.jpg",
    rm: "./kimnamjoon-rm.jpg",
    ot7: "./bts-ot7.jpg"
};

function obtenerArchivoBiasB4(bias) {

    const texto = (bias || "")
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    if (texto.includes("OT7") || texto.includes("BTS")) {
        return ARCHIVOS_BIAS_B4.ot7;
    }

    if (texto.includes("JIN") || texto.includes("SEOKJIN")) {
        return ARCHIVOS_BIAS_B4.jin;
    }

    if (texto.includes("TAEHYUNG") || texto === "V") {
        return ARCHIVOS_BIAS_B4.v;
    }

    if (texto.includes("SUGA") || texto.includes("YOONGI")) {
        return ARCHIVOS_BIAS_B4.suga;
    }

    if (texto.includes("JIMIN")) {
        return ARCHIVOS_BIAS_B4.jimin;
    }

    if (
        texto.includes("JUNGKOOK") ||
        texto.includes("JUNGOOK") ||
        texto.includes("JEON") ||
        texto === "JK"
    ) {
        return ARCHIVOS_BIAS_B4.jungkook;
    }

    if (
        texto.includes("JHOPE") ||
        texto.includes("J-HOPE") ||
        texto.includes("HOSEOK")
    ) {
        return ARCHIVOS_BIAS_B4.jhope;
    }

    if (
        texto.includes("NAMJOON") ||
        texto === "RM"
    ) {
        return ARCHIVOS_BIAS_B4.rm;
    }

    return ARCHIVOS_BIAS_B4.ot7;
}
 window.obtenerArchivoBiasB4 = obtenerArchivoBiasB4;

  
 // ==========================================
 // GALERÍA NUEVA DE MARCOS PNG
 // ==========================================

 const ARCHIVOS_MARCOS_PNG = {
     suga: "./marcosuga.png",
     jin: "./marcojin.png",
     jhope: "./marcojhope.png",
     v: "./marcov.png",
     jungkook: "./marcojungkook.png",
     rm: "./marcorm.png",
     jimin: "./marcojimin.png",
     ot7: "./marcoot7.png"
 };

 // ==========================================
 // POSICIÓN DEL MARCO SEGÚN CREDENCIAL
 // ==========================================

 function obtenerZonaMarcoPNG() {

     let foto;
     let anchoBase;
     let altoBase;

     switch (plantillaSeleccionada) {

         case "B1.jpeg":
             foto = { x: 25, y: 209, width: 273, height: 365 };
             anchoBase = 880;
             altoBase = 1204;
             break;

         case "B2.jpeg":
             foto = CONFIGURACION_B2.fotografia;
             anchoBase = CONFIGURACION_B2.width;
             altoBase = CONFIGURACION_B2.height;
             break;

         case "B3.jpeg":
             foto = CONFIGURACION_B3.fotografia;
             anchoBase = CONFIGURACION_B3.width;
             altoBase = CONFIGURACION_B3.height;
             break;

         case "B4.jpeg":
             foto = CONFIGURACION_B4.fotografia;
             anchoBase = CONFIGURACION_B4.width;
             altoBase = CONFIGURACION_B4.height;
             break;

         case "B5.jpeg":
         case "B10.jpeg":
             foto = CONFIGURACION_B5_B10.fotografia;
             anchoBase = CONFIGURACION_B5_B10.imagen.width;
             altoBase = CONFIGURACION_B5_B10.imagen.height;
             break;

         case "B6.jpeg":
             foto = CONFIGURACION_B6.fotografia;
             anchoBase = CONFIGURACION_B6.width;
             altoBase = CONFIGURACION_B6.height;
             break;

         case "B7.jpeg":
         case "B9.jpeg":
             foto = CONFIGURACION_B7_B9.fotografia;
             anchoBase = CONFIGURACION_B7_B9.width;
             altoBase = CONFIGURACION_B7_B9.height;
             break;

         case "B8.jpeg":
             foto = CONFIGURACION_B8.fotografia;
             anchoBase = CONFIGURACION_B8.width;
             altoBase = CONFIGURACION_B8.height;
             break;

         default:
             return null;
     }

     const canvasFoto = document.getElementById("canvas-credencial");

     if (!canvasFoto || !capaStickers) return null;

     const rectFoto = canvasFoto.getBoundingClientRect();
     const rectCapa = capaStickers.getBoundingClientRect();

     if (
         !rectFoto.width ||
         !rectFoto.height ||
         !rectCapa.width ||
         !rectCapa.height
     ) {
         return null;
     }

     const escalaX = capaStickers.width / rectCapa.width;
     const escalaY = capaStickers.height / rectCapa.height;

     return {
         x: (
             rectFoto.left - rectCapa.left +
             (foto.x / anchoBase) * rectFoto.width
         ) * escalaX,

         y: (
             rectFoto.top - rectCapa.top +
             (foto.y / altoBase) * rectFoto.height
         ) * escalaY,

         ancho: (
             (foto.width / anchoBase) * rectFoto.width
         ) * escalaX,

         alto: (
             (foto.height / altoBase) * rectFoto.height
         ) * escalaY
     };
 }

 // ==========================================
 // MOSTRAR LOS OCHO MARCOS
 // ==========================================

 if (btnMarcoFoto && listaMarcos) {

     btnMarcoFoto.addEventListener("click", async () => {

         if (listaMarcos.children.length > 0) {

             listaMarcos.style.display =
                 listaMarcos.style.display === "none"
                     ? "flex"
                     : "none";

             return;
         }

         listaMarcos.innerHTML = "Cargando marcos...";
         listaMarcos.style.display = "flex";

         const nombres = [
             "suga",
             "jin",
             "jhope",
             "v",
             "jungkook",
             "rm",
             "jimin",
             "ot7"
         ];

         listaMarcos.innerHTML = "";

         let marcosCargados = 0;

         for (const nombre of nombres) {

             try {

                 const imagen = new Image();

                 await new Promise((resolve, reject) => {

                     imagen.onload = resolve;
                     imagen.onerror = reject;

                     imagen.src = ARCHIVOS_MARCOS_PNG[nombre];

                 });

                 const opcion = document.createElement("button");
                 opcion.type = "button";
                 opcion.className = "sticker-opcion";
                 opcion.title = "Marco " + nombre.toUpperCase();

                 const miniatura = document.createElement("img");

                 miniatura.src = ARCHIVOS_MARCOS_PNG[nombre];
                 miniatura.alt = "Marco " + nombre;

                 miniatura.style.width = "110px";
                 miniatura.style.height = "110px";
                 miniatura.style.objectFit = "contain";

                 opcion.appendChild(miniatura);

                 opcion.addEventListener("click", () => {

                     const zona = obtenerZonaMarcoPNG();

                     if (!zona) {
                         alert("Primero abre una credencial.");
                         return;
                     }

                     marcoSeleccionado = {

                         imagen: imagen,

                         origenX: 0,
                         origenY: 0,
                         origenAncho: imagen.naturalWidth,
                         origenAlto: imagen.naturalHeight,

                         x: zona.x,
                         y: zona.y,
                         ancho: zona.ancho,
                         alto: zona.alto

                     };

                     dibujarStickers();

                     listaMarcos.style.display = "none";

                 });

                 listaMarcos.appendChild(opcion);
                 marcosCargados++;

             } catch (error) {

                 console.error(
                     "No se pudo cargar el marco " + nombre,
                     error
                 );
             }
         }

         if (marcosCargados === 0) {
             listaMarcos.textContent =
                 "No se pudieron cargar los marcos PNG. Revisa sus nombres en GitHub.";
         }

     });

 }


// ==========================================
// MOVIMIENTO DE STICKERS
// ==========================================

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
                  posicionSeguraArrastre = {
    x: sticker.x,
    y: sticker.y
};
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

       
      
        // ==========================================
        // AGRANDAR Y REDUCIR STICKERS CON DOS DEDOS
        // PROTECCIÓN EXCLUSIVA B8
        // ==========================================

        if (puntosToque.size === 2 && stickerEnPinza) {

            const puntos = Array.from(puntosToque.values());

            const dx = puntos[1].x - puntos[0].x;
            const dy = puntos[1].y - puntos[0].y;

            const distanciaActual = Math.sqrt(
                dx * dx + dy * dy
            );

            if (distanciaInicialPinza <= 0) return;

            // Guardar la posición y el tamaño actuales
            const posicionAnteriorX = stickerEnPinza.x;
            const posicionAnteriorY = stickerEnPinza.y;
            const anchoAnterior = stickerEnPinza.ancho;
            const altoAnterior = stickerEnPinza.alto;

            const escalaSolicitada =
                distanciaActual / distanciaInicialPinza;

            const proporcion =
                stickerEnPinza.origenAlto /
                stickerEnPinza.origenAncho;

            // Tamaño máximo moderado
            const anchoMaximo = Math.min(
                320,
                320 / proporcion,
                capaStickers.width,
                capaStickers.height / proporcion
            );

            const anchoMinimo = Math.min(
                anchoMaximo,
                40
            );

            const nuevoAncho = Math.max(
                anchoMinimo,
                Math.min(
                    tamanoInicialPinza * escalaSolicitada,
                    anchoMaximo
                )
            );

            const nuevoAlto = nuevoAncho * proporcion;

            // Mantener el centro del sticker
            const centroX =
                posicionAnteriorX + anchoAnterior / 2;

            const centroY =
                posicionAnteriorY + altoAnterior / 2;

            // Calcular posición nueva sin aplicarla todavía
            const nuevoX = Math.max(
                0,
                Math.min(
                    centroX - nuevoAncho / 2,
                    capaStickers.width - nuevoAncho
                )
            );

            const nuevoY = Math.max(
                0,
                Math.min(
                    centroY - nuevoAlto / 2,
                    capaStickers.height - nuevoAlto
                )
            );

            // Comprobar si invade una zona protegida de B8
            const invadeZonaProtegida = stickerInvadeZonaB8(
                nuevoX,
                nuevoY,
                nuevoAncho,
                nuevoAlto
            );

            // Aplicar el cambio solamente si está permitido
            if (!invadeZonaProtegida) {

                stickerEnPinza.x = nuevoX;
                stickerEnPinza.y = nuevoY;
                stickerEnPinza.ancho = nuevoAncho;
                stickerEnPinza.alto = nuevoAlto;

                dibujarStickers();
            }

            return;
        }

        // ==========================================
        // MOVIMIENTO LIBRE DE STICKERS
        // ==========================================

        if (puntosToque.size === 1 && stickerArrastrado) {

            let nuevoX = x - desplazamientoStickerX;
            let nuevoY = y - desplazamientoStickerY;

            // Mantener el sticker dentro de la credencial
            nuevoX = Math.max(
                0,
                Math.min(
                    nuevoX,
                    capaStickers.width - stickerArrastrado.ancho
                )
            );

            nuevoY = Math.max(
                0,
                Math.min(
                    nuevoY,
                    capaStickers.height - stickerArrastrado.alto
                )
            );

            

            // Permitir atravesar las zonas durante el arrastre
            stickerArrastrado.x = nuevoX;
            stickerArrastrado.y = nuevoY;

            // Recordar solamente posiciones permitidas
            if (!stickerInvadeZonaProtegida(
                nuevoX,
                nuevoY,
                stickerArrastrado.ancho,
                stickerArrastrado.alto
            )) {
                posicionSeguraArrastre = {
                    x: nuevoX,
                    y: nuevoY
                };
            }

            dibujarStickers();

        }


    });

    function terminarMovimientoSticker(evento) {
      
    // Al soltar, impedir que quede sobre una zona protegida
    if (stickerArrastrado && stickerInvadeZonaProtegida(
        stickerArrastrado.x,
        stickerArrastrado.y,
        stickerArrastrado.ancho,
        stickerArrastrado.alto
    )) {

        if (posicionSeguraArrastre) {
            stickerArrastrado.x = posicionSeguraArrastre.x;
            stickerArrastrado.y = posicionSeguraArrastre.y;
        }

        dibujarStickers();
    }

    posicionSeguraArrastre = null;


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
    "2 - B2\n" +
    "3 - B5\n" +
    "4 - B10\n" +
    "5 - B7\n" +
    "6 - B9\n" +
     "7 - B6\n" +
      "8 - B8"
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

    plantillaSeleccionada = "B1.jpeg";
    await mostrarCredencialB1(datosPrueba);

} else if (opcion === "2") {

    plantillaSeleccionada = "B2.jpeg";
    await mostrarCredencialB2(datosPrueba);

} else if (opcion === "3") {

    plantillaSeleccionada = "B5.jpeg";
    await mostrarCredencialB5B10(
        datosPrueba,
        "B5PLANTILLA.jpeg"
    );

} else if (opcion === "4") {

    plantillaSeleccionada = "B10.jpeg";
    await mostrarCredencialB5B10(
        datosPrueba,
        "B10PLANTILLA.jpeg"
    );

} else if (opcion === "5") {

    plantillaSeleccionada = "B7.jpeg";
    await mostrarCredencialB7B9(
        datosPrueba,
        "B7PLANTILLA.jpg"
    );


} else if (opcion === "6") {

    plantillaSeleccionada = "B9.jpeg";

    await mostrarCredencialB7B9(
        datosPrueba,
        "B9PLANTILLA.jpg"
    );


} else if (opcion === "7") {

    plantillaSeleccionada = "B6.jpeg";

    await mostrarCredencialB6(datosPrueba);

} else if (opcion === "8") {

    // PRUEBA EXCLUSIVA DE B8 SIN REGISTRO
    plantillaSeleccionada = "B8.jpeg";

    const datosPruebaB8 = {
        ...datosPrueba,
        armyTipo: "ARMY GIRL",
        fechaRegistro: new Date()
    };

    await mostrarCredencialB8(datosPruebaB8);

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

  
  // ==========================================
  // SELECTOR EXCLUSIVO ARMY GIRL / ARMY BOY B8
  // ==========================================

  let armyTipoSeleccionadoB8 = "";

  const formularioB8 = document.getElementById("formularioRegistro");

  const contenedorArmyB8 = document.createElement("div");

  contenedorArmyB8.id = "selector-army-b8";
  contenedorArmyB8.style.display = "none";
  contenedorArmyB8.style.textAlign = "center";
  contenedorArmyB8.style.margin = "20px 0";
  contenedorArmyB8.style.padding = "15px";
  contenedorArmyB8.style.border = "2px solid #c58aff";
  contenedorArmyB8.style.borderRadius = "15px";

  function actualizarSelectorArmyB8() {

      if (plantillaSeleccionada !== "B8.jpeg") {
          contenedorArmyB8.style.display = "none";
          return;
      }

      contenedorArmyB8.style.display = "block";

      if (armyTipoSeleccionadoB8) {
          contenedorArmyB8.innerHTML = "";

          const textoElegido = document.createElement("p");
          textoElegido.textContent = armyTipoSeleccionadoB8;
          textoElegido.style.color = "#c58aff";
          textoElegido.style.fontWeight = "bold";
          textoElegido.style.fontSize = "22px";

          contenedorArmyB8.appendChild(textoElegido);
          return;
      }

      contenedorArmyB8.innerHTML = "";

      const titulo = document.createElement("p");
      titulo.textContent = "ELIGE TU IDENTIFICACIÓN ARMY 💜";
      titulo.style.fontWeight = "bold";

      const botonElegir = document.createElement("button");
      botonElegir.type = "button";
      botonElegir.textContent = "ELEGIR ARMY GIRL / ARMY BOY";

      contenedorArmyB8.appendChild(titulo);
      contenedorArmyB8.appendChild(botonElegir);

      botonElegir.addEventListener("click", () => {

          botonElegir.remove();

          ["ARMY GIRL", "ARMY BOY"].forEach((opcion) => {

              const boton = document.createElement("button");
              boton.type = "button";
              boton.textContent = opcion;

              boton.style.margin = "8px";
              boton.style.padding = "12px";
              boton.style.borderRadius = "12px";
              boton.style.background = "#6a0dad";
              boton.style.color = "#ffffff";
              boton.style.border = "none";

              boton.addEventListener("click", () => {

                  armyTipoSeleccionadoB8 = opcion;

                  actualizarSelectorArmyB8();

              });

              contenedorArmyB8.appendChild(boton);
          });
      });
  }

  if (formularioB8) {
      formularioB8.appendChild(contenedorArmyB8);
  }


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

  // Mostrar el selector solo para B8
if (plantillaSeleccionada === "B8.jpeg") {
    armyTipoSeleccionadoB8 = "";
}

actualizarSelectorArmyB8();

  // Registrar que esta credencial ya fue vista
  credencialesVistas.add(i);

  // Mostrar CREAR solamente después de revisar las 10
  if (credencialesVistas.size === 10) {
    btnCrearCredencial.style.display = "block";
  }

 
imagenVistaPrevia.src = `./${plantillaSeleccionada}`;
vistaPrevia.classList.remove("oculta");

// ==========================================
// VIDEO EXCLUSIVO AL ABRIR B6
// ==========================================

if (i === 6) {

    const ventanaVideo = document.getElementById("anuncio-video-b6");
    const videoB6 = document.getElementById("video-anuncio-b6");
    const botonVideo = document.getElementById("btn-reproducir-b6");
    const musicaFondo = document.getElementById("audioFondoArmy");

    if (ventanaVideo && videoB6 && botonVideo) {

        // Mostrar ventana con fondo borroso
        ventanaVideo.style.display = "flex";

        // Detener música de fondo
        if (musicaFondo) {
            musicaFondo.pause();
        }

        // Preparar video desde el inicio
        videoB6.pause();
        videoB6.currentTime = 0;
        videoB6.controls = false;
        videoB6.loop = false;
        videoB6.muted = false;

        botonVideo.style.display = "none";

        function terminarAnuncioB6() {

            videoB6.pause();
            ventanaVideo.style.display = "none";
            botonVideo.style.display = "none";

            // Reanudar música de fondo
            if (musicaFondo && !document.hidden) {
                musicaFondo.play().catch(() => {});
            }
        }

        // El video desaparece al finalizar
        videoB6.onended = terminarAnuncioB6;

        // Si el archivo no carga, permitir continuar
        videoB6.onerror = () => {
            botonVideo.textContent = "CONTINUAR SIN VIDEO";
            botonVideo.style.display = "block";
        };

        // Botón de respaldo para navegadores móviles
        botonVideo.onclick = async () => {

            if (videoB6.error) {
                terminarAnuncioB6();
                return;
            }

            try {
                await videoB6.play();
                botonVideo.style.display = "none";
            } catch (error) {
                console.error("Error al reproducir B6:", error);
            }
        };

        // Intentar reproducir automáticamente
        videoB6.play().catch(() => {

            // Algunos celulares necesitan otro toque
            botonVideo.textContent = "▶ REPRODUCIR VIDEO";
            botonVideo.style.display = "block";

        });
    }
}

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

} // CIERRE DEL IF DE LAS PLANTILLAS

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
    
    // ==========================================
    // VALIDAR ARMY GIRL / ARMY BOY SOLO EN B8
    // ==========================================

    if (
        plantillaSeleccionada === "B8.jpeg" &&
        !armyTipoSeleccionadoB8
    ) {
        alert("Selecciona ARMY GIRL o ARMY BOY para tu credencial B8. 💜");
        return;
    }


    // ==========================================
// VALIDACIÓN DE DATOS DEL REGISTRO
// ==========================================

function mostrarErrorRegistro(id, mensaje) {

    const campo = document.getElementById(id);

    if (!campo) return;

    const errorAnterior = document.getElementById(
        "error-" + id
    );

    if (errorAnterior) {
        errorAnterior.remove();
    }

    campo.style.border = "2px solid #ff4444";

    const aviso = document.createElement("div");

    aviso.id = "error-" + id;
    aviso.textContent = "⚠️ " + mensaje;
    aviso.style.color = "#ff7777";
    aviso.style.fontSize = "14px";
    aviso.style.fontWeight = "bold";
    aviso.style.marginTop = "5px";
    aviso.style.marginBottom = "10px";
    aviso.setAttribute("role", "alert");

    campo.after(aviso);

    campo.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    campo.focus({ preventScroll: true });

    campo.addEventListener("input", () => {
        campo.style.border = "";
        aviso.remove();
    }, { once: true });
}

// VALIDAR NOMBRE

if (
    !nombre ||
    !/^[\p{L}\p{M} .'-]+$/u.test(nombre) ||
    !/\p{L}/u.test(nombre)
) {
    mostrarErrorRegistro(
        "nombreArmy",
        "Escribe correctamente tu nombre, sin números ni símbolos extraños."
    );
    return;
}

// VALIDAR PAÍS

if (
    !pais ||
    !/^[\p{L}\p{M} .'-]+$/u.test(pais) ||
    !/\p{L}/u.test(pais)
) {
    mostrarErrorRegistro(
        "paisArmy",
        "Escribe correctamente el nombre de tu país."
    );
    return;
}

// VALIDAR BIAS

const biasPermitidos = [
    "RM",
    "JIN",
    "SUGA",
    "JHOPE",
    "JIMIN",
    "V",
    "JUNGKOOK",
    "OT7"
];

if (!biasPermitidos.includes(normalizarBias(bias))) {

    mostrarErrorRegistro(
        "biasArmy",
        "Escribe un bias válido: RM, Jin, Suga, J-Hope, Jimin, V, Jungkook u OT7."
    );

    return;
}

// VALIDAR WHATSAPP INTERNACIONAL

const numeroLimpio = whatsapp.replace(/[\s()-]/g, "");

if (!numeroLimpio.startsWith("+")) {

    mostrarErrorRegistro(
        "whatsappArmy",
        "Agrega el signo + y la lada internacional de tu WhatsApp. Ejemplo: +52 para México."
    );

    return;
}

if (!/^\+[1-9][0-9]{6,14}$/.test(numeroLimpio)) {

    mostrarErrorRegistro(
        "whatsappArmy",
        "Tu número de WhatsApp está incompleto o contiene caracteres incorrectos."
    );

    return;
}

// VALIDAR NÚMEROS DE MÉXICO

if (
    numeroLimpio.startsWith("+52") &&
    !/^\+52[0-9]{10}$/.test(numeroLimpio)
) {

    mostrarErrorRegistro(
        "whatsappArmy",
        "Para México debes ingresar +52 seguido de 10 dígitos."
    );

    return;
}

    let tipo = "nuevo";
    let codigoAnterior = "";

    if (opcionCredencial.value === "si") {
      tipo = "anterior";
      codigoAnterior = document
        .getElementById("codigoAnterior")
        .value.trim().toUpperCase();
// VALIDAR CÓDIGO DE CREDENCIAL ANTERIOR

if (!codigoAnterior) {

    mostrarErrorRegistro(
        "codigoAnterior",
        "Escribe el código de tu credencial anterior."
    );

    return;
}

if (!/^[A-Z]+[0-9]+$/.test(codigoAnterior)) {

    mostrarErrorRegistro(
        "codigoAnterior",
        "Tu código debe contener letras seguidas de números. Ejemplo: A125 o K230."
    );

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

   
    // ==========================================
    // ABRIR LA CREDENCIAL ELEGIDA EN EL REGISTRO
    // ==========================================

    // Reiniciar controles de fotografías anteriores
    credencialB5B10Activa = false;
    credencialB7B9Activa = false;
    baseCredencialSinFoto = null;

    if (plantillaSeleccionada === "B1.jpeg") {

    await mostrarCredencialB1(datosCredencial);

} else if (plantillaSeleccionada === "B2.jpeg") {

    await mostrarCredencialB2(datosCredencial);

   } else if (plantillaSeleccionada === "B3.jpeg") {

    await mostrarCredencialB3(datosCredencial);

} else if (plantillaSeleccionada === "B4.jpeg") {

    await mostrarCredencialB4(datosCredencial);

    } else if (plantillaSeleccionada === "B5.jpeg") {

        await mostrarCredencialB5B10(
            datosCredencial,
            "B5PLANTILLA.jpeg"
        );

   } else if (plantillaSeleccionada === "B6.jpeg") {

    await mostrarCredencialB6(datosCredencial);

    } else if (plantillaSeleccionada === "B7.jpeg") {

        await mostrarCredencialB7B9(
            datosCredencial,
            "B7PLANTILLA.jpg"
        );

   
} else if (plantillaSeleccionada === "B8.jpeg") {

    // DATOS EXCLUSIVOS DE LA CREDENCIAL B8
    const datosB8 = {
        ...datosCredencial,
        armyTipo: armyTipoSeleccionadoB8,
        fechaRegistro: new Date()
    };

    await mostrarCredencialB8(datosB8);


    } else if (plantillaSeleccionada === "B9.jpeg") {

        await mostrarCredencialB7B9(
            datosCredencial,
            "B9PLANTILLA.jpg"
        );

    } else if (plantillaSeleccionada === "B10.jpeg") {

        await mostrarCredencialB5B10(
            datosCredencial,
            "B10PLANTILLA.jpeg"
        );

    } else {

        throw new Error("No se reconoció la credencial seleccionada.");

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

// CIERRE DEL EVENTO DOMCONTENTLOADED
});
