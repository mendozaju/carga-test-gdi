'use strict';
/**
 * Exports: ROUTES
 */
module.exports = [{
      method: 'GET',
        path: '/resources/{param*}',
        handler: {
            directory: {
                path: './static',
                listing: true,
                index: true
            }
        }
}];
