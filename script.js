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
      console.log("$scope.mainImage.id", $scope.mainImage.id);
      console.log("data.photos.length -1", data.photos.length - 1);
      console.log("$scope.mainImage.id", $scope.mainImage.id);
      console.log("$scope.mainImage.id++", $scope.mainImage.id++);
      if ( $scope.mainImage.id < data.photos.length-1 ) {
        $scope.mainImage = data.photos[parseInt($scope.mainImage.id)+1];
      } else {
        $scope.mainImage = data.photos[0];
      }
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
