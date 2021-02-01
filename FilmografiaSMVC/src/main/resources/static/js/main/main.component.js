'use strict';

var main = angular.module('main', []);
main.component('main', {
	templateUrl: 'views/main.template.html',
	controller: 'CaseController'

});

/*main.controller('CaseJson', function($scope, $http) {
	$http.get('caseprod/all')
		.then(function(response, status) {
			$scope.myWelcome = response.data;
		}, function(err) {
			console.error("Error", err);
		});
});*/

/* main.controller('getcontroller', function($scope, $http, $location) {
  $scope.getfunction = function(){
    var url = "http://localhost:3306/caseprod/all";
    
    $http.get(url).then(function (response) {
      $scope.response = response.data
    }, function error(response) {
      $scope.postResultMessage = "Error with status: " +  response.statusText;
    });
  }
})
 */
/*main.controller('CaseJson', function($resource) {
	return $resource('caseprod/all', {}, {
		'query': { method: 'GET', isArray: true },
		'get': {
			method: 'GET',
			transformResponse: function(data) {
				data = angular.fromJson(data);
				return data;
			}
		}
	});
});*/

/*main.controller('CaseProduttrici', function($scope, CaseJson) {
	$scope.CaseProdrutticiJson = CaseJson;
});*/

