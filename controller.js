function TestCtrl($scope){
	$scope.scopeTest = "This is a test";
	$scope.$watch('scopeTest', function(newVal){
		console.log("scope changed");
	});
	$scope.currentVal = function(){
		alert($scope.scopeTest);
	}
}