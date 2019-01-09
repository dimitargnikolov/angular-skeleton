'use strict';

angular.module('clientSkeleton').component('main', {
    templateUrl: 'components/main/main.template.html',
    controller: [function MainController() {
	this.name = 'Abe';
    }]
});
