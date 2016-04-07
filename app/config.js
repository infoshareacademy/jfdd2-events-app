/**
 * Created by ukasz on 03.04.16.
 */

    app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('myApp')});

