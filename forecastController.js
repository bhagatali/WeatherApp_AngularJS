//Forecast Controller
weatherApp.controller('forecastController', 
                      ['$scope',
                       '$routeParams',
                       'forecastService',
                       'weatherOrgAPIService',
                       function($scope,$routeParams,forecastService,weatherOrgAPIService){
                           
    $scope.city = forecastService.cityName;
    $scope.days = $routeParams.days || 6;                       
    $scope.dailyWeather = weatherOrgAPIService.getWeatherFromAPI($scope.city,$scope.days);
                           
    $scope.convertToCelsius = function(kelvin){
        return Math.round(kelvin - 273.15);
    };
    
    $scope.convertToDate = function(weatherDate){
        return new Date(weatherDate * 1000);
    };
}]);