angular.module('angularWeather',['ngAnimate','resultModule'])
.controller('mainController',function($scope){
	$scope.dynamicBlock = "empty-block";
	$scope.resultText = "";

	$scope.searchWeather = function(search){
		$scope.showImage = true;
		$scope.resultText = search;
		var json_obj = getJSONObj(search);

		$scope.tempo = json_obj.weather[0].description;
		$scope.temperature = Math.round(json_obj.main.temp);
		$scope.temperatureMin = Math.round(json_obj.main.temp_min);
		$scope.temperatureMax = Math.round(json_obj.main.temp_max);
		$scope.windspeed = Math.round(json_obj.wind.speed * 3.6);
		$scope.humidity = json_obj.main.humidity;
		$scope.date = new Date();
		$scope.ampm = (($scope.date.getHours() >= 12)? "PM": "AM");
		$scope.dynamicBlock = "half-empty-block";
	}



	function getJSONObj(search){
		return JSON.parse(getJSON("http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=metric&appid=0d9804d47ee2f434cb4ce6c4345aab5c"));;
	}

	function getJSON(url){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);

		return xmlhttp.responseText;	
	}




});



