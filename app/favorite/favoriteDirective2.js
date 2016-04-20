app.directive('favorite', favorite);


    function favorite() {
        return {
            restrict: 'EAC',
            templateUrl: 'favorite/favorite2.html',
            controller: favoriteController
        }
    }






app.controller('favoriteController', favoriteController);

    function favoriteController(alert) {
        var vm = this;
//Ulubione i Polecane
        vm.user=user;



// {
//
//     "favourite": [{
//         "objectId": "Sport",
//         "type": "sport",
//         "startsAt": "new Data(April 05, 2016 18:00:00)",
//         "endsAt": "new Data(April 05, 2016 22:00:00)",
//         "description" : "opis",
//         "image": "image URL",
//         "id": 1}]
//
// }

        vm.clicked = function (whichEvent) {
            alert.show('Clicked', whichEvent);
        }
    }
