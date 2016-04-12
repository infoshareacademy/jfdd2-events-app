QUnit.module('SharedFavorite module', {
  beforeEach: function() {
    this.ctrl = angular.element(document.body).injector().get('sharedFavorite');
  }
});

//QUnit.test(