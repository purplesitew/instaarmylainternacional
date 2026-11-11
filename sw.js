
const CACHE_NAME = "insta-army-internacional-v47";

const ARCHIVOS_INICIALES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./style.css",
    "./app.js",
    "./inicio.jpg",
    "./fondo.jpg",
    "./botondescarga.png",
    "./btnddescarga.mp3",
    "./icono.png",
    "./icono-192.png",
    "./icono-512.png",
   "./B1.jpeg",
"./B2.jpeg",
"./B3.jpeg",
"./B4.jpeg",
"./B5.jpeg",
"./B6.jpeg",
"./B7.jpeg",
"./B8.jpeg",
"./B9.jpeg",
"./B10.jpeg",
"./B5PLANTILLA.jpeg",
"./B10PLANTILLA.jpeg",
"./B7PLANTILLA.jpg",
"./B9PLANTILLA.jpg"
];

// INSTALAR LA APLICACIÓN
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ARCHIVOS_INICIALES))
            .then(() => self.skipWaiting())
    );
});

// ACTIVAR LA NUEVA VERSIÓN
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((nombres) =>
                Promise.all(
                    nombres
                        .filter((nombre) =>
                            nombre.startsWith("insta-army-internacional-") &&
                            nombre !== CACHE_NAME
                        )
                        .map((nombre) => caches.delete(nombre))
                )
            )
            .then(() => self.clients.claim())
    );
});

// CARGAR DESDE INTERNET Y GUARDAR RESPUESTAS COMPLETAS
self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (
        request.method !== "GET" ||
        url.origin !== self.location.origin
    ) {
        return;
    }

    event.respondWith(
        fetch(request)
            .then(async (respuesta) => {

                // Solo guardar respuestas completas (200).
                // Las respuestas parciales (206) no se guardan.
                if (
                    respuesta.status === 200 &&
                    !request.headers.has("Range")
                ) {
                    try {
                        const cache = await caches.open(CACHE_NAME);
                        await cache.put(request, respuesta.clone());
                    } catch (error) {
                        console.warn("No se pudo actualizar la caché:", error);
                    }
                }

                return respuesta;
            })
            .catch(async () => {
                const guardado = await caches.match(request);

                if (guardado) {
                    return guardado;
                }

                if (request.mode === "navigate") {
                    return await caches.match("./index.html") ||
                        Response.error();
                }

                return Response.error();
            })
    );
});
