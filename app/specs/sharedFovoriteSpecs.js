QUnit.module('SharedFavorite module', {
  beforeEach: function() {
    var localStorageServiceMock = {
      get: function (key) {

      }
    };
    this.service = sharedFavorite(localStorageServiceMock);
  }
});

QUnit.test('Dodawania ulubionych', function(assert) {
  this.service.setFavorite('Koncert 1');
  assert.equal(this.service.getFavorite()[0].content.length, 1, 'Dodanie pierwszego powoduje że mamy jedna ulubiona rzecz');
  this.service.setFavorite('Koncert 2');
  assert.equal(this.service.getFavorite()[0].content.length, 2, 'Dodanie drugiego powoduje że mamy dwie ulubione rzeczy');
});

QUnit.test('Dodanie tego samego elementu dwa razy', function(assert) {
  // given:
  var eventId = 684165432;
  var event = {"event": { "id": eventId, "name": "testName"}};
  var eventsFromLocalStorage = [];
  eventsFromLocalStorage.push(event);

  // when:
  var checkResult = this.service.checkIfThereIsEvent(eventId, eventsFromLocalStorage);

  // then:
  assert.equal(checkResult, false, 'Mamy jeden element w ulubionych');
});



//QUnit.test()
