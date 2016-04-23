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
                    
    sharedFavorite.setFavToServerWithValidation(event,showStatement);
                        $uibModalInstance.close(vm.event);
                   
                        // showStatement('Te wydarzenie jest już w ulubionych!')
                    
                }

                vm.addToRec = function () {
                    if (vm.login === "") {
                        showStatement("Należy podać login znajomego!");

                    } else{
                        
                             sharedFavorite.setRecToServerWithValidation(event,vm.login,showStatement("Te wydarzenie zostało polecone użytkownikowi " + vm.login));
                             $uibModalInstance.close(vm.event);
                        }


                    

                };

            },

            controllerAs: 'vm'
        });
    }

    return {
        show: show,
        showStatement: showStatement
    };

});
