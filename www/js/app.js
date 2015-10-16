		
var myApp=angular.module("myModule",['ionic','ui.router'])
	
	.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
			
		$urlRouterProvider
			.otherwise('oops');
		$stateProvider
		    .state('dashboard',{
		        	url:"/dashboard",
		        	templateUrl:'templates/dashboard.html',
		        	controller:"myCtrl"
		        })
		    .state('courses',{
		        	url:'/courses',
		        	templateUrl:'templates/courses.html',
		        	controller:'myCtrl'
		        })
		    .state('transactions',{
		        	url:'/transactions',
		        	templateUrl:'templates/transactions.html'
		        })
		    .state('oops',{
		    	url:'/oops',
		    	templateUrl:'templates/oops.html',
		    	controller:'myCtrl'
		    })
		}])


	.controller("myCtrl",["$scope","$ionicSideMenuDelegate",function($scope,$ionicSideMenuDelegate) {
	 
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		  };
		$scope.title="My App";
		
	}]);

	