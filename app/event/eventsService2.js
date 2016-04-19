/**
 * Created by karinabzowka on 05.04.16.
 */
app.service('eventsService', eventsService);
var URL = 'https://isa-api2.herokuapp.com/fav/events-list';
function eventsService() {
    var events = [];

    return {
        getEventsFromServer: function () {
            return $.ajax({
                    type: 'GET',
                    url: URL,
                    dataType: 'json'
                })
                .done(function (eventsList) {
                    eventsList.result.forEach(function (value) {
                        events.push(value);
                    });
                })
                .error(function (msg) {
                    console.log(msg)
                })
        },

        getEvents: function () {
            return events;
        }
    }
}




