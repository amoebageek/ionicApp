		
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
		        	url:"/logout",
		        	templateUrl:'templates/logout.html',
		        	controller:'baseCtrl'
		        })
		    .state('dashboard',{
		        	url:"/dashboard",
		        	templateUrl:'templates/menue.html',
		        	controller:'baseCtrl'
		        })
		    .state('courses',{
		        	url:'/courses',
		        	templateUrl:'templates/courses.html',
		        	controller:'baseCtrl'
		        })
		    /*.state('result',{
		        	url:'/result',
		        	templateUrl:'templates/results.html',
		        	controller:'baseCtrl'
		        })
		    .state('transactions',{
		        	url:'/transactions',
		        	templateUrl:'templates/transactions.html',
		        	controller:'baseCtrl'
		        })
		    .state('cards',{
		        	url:'/cards',
		        	templateUrl:'templates/cards.html',
		        	controller:'baseCtrl'
		        }) 
		    .state('contact',{
		        	url:'/contact',
		        	templateUrl:'templates/contact.html',
		        	controller:'baseCtrl'
		        })*/
		    .state('oops',{
		    	url:'/oops',
		    	templateUrl:'templates/oops.html',
		        controller:'baseCtrl'
		    })
	    $urlRouterProvider
			.otherwise('oops');
		}])


	.controller("baseCtrl",["$scope","$ionicSideMenuDelegate",function($scope,$ionicSideMenuDelegate) {
	 
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		  };
		$scope.title="My App";
		
	}]);
	

	