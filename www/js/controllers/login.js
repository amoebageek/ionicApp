var myApp=angular.module('Login_Ctrl',[])

	.controller('loginCtrl',['$scope','$ionicModal',function($scope,$ionicModal){

		$ionicModal.
			fromTemplateUrl('templates/facebook-login.html',{
				scope:$scope,
				animation:'slide-in-up'
			})
			.then(function(facebook_modal){
				$scope.login_with_facebook=facebook_modal;
			});

		$ionicModal
			.fromTemplateUrl('templates/google-login.html',{
				scope:$scope,
				animation:'slide-in-up'
			})
			.then(function(google_modal){
				$scope.login_with_google=google_modal;
			});
		$ionicModal
			.fromTemplateUrl('templates/native-login.html',{
					scope:$scope,
					animation:'slide-in-up'
			})
			.then(function(google_modal){
					$scope.login_with_native=google_modal;
			});

		$scope.open_login_modal=function(type){
			if(type=='facebook'){
				$scope.login_with_facebook.show();	
			}
			else if(type=='google'){
				$scope.login_with_google.show();
			}
			else{
				$scope.login_with_native.show();
			}
			
		}
		$scope.close_login_modal=function(type){
			if(type=='facebook'){
				$scope.login_with_facebook.hide();	
			}
			else if(type=='google'){
				$scope.login_with_google.hide();
			}
			else{
				$scope.login_with_native.hide();
			}
		}
		

	}]);