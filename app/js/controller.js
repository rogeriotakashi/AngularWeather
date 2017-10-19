angular.module('angularWeather',['ngAnimate','resultModule','ngRoute','ngMap'])
.controller('mainController',function($scope){
	$scope.dynamicBlock = "empty-block";
	$scope.resultText = "";
	$scope.div1Hide=false;


	$scope.searchWeather = function(search,parameter){
		$scope.showImage = true;
		$scope.resultText = search;
		var json_obj = getJSONObj(search,parameter);
		console.log(json_obj);

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

	$scope.showMap = function(){
		$scope.div1Hide = !$scope.div1Hide;
	}

	$scope.mapClicked = function(event){
		$scope.searchWeather(event.latLng,'coord');
		$scope.div1Hide = false;
	}


	function getJSONObj(search,parameter){
		switch(parameter){
			case 'city':
				return JSON.parse(getJSON("http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=metric&appid="));
				break;
			case 'coord':
				return JSON.parse(getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+search.lat()+"&lon="+search.lng()+"&units=metric&appid="));
				break;
		}
	}

	function getJSON(url){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);

		return xmlhttp.responseText;	
	}




})
.config(function($routeProvider){
	
	$routeProvider.when("/sign", {
    	templateUrl : "partials/sign.html"
  	}).when("/", {
    	templateUrl : "partials/principal.html"
  	});

});



