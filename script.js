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

    $scope.next = function() {
      if ( $scope.mainImage.id < data.photos.length ) {
        $scope.mainImage = data.photos[parseInt($scope.mainImage.id)];
      } else {
        $scope.mainImage = data.photos[0];
      }
    };
    $scope.previous = function() {
      console.log("before");
      console.log("$scope.mainImage.id", $scope.mainImage.id);
      console.log("data.photos.length", data.photos.length);
      console.log("addition: ", parseInt($scope.mainImage.id)+1);
      if ( $scope.mainImage.id < data.photos.length ) {
        $scope.mainImage = data.photos[parseInt($scope.mainImage.id)];
      } else {
        $scope.mainImage = data.photos[0];
      }
      console.log("after");
      console.log("$scope.mainImage.id", $scope.mainImage.id);
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
