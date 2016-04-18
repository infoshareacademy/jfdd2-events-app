'use strict';

// Declare app level module which depends on views, and components

var app = angular.module('myApp', [
  'ngRoute',
  'mwl.calendar',
  // 'ngAnimate',
  'ui.bootstrap',
  "oc.lazyLoad",
  'LocalStorageModule'
]);

app.config(function($logProvider){
  $logProvider.debugEnabled(true);
});

app.controller('global', function($scope, $log ) {
  //$scope.name = 'World';
  //$scope.model = {value: "test"};
  //$log.debug('TEST Log');
});