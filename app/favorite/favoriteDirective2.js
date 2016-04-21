app.directive('favorite', favorite);


    function favorite() {
        return {
            restrict: 'EAC',
            templateUrl: 'favorite/favorite2.html',
            controller: favoriteController
        }
    }






app.controller('favoriteController', favoriteController);

    function favoriteController($scope,alert) {
        var vm = this;
//Ulubione i Polecane
        checkLogIn().then(function (){
            console.log('user ready to set')
            $scope.user=user;
            $scope.$apply();
        });



        vm.clicked = function (whichEvent) {
            alert.show('Clicked', whichEvent);
        }
    }
