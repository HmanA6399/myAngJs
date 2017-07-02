'use strict';

function regPlur(num) {
		if (num>1) {

			return 's';

		}else{

			return '' ;
		}
}
angular.module('blogList')
	.component('blogList' , {

		templateUrl:'/templates/blog-list.html',
		controller: function($scope) {

			var blogItems = [

				{title:'First',id:'1',description:'Asmaa Mohamed Saeed'},
				{title:'Second',id:'2',description:'Ebrahim Gomaa Abdulqader'},
				{title:'Third',id:'3',description:'React.js'},
				{title:'Fourth',id:'4',description:'Node.js'}

			];
			
			console.log('Hello!');
			$scope.title = "Hi there";
			$scope.clicks = 0;
			$scope.myClick = function() {
				console.log('clicked');
				$scope.clicks += 1 ;
				$scope.title='clicked ' + $scope.clicks + ' time' + regPlur($scope.clicks);
			}
		}});
	/**.controller('BlogListController', function($scope){
		console.log('Hello!');
		$scope.title = "Hi there";
		$scope.clicks = 0;
		$scope.myClick = function() {
			console.log('clicked');
			$scope.clicks += 1 ;
			$scope.title='clicked ' + $scope.clicks + ' time' + regPlur($scope.clicks);
		}
	});**/