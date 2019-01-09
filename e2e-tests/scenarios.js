'use strict';

describe('Skeleton app', function() {
    describe('View: Main', function() {

	beforeEach(function() {
	    browser.get('index.html#!/phones');
	});

	it('should filter the phone list as a user types into the search box', function() {
	    expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch('Hello, Abe!');
	    
	    var name = element(by.model('$ctrl.name'));
	    name.clear();
	    name.sendKeys('Mary');
	    expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch('Hello, Mary!');
	});
    });
});
