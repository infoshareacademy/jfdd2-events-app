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

    function showStatement (statement){
        return $uibModal.open({
            templateUrl: "event/modalForStatement.html",
            size: "sm",
            controller: function() {
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
                    console.log("dasdsadas");
                    sharedFavorite.getFavoriteFromServer();
                    
                    // if (setFavoritePlusValidation(event.id, event) === true) {
                    //    
                    //     $uibModalInstance.close(vm.event);
                    //    
                    // } else {
                    //     showStatement("Te wydarzenie jest juz w ulubionych!");
                    //
                    // }
                };
                
                // vm.addToRec = function () {
                //     if (vm.login === "") {
                //         showStatement("Należy podać login znajomego!");
                //
                //
                //     } else {
                //
                //
                //         var eventArrWithoutFilter = localStorageService.get("polecane") || [];
                //         var recomenndedEvent = {
                //             login: vm.login,
                //             event: vm.event
                //
                //         };
                //         if (checkIfRecomended(event.id, eventArrWithoutFilter, recomenndedEvent.login) === true) {
                //
                //             // event.recomended++;
                //
                //             eventArrWithoutFilter.push(recomenndedEvent);
                //             localStorageService.set("polecane", eventArrWithoutFilter);
                //             //dopisuje tylko gdy login sie zgadza
                //             if (recomenndedEvent.login === "info") {
                //                 sharedFavorite.setRecomended(recomenndedEvent);
                //             }
                //
                //             $uibModalInstance.close(vm.event);
                //         } else {
                //             showStatement("Temu znajomemu juz poleciles te wydarzenie!");
                //
                //
                //         }
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
