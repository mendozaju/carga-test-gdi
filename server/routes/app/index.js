'use strict';
/**
 * Exports: ROUTES
 */
module.exports = [{
    method: 'GET',
    path: '/{path*}',
    handler: {
        file: 'static/app/index.html'
    }
}, {
        method: 'GET',
        path: '/',
        handler: {
            file: 'static/app/login/index.html'
        }
    }, {
        method: 'GET',
        path: '/home/{path*}',
        handler: {
            file: 'static/app/home/home.html'
        }
    },
    
    {
        method: 'GET',
        path: '/nueva-carga',
        handler: {
            file: 'static/app/home/home.html'
        }
    }
    
    ];
