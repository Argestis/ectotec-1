(function () {
  'use strict';

  angular.module('myapp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']).config(function($mdDateLocaleProvider) {
    /**
     * @param date {Date}
     * @returns {string} string representation of the provided date
     */
    $mdDateLocaleProvider.formatDate = function(date) {
      document.getElementById("dateIs").value = date ? moment(date).format('YYYY-MM-DD') : '';
      return date ? moment(date).format('YYYY-MM-DD') : '';
    };

    /**
     * @param dateString {string} string that can be converted to a Date
     * @returns {Date} JavaScript Date object created from the provided dateString
     */
    $mdDateLocaleProvider.parseDate = function(dateString) {
      var m = moment(dateString, 'L', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
    };
  })
  .controller("AppCtrl", function($log) {
    this.myDate = new Date();

    this.onDateChanged = function() {
      document.getElementById("dateIs").value = this.myDate;
      // $log.log('Updated Date: ', this.myDate);
    };
  });
})();
// angular.element(document).ready(function() {
//     angular.bootstrap(document.getElementById('pickADate'), ['myapp']);
// });

var prepareUri = function (uri) {
  return uri.replace(/&/g, '%26');
};

var round = function(num) {
  // Round number up to 1 decimal places, use parseInt to prevent NaN on load
  return parseInt(Math.round(num * 10) / 10) || '';
};

function getLocation(){
  navigator.geolocation.getCurrentPosition(function(position) {

    var app = angular.module('weather', ['gm']);

    app.controller('weatherCtrl', function($scope, $http) {

      var _apiKey = '&APPID=9426a9ac54971d73e4652c97aab48d60';
      var _apiUrlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=' + round(position.coords.latitude) + '&lon=' + round(position.coords.longitude) + '&units=metric';

      $http.get(_apiUrlCurrent + _apiKey).then(function(response) {
          // console.log( response.data.main.temp);
             document.forms["myForm"]["temp"].value = response.data.main;
             $scope.temp = response.data.main.temp

      });
    });
    angular.element(document).ready(function() {
        angular.bootstrap(document.getElementById('weather'), ['weather']);
    });


  });
}
