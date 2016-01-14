weatherApp.service('forecastService',function(){
    this.cityName = 'Toronto, ON'
});

weatherApp.service('weatherOrgAPIService', ['$resource',function($resource){
    this.getWeatherFromAPI = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
                                      {callback:"JSON_CALLBACK"},
                                      {get:{method:'JSONP'}}
                                  );

        return weatherAPI.get({q:city,
                               cnt:days,
                               APPID:'cbfc51e463ac93ad6b05fba08072f3eb'
                              });        
    };
}]);