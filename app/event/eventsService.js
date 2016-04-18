/**
 * Created by karinabzowka on 05.04.16.
 */
app.service('eventsService', eventsService);

function eventsService() {
  var events = [
    {
      title: 'Koncert',
      type: 'koncert', //6 typow wydarzen koncert, sztuka, teatr, kino, sport, rozrywka
      startsAt: new Date("April 01, 2016 18:00:00"), // data koniecznie w takim formacie
      endsAt: new Date("April 01, 2016 22:00:00"), // data koniecznie w takim formacie
      description : "opis",//tekst
      image: "image URL",//link do obrazka
      like: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
      recomended: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
      id: 1 //losowa wartosc
    }, {
      title: 'Sport',
      type: 'sport',
      startsAt: new Date("April 10, 2016 18:00:00"),
      endsAt: new Date("April 10, 2016 22:00:00"),
      description : "opis",
      image: "image URL",
      like: 0,
      recomended: 0,
      id: 2 //losowa wartosc
    },  {
      title: 'Rozrywka',
      type: 'rozrywka',
      startsAt: new Date("April 19, 2016 18:00:00"),
      endsAt: new Date("April 19, 2016 22:00:00"),
      description : "opis",
      image: "image URL",
      like: 0,
      recomended: 0,
      id: 3 //losowa wartosc
    }, {
      title: 'Kino',
      type: 'kino',
      startsAt: new Date("April 25, 2016 18:00:00"),
      endsAt: new Date("April 25, 2016 22:00:00"),
      description : "opis",
      image: "image URL",
      like: 0,
      recomended: 0,
      id: 4 //losowa wartosc
    }, {
      title: 'Sztuka',
      type: 'sztuka',
      startsAt: new Date("April 14, 2016 18:00:00"),
      endsAt: new Date("April 14, 2016 22:00:00"),
      description : "opis",
      image: "image URL",
      like: 0,
      recomended: 0,
      id: 5 //losowa wartosc
    }, {
      title: 'Teatr',
      type: 'teatr',
      startsAt: new Date("April 17, 2016 18:00:00"),
      endsAt: new Date("April 17, 2016 22:00:00"),
      description : "opis",
      image: "image URL",
      like: 0,
      recomended: 0,
      id: 6 //losowa wartosc
    }
  ];

  this.getEvents = function() {
    return events;
  }
}


function downloadEventsFromServer(thing){
  return $.ajax({
     url:'http://localhost:8030/' + thing,
     method: 'GET',
     // data: recomenndedEvent,
     dataType:"json"
     // success: function(result) {
         // console.log(result);

     // }
     });
}
// function eventsService() {
//
// var events = [];
//
//
//
//   this.getEvents = function() {
//     return $.when(downloadEventsFromServer("people"))
//         .done(function(eventsFromServer) {
//           console.debug(eventsFromServer);
//           debugger
//
//           events = eventsFromServer ;
//
//         });
//     // console.debug("dsadads" + events);
//
//
//   }
// }
//var app = angular.module('myApp', ['eventsService']).controller('searchMenu', function($scope) {
//  $scope.events.type
//});