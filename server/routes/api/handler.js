'use strict';

var api = {
    services: [{
        path: '/api/login',
        rel: 'login',
        method:'GET',
        description: 'Servicio de login para la aplicacion'
    }, {
        path: '/api/availability',
        rel: 'availability',
        method:'GET',
        description: 'Servicio de consulta de disponibilidad'
    }, {
        path: '/api/singup',
        rel: 'singup',
        method:'POST',
        description: 'Servicio de registracion'
    }]
};


/**
 * API impl
 */
exports.header = function(request, reply) {
    reply(api);
};
