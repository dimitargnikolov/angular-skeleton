'use strict';

angular.module('skeleton').component('probe', {
    templateUrl: 'components/probe/probe.template.html',
    controller: [
	'$http', '$httpParamSerializer', 'Probe', 
	function ProbeController($http, $httpParamSerializer, Probe) {
	    var ctrl = this;

	    ctrl.result = Probe.lastResult;

	    ctrl.blankResult = function() {
		return {
		    response: '',
		    method: '',
		    error: ''
		};
	    };
	    
	    ctrl.probeGET = function() {
		var config = {
		    params: {
			action: 'probe'
		    }
		};

		var ctrl = this;
		$http.get('/backend', config).then(
		    function(response) {
			ctrl.result = ctrl.blankResult();
			ctrl.result.response = JSON.stringify(response.data, null, 4);
			ctrl.result.method = 'GET';
			Probe.lastResult = ctrl.result;
		    },
		    function(error) {
			ctrl.result = ctrl.blankResult();
			ctrl.result.error = JSON.stringify(error, null, 4);
			Probe.lastResult = ctrl.result;
		    }
		);
	    };

	    ctrl.probePOST = function() {
		var config = {
		    headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		    }
		};
		var data = {
		    action: 'probe'
		};

		$http.post('/backend', $httpParamSerializer(data), config).then(
		    function(response) {
			ctrl.result = ctrl.blankResult();
			ctrl.result.response = JSON.stringify(response.data, null, 4);
			ctrl.result.method = 'POST';
			Probe.lastResult = ctrl.result;
		    },
		    function(error) {
			ctrl.result = ctrl.blankResult();
			ctrl.result.error = JSON.stringify(error, null, 4);
			Probe.lastResult = ctrl.result;
		    }
		);
	    };
	}]
});
