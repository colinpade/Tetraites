angular.module('PictureApp', [])
.controller('MainController', ['$scope', 'jsonGrab', function($scope, jsonGrab){
  jsonGrab.success(function(data) {
    $scope.album = data;
    $scope.aName = data.album.name;
    $scope.mainImage = data.photos[0];

    $scope.changeMainImage = function(image) {
      $scope.mainImage = image;
      //console.log("show", arguments, this);
      if ($scope.lastSelected) {
        $scope.lastSelected.selected = '';
      }
      this.selected = 'selected';
      $scope.lastSelected = this;
    };

    $scope.nextImage = function() {
      $num = parseInt($scope.mainImage.id)+1;
      $scope.mainImage = data.photos[$num];
    };

    $scope.previousImage = function() {
      //This is broken
      console.log("number before subtract", $scope.mainImage.id);
      $num = parseInt($scope.mainImage.id)-1;
      console.log("number after subtract", $num);
      $scope.mainImage = data.photos[$num];
    };
  });
}])
.factory('jsonGrab', ['$http', function($http) {
  return $http.get('gallery_json.js')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);
