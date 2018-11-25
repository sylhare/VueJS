# Proxy

The simple vue app is in the folder `app`.
Run the app by opening `index.html` in your browser.

Make sure to run the http proxy using `node index.js`. (express server that will listen to port `3000`)

It is not working well for cloudflare hosted website, it seems they can detect and block the proxy. So instead of a `CORS` issue you have a `403 forbidden` one.