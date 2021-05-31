(function () {
  "use strict";

  angular.module("demoApp.about").controller("AboutController", [
    "$scope",
    function AboutController($scope) {
      $scope.message = "Hi! This is the about page.";
    },
  ]);
})();
