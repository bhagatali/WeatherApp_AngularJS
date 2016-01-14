//Home Page Controller
weatherApp.controller('homeController',['$scope','forecastService',function($scope,forecastService){
    $scope.city = forecastService.cityName;
    
    $scope.$watch('city',function(){
        forecastService.cityName = $scope.city;
    })
}]);

//Forecast Controller
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