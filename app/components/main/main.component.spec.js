'use strict';

describe('main', function() {

    beforeEach(module('skeleton'));

    describe('MainController', function() {
	var ctrl;

	beforeEach(inject(function($componentController) {
	    ctrl = $componentController('main');
	}));

	it('should create a `name` property with the value `Abe`', function() {
	    expect(ctrl.name).toEqual('Abe');
	});
    });
});
