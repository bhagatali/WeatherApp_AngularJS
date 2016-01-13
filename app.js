var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.config(function($routeProvider){
  $routeProvider
      .when('/home',{
            templateUrl:'pages/home.html',
            controller:'homeController'
        })
      .when('/forecast',{
            templateUrl:'pages/forecast.html',
            controller:'forecastController'
      
        })    
});


weatherApp.service('forecastService',function(){
    this.cityName = 'New York, NY'
});

weatherApp.controller('homeController',['$scope','forecastService',function($scope,forecastService){
    $scope.city = forecastService.cityName;
    
    $scope.$watch('city',function(){
        forecastService.cityName = $scope.city;
    })
}]);

weatherApp.controller('forecastController',['$scope','forecastService',function($scope,forecastService){
    $scope.city = forecastService.cityName;
}]);