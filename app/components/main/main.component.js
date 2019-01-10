'use strict';

angular.module('skeleton').component('main', {
    templateUrl: 'components/main/main.template.html',
    controller: ['Name', function MainController(Name) {
	this.name = Name.currentName;

	this.changeName = function(name) {
	    Name.currentName = name;
	};
    }]
});
