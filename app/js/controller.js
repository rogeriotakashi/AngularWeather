angular.module('angularWeather',['ngAnimate'])
.controller('mainController',function($scope){
	$scope.dynamicBlock = "empty-block";
	$scope.resultText = "";

	$scope.searchWeather = function(city){
		$scope.showImage = true;
		$scope.resultText = $scope.city;
		var json_obj = JSON.parse(getJSON("http://api.openweathermap.org/data/2.5/weather?q={"+city+"}&appid=0d9804d47ee2f434cb4ce6c4345aab5c"));

		console.log(json_obj.weather[0].description);
		$scope.tempo = json_obj.weather[0].description;
		console.log(json_obj);
		$scope.temperature = Math.round(json_obj.main.temp - 273);
		$scope.temperatureMin = Math.round(json_obj.main.temp_min - 273);
		$scope.temperatureMax = Math.round(json_obj.main.temp_max - 273);
		$scope.windspeed = Math.round(json_obj.wind.speed * 3.6);
		$scope.humidity = json_obj.main.humidity;
		$scope.date = new Date();
		$scope.ampm = (($scope.date.getHours() >= 12)? "PM": "AM");
		$scope.dynamicBlock = "half-empty-block";
	}



	function getJSON(url){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);

		return xmlhttp.responseText;	

	}


});



