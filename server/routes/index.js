'use strict';

/**
 * API routes
 */
var Api = require('./api');
var Availability = require('./availability');
var signUp = require('./sign_up');
var Login = require( './login' );


var ROUTES = [];

ROUTES = ROUTES.concat( Login )
		.concat(Availability)
		.concat(signUp)	
        .map( function( route ){
            route.path = '/api' + route.path;
            return route;
        })
        .concat(Api);
/**
 * Exports: ROUTES
 */
module.exports = ROUTES;
