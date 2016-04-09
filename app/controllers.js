
app.controller('KitchenSinkCtrl', function(moment, alert, $log, eventsService, calendarConfig) {

    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';

    var vm = this;

    //Ustawienia kalendarza
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = eventsService.getEvents();
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

});

