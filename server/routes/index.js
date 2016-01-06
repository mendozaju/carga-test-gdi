'use strict';

/**
 * API routes
 */
var Login = require( './login' );

var ROUTES = [];

ROUTES = ROUTES.concat( Login )
        .map( function( route ){
            route.path = '' + route.path;
            return route;
        });
/**
 * Exports: ROUTES
 */
module.exports = ROUTES;
