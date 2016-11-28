angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {

	var cityObj;
	var travelInfo = mainSrv.travelInfo;

	for(var i = 0; i < travelInfo.length; i ++ ) {
		if($stateParams.id == travelInfo[i].id) {
			cityObj = travelInfo[i];
			break;
		}
	}
	
	
	$scope.cityName = cityObj.city;
	$scope.bgImg = {"background-image" : "url(" + cityObj.image + ")"};

	
})