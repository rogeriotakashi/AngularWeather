angular.module('angularWeather',[])
.controller('mainController',function($scope){

	$scope.searchWeather = function(city){
		$scope.showImage = true;
		var json_obj = JSON.parse(getJSON("http://api.openweathermap.org/data/2.5/weather?q={"+city+"}&appid=0d9804d47ee2f434cb4ce6c4345aab5c"));
		console.log(json_obj.weather[0].description);
		$scope.tempo = json_obj.weather[0].description;
		console.log(json_obj);
		$scope.temperaturaMin = json_obj.main.temp_min;
		$scope.temperaturaMax = json_obj.main.temp_max;

		
	}



	function getJSON(url){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);

		return xmlhttp.responseText;	

	}


});



