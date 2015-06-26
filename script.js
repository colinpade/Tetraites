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
      //how does this add one?
      if ( $scope.mainImage.id < data.photos.length ) {
        $scope.mainImage = data.photos[parseInt($scope.mainImage.id)];
      } else {
        $scope.mainImage = data.photos[0];
      }
    };
    $scope.previous = function() {
      if ( parseInt($scope.mainImage.id) == 1 ) {
        $scope.mainImage = data.photos[5];
      } else {
        $scope.mainImage = data.photos[parseInt($scope.mainImage.id)-2];
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
