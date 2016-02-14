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
        file: 'static/app/index.html'
    }
}, {
    method: 'GET',
    path: '/home',
    handler: {
        file: 'static/app/home/home.html'
    }
}];
