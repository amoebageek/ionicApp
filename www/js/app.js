		
var myApp=angular.module("myModule",['ionic','ui.router','Login_Ctrl'])
	
	.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
			
		
		$stateProvider
		    /*.state('main',{
		        	url:"/main",
		        	templateUrl:'templates/oops.html',
		        	controller:'baseCtrl'
		        })*/

		    .state('login',{
		        	url:"/login",
		        	templateUrl:'templates/login.html',
		        	controller:'loginCtrl'
		        })
		    .state('logout',{
		    	templateUrl:'templates/logout.html',
		        controller:'baseCtrl'
		    })
		   
		    .state('menue',{
		        	url:"/menue",
		        	templateUrl:'templates/menue.html',
		        	controller:'baseCtrl'
		        })
		    .state('menue.courses',{
		        	url:'/courses',
		        	templateUrl:'templates/courses.html',
		        	controller:'baseCtrl'
		        })
		    .state('menue.result',{
		        	url:'/result',
		        	templateUrl:'templates/results.html',
		        	controller:'baseCtrl'
		        })
		    .state('menue.transactions',{
		        	url:'/transactions',
		        	templateUrl:'templates/transactions.html',
		        	controller:'baseCtrl'
		        })
		    .state('menue.cards',{
		        	url:'/cards',
		        	templateUrl:'templates/cards.html',
		        	controller:'baseCtrl'
		        }) 
		    .state('menue.contact',{
		        	url:'/contact',
		        	templateUrl:'templates/contact.html',
		        	controller:'baseCtrl'
		        })
		    .state('menue.oops',{
		    	url:'/oops',
		    	templateUrl:'templates/oops.html',
		        controller:'baseCtrl'
		    })
	    $urlRouterProvider
			.otherwise('menue/oops');
		}])


	.controller("baseCtrl",["$scope","$ionicSideMenuDelegate","$location",function($scope,$ionicSideMenuDelegate,$location) {
	 
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		  };
		$scope.title="My App";

		$scope.logOut=function(){
			 $location.path("logout");
		}

		
		
	}]);
	

	