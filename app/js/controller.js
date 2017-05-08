angular.module('angularWeather',[])
.controller('mainController',function($scope){
	$scope.dynamicBlock = "empty-block";
	$scope.resultText = "";

	$scope.searchWeather = function(city){
		$scope.showImage = true;
		var json_obj = JSON.parse(getJSON("http://api.openweathermap.org/data/2.5/weather?q={"+city+"}&appid=0d9804d47ee2f434cb4ce6c4345aab5c"));
		$scope.resultText = $scope.city;
		console.log(json_obj.weather[0].description);
		$scope.tempo = json_obj.weather[0].description;
		console.log(json_obj);
		$scope.temperaturaMin = Math.round(json_obj.main.temp_min - 273);
		$scope.temperaturaMax = Math.round(json_obj.main.temp_max - 273);
		$scope.dynamicBlock = "half-empty-block";
	}



	function getJSON(url){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);

		return xmlhttp.responseText;	

	}


});



