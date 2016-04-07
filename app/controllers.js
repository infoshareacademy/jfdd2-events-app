
app.controller('KitchenSinkCtrl', function(moment, alert, $log, eventsService, calendarConfig) {

    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';

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
                    title: 'Wydarzenie',
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
        
        }
        );
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

app.controller('i18nCtrl', function($scope, $window, $ocLazyLoad, calendarConfig, moment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();

    calendarConfig.dateFormatter = 'moment'; // use moment instead of angular for formatting dates
    var originali18n = angular.copy(calendarConfig.i18nStrings);
    calendarConfig.i18nStrings.weekNumber = 'Tydzień {week}';

    $window.moment = $window.moment || moment;
    $ocLazyLoad.load('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/pl.js').then(function() {
        moment.locale('pl', {
            week: {
                dow: 1 // Monday is the first day of the week
            }
        });
        moment.locale('pl'); // change the locale to french
    });

    $scope.$on('$destroy', function() {
        moment.locale('en');
        calendarConfig.i18nStrings = originali18n;
    });

});

