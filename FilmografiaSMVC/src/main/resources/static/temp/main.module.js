'use strict';


var main = angular.module('main', ['CaseProduttrici','CaseController']);

main.component('main', {
	templateUrl: 'webapp/views/main.template.html',
	controller: 'CaseController'
});

main.factory('CaseJson', function($resource) {
	return $resource('caseprod/all', {}, {
		'query': { method: 'GET', isArray: true },
		'get': {
			method: 'GET',
			transformResponse: function(data) {
				var self = this;
				self.response = angular.fromJson(data);
			}
		}
	});
});

main.controller('CaseProduttrici', function($scope, CaseJson) {
	$scope.CaseProdrutticiJson = CaseJson;
});

