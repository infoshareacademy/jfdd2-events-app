(function() {
    app.directive('calendar', calendar);


    function calendar() {
        return {
            restrict: 'EAC',
            templateUrl: 'calendar/calendarTemplate.html'
        }
    }

    app.directive('language', language);


    function language() {
        return {
            restrict: 'EAC',
            templateUrl: 'calendar/language.html'
        }
    }
    
})();