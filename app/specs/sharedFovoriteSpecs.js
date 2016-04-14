QUnit.module('SharedFavorite module', {
  beforeEach: function() {
    this.mockService = {
      get: function(key) {

      }
    };
    this.service = publicService(this.mockService);

  }
});

QUnit.test('Dodawania ulubionych', function(assert) {
  this.service.setFavorite('Koncert 1');
  assert.equal(this.service.getFavorite().content.length, 1, 'Dodanie pierwszego powoduje że mamy jedna ulubiona rzecz');
  this.service.setFavorite('Koncert 2');
  assert.equal(this.service.getFavorite().content.length, 2, 'Dodanie drugiego powoduje że mamy dwie ulubione rzeczy');
});

QUnit.test('Dodanie tego samego elementu dwa razy', function(assert) {
  this.service.setFavorite('one');
  this.service.setFavorite('one');
  assert.equal(this.service.getFavorite('one').content.length, 1, 'Mamy jeden element w ulubionych');
});


QUnit.test('Dodanie pustego elementu', function(assert) {
  this.service.setFavorite('');
  assert.equal(this.service.getFavorite().content.length, 0, 'Nie doda pustego elementu');
});

QUnit.test('Dodanie pustego elementu ze spacją', function(assert) {
  this.service.setFavorite(' ');
  assert.equal(this.service.getFavorite().content.length, 0, 'Nie doda pustego elementu ze spacją');
});

//QUnit.test()
