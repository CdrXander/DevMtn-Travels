angular.module('devmtnTravel').controller('locationCtrl', function($scope, mainSrv) {

	$scope.cities = mainSrv.travelInfo;
})