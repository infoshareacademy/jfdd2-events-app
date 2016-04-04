/**
 * Created by ukasz on 03.04.16.
 */
angular.module("myApp")
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);