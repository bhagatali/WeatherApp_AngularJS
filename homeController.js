//Home Page Controller
weatherApp.controller('homeController',['$scope','forecastService',function($scope,forecastService){
    $scope.city = forecastService.cityName;
    
    $scope.$watch('city',function(){
        forecastService.cityName = $scope.city;
    })
}]);
