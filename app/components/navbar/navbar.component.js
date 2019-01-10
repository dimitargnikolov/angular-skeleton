'use strict';

angular.module('skeleton').component('navbar', {
    templateUrl: 'components/navbar/navbar.template.html',
    controller: ['$route', function NavbarController($route) {
	this.isActive = function(page) {
	    return $route.current.activePage == page;
	};
    }]
});
