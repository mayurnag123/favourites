var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
     $http.get("https://www.reddit.com/r/analog/top/.json")
    .then(function(response) {
        $scope.promos = response.data.data.children;
    });
	$scope.fav = [];
	$scope.isFav = false;
	$scope.addToFav = function(index) {
		for(var i=0;i<$scope.fav.length;i++) {
			if($scope.fav[i].data.title == $scope.promos[index].data.title )
				break;
		}
		if(i == $scope.fav.length)
		$scope.fav.push($scope.promos[index]);
	}
	$scope.removeFromFav = function(i) {
		
		$scope.fav.splice(i,1);
	}
});