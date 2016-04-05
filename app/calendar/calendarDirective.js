(function() {
    app.directive('calendar', calendar);


    function calendar() {
        return {
            restrict: 'EAC',
            templateUrl: 'calendar/calendarTemplate.html'
        }
    }
})();