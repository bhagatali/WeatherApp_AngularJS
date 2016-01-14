weatherApp.directive('dailyWeather',function(){
    return {
        restrict:'AEC',
        templateUrl:'pages/dailyPanel.html',
        replace:true,
        scope:{
            dateFormatString:'@',
            weatherObject:'=',
            toCelsius:'&',
            toDate:'&'
        },
        transclude:true
}});