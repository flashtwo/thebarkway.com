// var app = angular.module('app', ['app.controllers']);
var app = angular.module('app', ['app.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home',
        // controller: 'IndexController'
    })
    .otherwise({
        redirectTo: '/'
    });
}])
    .config(['$locationProvider', function($locationProvider) {
    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true
    });
}]);
