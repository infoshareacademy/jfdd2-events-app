app.factory('alert', function($uibModal,localStorageService,sharedFavorite) {


    function show(action, event) {
        return $uibModal.open({
            templateUrl: 'event/modalContent.html',
            controller: function($uibModalInstance) {
                var vm = this;
                vm.action = action;
                vm.event = event;
                vm.login = "login znajomego";
                vm.addToFav = function () {
                    var eventArrWithoutFilter = localStorageService.get("ulubione") || [];

                    var recomenndedEvent = {
                        // login: "lukasz", to można dodaca jak już będzie na serwerze i bedzie sciagać ulubione akurat tego uzytkwinika
                        event: vm.event

                    };

                    eventArrWithoutFilter.push(recomenndedEvent);
                    localStorageService.set("ulubione", eventArrWithoutFilter);
                    sharedFavorite.setFavorite(recomenndedEvent);
                    $uibModalInstance.close(vm.event);
                };
                vm.addToRec = function () {
                    var eventArrWithoutFilter = localStorageService.get("polecane") || [];

                    var recomenndedEvent = {
                        login: vm.login,
                        event: vm.event
                                            
                    };
                    
                    eventArrWithoutFilter.push(recomenndedEvent);
                    localStorageService.set("polecane", eventArrWithoutFilter);
                    //dopisuje tylko gdy login sie zgadza
                    if(recomenndedEvent.login === "info") {
                        sharedFavorite.setRecomended(recomenndedEvent);
                    }
                    
                    $uibModalInstance.close(vm.event);

                };
            },

            controllerAs: 'vm'
        });
    }

    return {
        show: show
    };

});
