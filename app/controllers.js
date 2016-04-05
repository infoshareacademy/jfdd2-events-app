
app.controller('KitchenSinkCtrl', function(moment, alert, $log, eventsService) {
    var vm = this;

    //Ustawienia kalendarza
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = eventsService.getEvents();
    vm.isCellOpen = true;

    //Ulubione i Polecane
    vm.tabs = [
        {
            title: 'Ulubione',
            content: [
                {
                    title: 'An event',
                    type: 'warning',
                    startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                    endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                    draggable: true,
                    resizable: true
                }
            ]

        },
        {
            title: 'Polecane', content: []
        }
    ];

    //funkcje
    vm.eventClicked = eventClicked;
    vm.eventEdited = eventEdited;
    vm.eventDeleted = eventDeleted;
    vm.eventTimesChanged = eventTimesChanged;
    vm.toggle = toggle;

    function eventClicked(event) {
        var modalInstance = alert.show('Clicked', event);

        modalInstance.result.then(function (event) {
            console.log(event);
            vm.tabs[0].content.push(event);

        });
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
