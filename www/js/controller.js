



var myApp=angular.module("myApp",[])
	.controller("myCtrl",["$scope","$ionicSideMenuDelegate",function($scope,$ionicSideMenuDelegate) {
	 
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		  };
		$scope.title="My App";
		$scope.loadMore=function(){
			console.log('refreshed..');
		}

	}]);
