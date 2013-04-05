'use strict';

/* Controllers */


myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$http({method: 'GET', url: '/api/name'}).
	success(function(data, status, headers, config) {
    	$scope.name = data.name;
  	}).
  	error(function(data, status, headers, config) {
    	$scope.name = 'Error!'
  	});
}]);

myApp.controller('MyCtrl1', ['$scope', '$http', function($scope, http) {

}]);

myApp.controller('MyCtrl2', ['$scope', '$http', function($scope, http) {

}]);