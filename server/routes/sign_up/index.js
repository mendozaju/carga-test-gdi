'use strict';

var handler = require('./handler');

/**
 * Exports: ROUTES
 */
module.exports = [{
    method: ['POST','GET'],
    path: '/singup',
    handler: handler.header
}];