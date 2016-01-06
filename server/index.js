'use strict';


var Hapi = require('hapi');
var routes = require('./routes');

var server = new Hapi.Server();


server.connection({ port: process.env.PORT || 3000 });

server.route(routes);

server.start(function() {
    console.info('Hapijs server running at ' +
        server.info.uri + ' on port [' +
        server.info.port + '] in [' +
        process.env.NODE_ENV + '] mode'
    );
});
