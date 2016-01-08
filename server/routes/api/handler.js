'use strict';

var api = {
    services: [{
        path: '/api/login',
        rel: 'login',
        description: 'Servicio de login para la aplicacion'
    }, {
        path: '/api/availability',
        rel: 'availability',
        description: 'Servicio de consulta de disponibilidad'
    }, {
        path: '/api/signup',
        rel: 'signup',
        description: 'Servicio de registracion'
    }]
};

/**
 * API impl
 */
exports.header = function(request, reply) {
    reply(api);
};
