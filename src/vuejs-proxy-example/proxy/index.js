var express = require('express');
var httpProxy = require('http-proxy');

var apiForwardingUrl = 'http://jsonplaceholder.typicode.com/users';

var server = express();
server.set('port', 3000);
server.use(express.static(__dirname + '/app'));

var apiProxy = httpProxy.createProxyServer();

// Grab all requests to the server with "/space/".
server.all("/space/*", function(req, res) {
    console.log("Request made to /space/");
    apiProxy.web(req, res, {target: apiForwardingUrl});
});

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});