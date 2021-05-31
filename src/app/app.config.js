(function () {
  "use strict";

  angular.module("demoApp").config([
    "$routeProvider",
    "$locationProvider",
    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "src/app/home/home.html",
          controller: "HomeController",
        })
        .when("/about", {
          templateUrl: "src/app/about/about.html",
          controller: "AboutController",
        })
        .when("/contact", {
          templateUrl: "src/app/contact/contact.html",
          controller: "ContactController",
        })
        .otherwise({
          redirectTo: "/",
        });

      $locationProvider.html5Mode(true);
    },
  ]);
})();
