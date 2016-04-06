/**
 * Created by karinabzowka on 05.04.16.
 */
app.service('eventsService', eventsService);

function eventsService() {
  var events = [
    {
      title: 'Pezet',
      type: 'warning',
      startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
      endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
      draggable: true,
      resizable: true
    }, {
      title: 'Rihanna',
      type: 'info',
      startsAt: moment().subtract(1, 'day').toDate(),
      endsAt: moment().add(5, 'days').toDate(),
      draggable: true,
      resizable: true
    }, {
      title: '50 Cent',
      type: 'important',
      startsAt: moment().startOf('day').add(7, 'hours').toDate(),
      endsAt: moment().startOf('day').add(19, 'hours').toDate(),
      recursOn: 'year',
      draggable: true,
      resizable: true
    }
  ];

  this.getEvents = function() {
    return events;
  }
}