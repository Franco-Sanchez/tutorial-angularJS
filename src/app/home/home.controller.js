(function () {
  "use strict";

  angular.module("demoApp.home").controller("HomeController", [
    "$scope",
    function HomeController($scope) {
      $scope.message = "Hello world, this is the home page!";
    },
  ]);
})();
