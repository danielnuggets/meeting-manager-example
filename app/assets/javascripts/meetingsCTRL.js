(function() {
  "use strict";

  angular.module("app").controller("meetingsCTRL",function($scope, $http){

    $scope.getData = function() {
      $http.get("/api/v1/meetings").then(
        function(response) {
          $scope.meetings = response.data;
        }
      );
    };

    $scope.clickTag = function(tagName) {
      $scope.tagClicked = tagName;
    };

    $scope.sortByAttribute = function(attribute) {
      $scope.orderAttribute = attribute;
      $scope.descendingBoolean = !$scope.descendingBoolean;
    };

  });

}());