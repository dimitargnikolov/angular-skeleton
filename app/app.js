'use strict';

var app = angular.module('skeleton', ['ngRoute']);
app.config(
    ['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.
	    when('/', {
		template: '<main></main>',
		activePage: 'main'
            }).
	    when('/probe', {
		template: '<probe></probe>',
		activePage: 'probe'
	    }).
	    otherwise('/');
    }]
);
