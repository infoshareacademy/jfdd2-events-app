app.controller('global', function ($scope, eventsService, $log) {
    $log.info('App login screen initiated');

});


app.controller('KitchenSinkCtrl', function($scope, moment, alert, $log, eventsService, calendarConfig) {


    eventsService.getEventsFromServer().done(function () {
        $scope.events = eventsService.getEvents();
        $scope.filteredOutEvents = $scope.events;
        vm.events = $scope.filteredOutEvents;
    });
    $scope.pickType = function () {
        console.log($scope.item);
        $scope.filteredOutEvents = $scope.events.filter(function (event) {
            return $scope.item === '' ? true : event.type === $scope.item;
        });
        vm.events = $scope.filteredOutEvents;

    };

    calendarConfig.templates.calendarMonthCell = 'calendar/customedElements/customMonthCell.html';
    calendarConfig.templates.calendarSlideBox = 'calendar/customedElements/customSlideBox.html';

    var vm = this;

    //Ustawienia kalendarza
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = $scope.filteredOutEvents;
    vm.isCellOpen = true;


    //funkcje
    vm.eventClicked = eventClicked;
    vm.eventEdited = eventEdited;
    vm.eventDeleted = eventDeleted;
    vm.eventTimesChanged = eventTimesChanged;
    vm.toggle = toggle;

    function eventClicked(event) {
        alert.show('Clicked', event);

    }

    function eventEdited(event) {

        alert.show('Edited', event);
    }

    function eventDeleted(event) {
        alert.show('Deleted', event);
    }

    function eventTimesChanged(event) {
        alert.show('Dropped or resized', event);
    }

    function toggle($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    }
    $log.info('Events being scoped, calendar being built');

});

