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
}];
