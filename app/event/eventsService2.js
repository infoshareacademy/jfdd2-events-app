/**
 * Created by karinabzowka on 05.04.16.
 */
app.service('eventsService', eventsService);
var URL ='https://isa-api2.herokuapp.com/fav/events-list';
function eventsService() {
  var events = [

  ];

  return {
    getEventsFromServer : function () {
    return $.ajax({
      type: 'GET',
      url: URL,
      dataType: 'json',
      success: function (eventsList) {


        eventsList.result.forEach(function(value){
          events.push(value);
        });
        //events[0] = eventsList.result[0];
        //events.push(eventsList.result);
        console.log("evenstlist",eventsList);
        console.log("events",events);
        console.log("eventsresult",eventsList.result);

      }
    });
  },

  getEvents : function() {
    return events;
  }}
}




