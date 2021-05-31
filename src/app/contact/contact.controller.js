(function () {
  "use strict";

  angular.module("demoApp.contact").controller("ContactController", [
    "$scope",
    function ContactController($scope) {
      $scope.message = "Would you like to contact us?";
    },
  ]);
})();
