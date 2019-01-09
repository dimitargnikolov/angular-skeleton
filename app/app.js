'use strict';

var app = angular.module('clientSkeleton', ['ngRoute']);
app.config(
    ['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.
	    when('/', {
		template: '<main></main>'
            }).
	    otherwise('/');
    }]
);
