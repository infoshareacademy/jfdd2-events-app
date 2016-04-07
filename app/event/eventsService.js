/**
 * Created by karinabzowka on 05.04.16.
 */
app.service('eventsService', eventsService);

function eventsService() {
  var events = [
    {
      title: 'Nazwa',
      type: 'koncert',
      startsAt: new Date("April 01, 2016 18:00:00"),
      endsAt: new Date("April 01, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'koncert',
      startsAt: new Date("April 03, 2016 18:00:00"),
      endsAt: new Date("April 03, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'koncert',
      startsAt: new Date("April 05, 2016 18:00:00"),
      endsAt: new Date("April 05, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'teatr',
      startsAt: new Date("April 01, 2016 18:00:00"),
      endsAt: new Date("April 01, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'teatr',
      startsAt: new Date("April 08, 2016 18:00:00"),
      endsAt: new Date("April 08, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'kino',
      startsAt: new Date("April 07, 2016 18:00:00"),
      endsAt: new Date("April 07, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sport',
      startsAt: new Date("April 10, 2016 18:00:00"),
      endsAt: new Date("April 10, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sport',
      startsAt: new Date("April 11, 2016 18:00:00"),
      endsAt: new Date("April 11, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'kino',
      startsAt: new Date("April 08, 2016 18:00:00"),
      endsAt: new Date("April 08, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sztuka',
      startsAt: new Date("April 19, 2016 18:00:00"),
      endsAt: new Date("April 19, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'rozrywka',
      startsAt: new Date("April 19, 2016 18:00:00"),
      endsAt: new Date("April 19, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'kino',
      startsAt: new Date("April 25, 2016 18:00:00"),
      endsAt: new Date("April 25, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sztuka',
      startsAt: new Date("April 14, 2016 18:00:00"),
      endsAt: new Date("April 14, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'teatr',
      startsAt: new Date("April 17, 2016 18:00:00"),
      endsAt: new Date("April 17, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'rozrywka',
      startsAt: new Date("April 14, 2016 18:00:00"),
      endsAt: new Date("April 14, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sport',
      startsAt: new Date("April 20, 2016 18:00:00"),
      endsAt: new Date("April 20, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sztuka',
      startsAt: new Date("April 15, 2016 18:00:00"),
      endsAt: new Date("April 15, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sport',
      startsAt: new Date("April 14, 2016 18:00:00"),
      endsAt: new Date("April 14, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'kino',
      startsAt: new Date("April 14, 2016 18:00:00"),
      endsAt: new Date("April 14, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'koncert',
      startsAt: new Date("April 29, 2016 18:00:00"),
      endsAt: new Date("April 29, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sport',
      startsAt: new Date("April 28, 2016 18:00:00"),
      endsAt: new Date("April 28, 2016 22:00:00"),
    }, {
      title: 'Nazwa',
      type: 'sztuka',
      startsAt: new Date("April 06, 2016 18:00:00"),
      endsAt: new Date("April 06, 2016 22:00:00"),
    },
  ];

  this.getEvents = function() {
    return events;
  }
}