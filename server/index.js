'use strict';


var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start(function() {
    console.info('Hapijs server running at ' +
        server.info.uri + ' on port [' +
        server.info.port + '] in [' +
        process.env.NODE_ENV + '] mode'
    );
});
