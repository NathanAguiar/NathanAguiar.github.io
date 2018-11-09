let leaoarquivos =  [
    '/Cultura.html',
    '/Curiosidades.html',
    '/folha.css',
    '/folha2.css',
    '/folha3.css',
    '/index.html',
    '/Pesquisa.html',
    '/Quiz.html',
    '/img/53404.jpg',
    '/img/backgroundfunfacts.jpg',
    '/img/backgroundpesquisa.jpg',
    '/img/leao.jpg',
    '/img/lion.jpg',
    '/js/rellax.js',
    '/js/menu.js',
    '/js/validarform.js'

  ]
  const nomecache = 'leaodinamico';

//função para armazenar os dados da pagina no cache do navegador
self.addEventListener('install', function(evento) {
    evento.waitUntil(caches.open(nomecache).then(function(cache) {
        return cache.addAll(leaoarquivos);})
    );
  });
self.addEventListener('fetch', function(evento) {
      console.log(evento.request.url);
evento.respondWith(caches.match(evento.request).then(function(resposta) {
    return resposta || fetch(evento.request);}));
     });

//Lembrete para o nathan mongol de 1 mês na frente referências a respeito dos service worker não estão no google e sim no serviceworke.rs da mozzila