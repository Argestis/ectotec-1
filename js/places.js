var app = angular.module('places', ['gm']);

app.controller('MainCtrl', function($scope) {
  $scope.lat = undefined;
  $scope.lng = undefined;

  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      var location = $scope.autocomplete.getPlace().geometry.location;
      $scope.lat = location.lat();
      $scope.lng = location.lng();
      $scope.$apply();
      $scope.somePlaceholder = '';
      document.getElementById("address").value = document.getElementById("locationIs").value;
  });
});
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('places'), ['places']);
});
