app.directive('favorite', favorite);


function favorite() {
    return {
        restrict: 'EAC',
        templateUrl: 'favorite/favorite.html',
        controller: favoriteController
    }
}

//
//
//
//
//
app.controller('favoriteController', favoriteController);

function favoriteController($scope, alert) {
    var vm = this;

    //Ulubione i Polecane
    console.log('fav ctrl');

    $.when(user).done(function (userData) {
        console.log('user ready', userData);
        userFavRec = angular.copy(userData);
        $scope.user = userFavRec;

        $scope.$apply()
    });


    vm.clicked = function (whichEvent) {
        alert.show('Clicked', whichEvent);
    }
}
