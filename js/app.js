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
