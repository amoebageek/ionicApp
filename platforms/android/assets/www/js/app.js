		
var myApp=angular.module("myModule",['ionic','ui.router'])
	
	.controller("myCtrl",["$scope","$ionicSideMenuDelegate",function($scope,$ionicSideMenuDelegate) {
	 
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		  };
		$scope.title="My App";
		
	}]);
