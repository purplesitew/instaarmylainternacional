
const CACHE_NAME = "insta-army-internacional-v10";


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
    "./icono.png"
];


// Instalar la aplicación y guardar sus archivos básicos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ARCHIVOS_INICIALES))
      .then(() => self.skipWaiting())
  );
});

// Activar la versión nueva y eliminar cachés anteriores
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

// Intentar cargar la versión actual desde internet
// y utilizar la copia guardada si no hay conexión
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
      .then((respuesta) => {
        if (respuesta.ok) {
          const copia = respuesta.clone();

          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, copia));
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
