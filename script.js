angular.module('PictureApp', [])
.controller('MainController', ['$scope', 'forecast', function($scope, forecast){
  forecast.success(function(data) {
    $scope.album = data;
    $scope.aName = data.album.name;
    $scope.mainImageURL = data.photos[0].url;

    $scope.changeMainImage = function(imageURL) {
      $scope.mainImageURL = imageURL;
    };
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
