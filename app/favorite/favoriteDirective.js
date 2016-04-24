app.directive('favorite', favorite);


function favorite() {
    return {
        restrict: 'EAC',
        templateUrl: 'favorite/favorite.html',
        controller: favoriteController
    }
}


app.controller('favoriteController', favoriteController);

function favoriteController($scope, alert) {
    var vm = this;


    $.when(user).done(function (userData) {
        userFavRec = angular.copy(userData);
        $scope.user = userFavRec;

        $scope.$apply()
    });


    vm.clicked = function (whichEvent) {
        alert.show('Clicked', whichEvent);
    }
}
