var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
      .when('/home',{
            templateUrl:'pages/home.html',
            controller:'homeController'
        })
      .when('/forecast',{
            templateUrl:'pages/forecast.html',
            controller:'forecastController' 
        })  
      .when('/forecast/:days',{
            templateUrl:'pages/forecast.html',
            controller:'forecastController'
        })    
}]);


weatherApp.service('forecastService',function(){
    this.cityName = 'Toronto, ON'
});

weatherApp.controller('homeController',['$scope','forecastService',function($scope,forecastService){
    $scope.city = forecastService.cityName;
    
    $scope.$watch('city',function(){
        forecastService.cityName = $scope.city;
    })
}]);

weatherApp.controller('forecastController', 
                      ['$scope',
                       '$resource',
                       '$routeParams',
                       'forecastService',
                       function($scope,$resource,$routeParams,forecastService){
    $scope.city = forecastService.cityName;
    $scope.days = $routeParams.days || 6;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
                                  {callback:"JSON_CALLBACK"},
                                  {getWeather:{method:'JSONP'}}
                                 );
                           
    $scope.dailyWeather = $scope.weatherAPI.getWeather({
                                                        q:$scope.city,
                                                        cnt:$scope.days,
                                                        APPID:'cbfc51e463ac93ad6b05fba08072f3eb'
                                                       });
    $scope.convertToCelsius = function(kelvin){
        return Math.round(kelvin - 273.15);
    };
    
    $scope.convertToDate = function(weatherDate){
        return new Date(weatherDate * 1000);
    };
}]);