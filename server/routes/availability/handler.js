'use strict';

/**
 * API impl
 */
exports.header = function(request, reply) {
    reply({
        status: '200',
        payload: [{
            nombre: 'Usuario 1',
            direccion: 'Direccion de usuario 1',
            telefono: '222222222',
            detalle: 'Detalle de carga para el usuario 1'
        }, {
            nombre: 'Usuario 2',
            direccion: 'Direccion de usuario 2',
            telefono: '333333333',
            detalle: 'Detalle de carga para el usuario 2'
        }]
    });
};
