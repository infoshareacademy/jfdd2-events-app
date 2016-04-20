app.factory('alert', function ($uibModal, localStorageService, sharedFavorite) {


    //
    // function checkIfRecomended(eventID, eventsFromLocalStorage, login) {
    //     var putOnFavorite = true;
    //
    //     if (eventsFromLocalStorage.length === 0) {
    //         putOnFavorite = true;
    //     } else {
    //         eventsFromLocalStorage.map(function (value, index) {
    //
    //             for (prop in eventsFromLocalStorage[index]) {
    //
    //                 if (eventsFromLocalStorage[index].event.id === eventID && eventsFromLocalStorage[index].login === login) {
    //                     putOnFavorite = false;
    //                 }
    //             }
    //         });
    //     }
    //     return putOnFavorite ? true : false;
    //
    // }

    function showStatement(statement) {
        return $uibModal.open({
            templateUrl: "event/modalForStatement.html",
            size: "sm",
            controller: function () {
                var vm = this;
                vm.statement = statement;
            },
            controllerAs: 'vm'
        });
    }

    function show(action, event) {
        return $uibModal.open({
            templateUrl: 'event/modalContent.html',
            controller: function ($uibModalInstance) {
                var vm = this;
                vm.action = action;
                vm.event = event;
                vm.login = "";

                vm.addToFav = function () {
                    if (sharedFavorite.setFavToServerWithValidation(event) === true) {
                        $uibModalInstance.close(vm.event);
                    }
                    if (sharedFavorite.setFavToServerWithValidation(event) === false) {

                        showStatement("to wydarzenie jest juz w ulubionych");
                    }
                    if (sharedFavorite.setFavToServerWithValidation(event) === -1) {
                        $uibModalInstance.close(vm.event);

                    }
                }

                // vm.addToRec = function () {
                //     if (vm.login === "") {
                //         showStatement("Należy podać login znajomego!");
                //
                //
                //     } else {
                //
                //
                //
                //     }
                //
                // };

            },

            controllerAs: 'vm'
        });
    }

    return {
        show: show,
        showStatement: showStatement
    };

});
