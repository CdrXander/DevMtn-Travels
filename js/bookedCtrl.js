angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {

	var cityObj;
	if($stateParams.id === 'NewYork') {
		cityObj = mainSrv.travelInfo[0];
	} else if ($stateParams.id == "Paris") {
		cityObj = mainSrv.travelInfo[1];
	} else if ($stateParams.id === "Sydney") {
		cityObj = mainSrv.travelInfo[2];
	}
	
	$scope.cityName = cityObj.city;
	$scope.bgImg = {"background-image" : "url(" + cityObj.image + ")"};

	
})