const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang=en>
    <head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=icon href=/favicon.png><title>Barrier-free maps</title>
    <link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel=stylesheet href="https://fonts.googleapis.com/css?family=Material+Icons">
    <link rel=stylesheet href=https://unpkg.com/leaflet@1.6.0/dist/leaflet.css>
    <link rel=stylesheet href=https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css>
    <link rel=stylesheet href=https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@[VERSION]/dist/L.Control.Locate.min.css>
    <link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel=stylesheet>
    <link href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap" rel=stylesheet>
    <link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css>
    <link rel=stylesheet href=https://www.w3schools.com/w3css/4/w3.css>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css>
    <link href=/css/chunk-07652a3e.0ac568d9.css rel=prefetch>
    <link href=/css/chunk-8c7aa934.713055e3.css rel=prefetch>
    <link href=/css/chunk-fc13ec06.3c585971.css rel=prefetch>
    <link href=/js/chunk-07652a3e.ee7bfcbc.js rel=prefetch>
    <link href=/js/chunk-2d0cb6c3.9f66fb9e.js rel=prefetch>
    <link href=/js/chunk-2d216460.3f14ac84.js rel=prefetch>
    <link href=/js/chunk-8c7aa934.a1073910.js rel=prefetch>
    <link href=/js/chunk-fc13ec06.1b6efdf2.js rel=prefetch>
    <link href=/css/app.e61c8479.css rel=preload as=style>
    <link href=/css/chunk-vendors.9d948f28.css rel=preload as=style>
    <link href=/js/app.e6583020.js rel=preload as=script>
    <link href=/js/chunk-vendors.cd95bb1e.js rel=preload as=script>
    <link href=/css/chunk-vendors.9d948f28.css rel=stylesheet>
    <link href=/css/app.e61c8479.css rel=stylesheet>
    </head>
    <body>
    <noscript>
    <strong>We're sorry but meal-prep doesn't work properly without JavaScript enabled.
    Please enable it to continue.</strong>
    </noscript>
    <div id=app>
    </div>
    <script src=/js/chunk-vendors.cd95bb1e.js></script>
    <script src=/js/app.e6583020.js></script>
    </body>
    <script src=https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@[VERSION]/dist/L.Control.Locate.min.js charset=utf-8></script>
    <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js></script>
    <script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js></script>
    <script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js></script>
    <script src=/__/firebase/7.15.4/firebase-app.js></script>
    <script src=/__/firebase/7.15.4/firebase-analytics.js></script>
    <script src=/__/firebase/init.js></script>
    </html>`);
  });

  exports.app = functions.https.onRequest(app);