app.directive('favorite', favorite);


    function favorite() {
        return {
            restrict: 'EAC',
            templateUrl: 'favorite/favorite2.html',
            controller: favoriteController
        }
    }






app.controller('favoriteController', favoriteController);

    function favoriteController(sharedFavorite,alert) {
        var vm = this;
//Ulubione i Polecane

        vm.user = sharedFavorite.emptyFavoriteBox();
        sharedFavorite.getFavAndRecFromServer();
        //console.log(vm.tabs[0]);
        vm.clicked = function (whichEvent) {
            alert.show('Clicked', whichEvent);
        }
    }
