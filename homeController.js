//Home Page Controller
weatherApp.controller('homeController',['$scope',
                                        '$location',                                        
                                        'forecastService',
                                        function($scope,$location,forecastService){
    $scope.city = forecastService.cityName;
    
    $scope.$watch('city',function(){
        forecastService.cityName = $scope.city;
    });
    
    $scope.submitMyForm =  function(){
        $location.path('/forecast');
    };
}]);
