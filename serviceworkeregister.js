
//verificando se o navegador suporta um service worker caso a resposta seja sim instale-o (Maldito tutorial do google que não ensina direito)
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js').then(function() { 
    console.log("Service Worker registrado"); 
  });
}


