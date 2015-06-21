angular.module('PictureApp', [])
.controller('MainController', ['$scope', 'forecast', function($scope, forecast){
  forecast.success(function(data) {
    $scope.fiveDay = data;
    $scope.aName = data.album.name;;
  });
}])
.factory('forecast', ['$http', function($http) {
  return $http.get('gallery_json.js')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);
