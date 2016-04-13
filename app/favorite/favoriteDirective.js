app.directive('favorite', favorite);


    function favorite() {
        return {
            restrict: 'EAC',
            templateUrl: 'favorite/favorite.html',
            controller: favoriteController
        }
    }






app.controller('favoriteController', favoriteController);

    function favoriteController(sharedFavorite,alert) {
        var vm = this;
//Ulubione i Polecane

        vm.tabs = sharedFavorite.getFavorite();
        vm.clicked = function (whichEvent) {
            alert.show('Clicked', whichEvent);
        }
    }