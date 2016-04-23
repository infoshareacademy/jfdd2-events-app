/**
 * Created by karinabzowka on 05.04.16.
 */
var events = [];
app.service('eventsService', eventsService);
function eventsService() {


  return {
    getEventsFromServer: function () {
      return $.ajax({
          type: 'GET',
          url: urlPrefix + "/events",
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
