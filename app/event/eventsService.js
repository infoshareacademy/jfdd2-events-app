/**
 * Created by karinabzowka on 05.04.16.
 */
app.service('eventsService', eventsService);
function eventsService() {
  var events = [];

  return {
    getEventsFromServer: function () {
      return $.ajax({
          type: 'GET',
          url: URL + "/events",
          dataType: 'json'
        })
        .done(function (eventsList) {
          eventsList.forEach(function (value) {
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
