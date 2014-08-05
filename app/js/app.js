// Defines the angular module for the app and it's dependencies
var app= angular.module('ctsgtoMediaApp', ['ngRoute', 'ngResource','rx']);


app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', { templateUrl: 'app/views/landing_page.html', controller: 'AppController' });	
  $routeProvider.otherwise({redirectTo: '/'});
  
}]);

