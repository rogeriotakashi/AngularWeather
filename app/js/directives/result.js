angular.module('resultModule',[]).controller('controller',[])
.directive('resultTest',function(){
	var ddo={};
	ddo.restrict="AE";

	ddo.templateUrl='js/directives/result.html';

	return ddo;

});
