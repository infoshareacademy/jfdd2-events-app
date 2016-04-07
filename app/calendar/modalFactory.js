app.factory('alert', function($uibModal,localStorageService) {

    function show(action, event) {
        return $uibModal.open({
            templateUrl: 'event/modalContent.html',
            controller: function($uibModalInstance) {
                var vm = this;
                vm.action = action;
                vm.event = event;
                vm.login = "login znajomego";
                vm.addToFav = function () {
                    $uibModalInstance.close(vm.event);
                    var eventArr = localStorageService.get("ulubione") || [];
                    eventArr.push(vm.event);
                    console.log(eventArr);
                    localStorageService.set("ulubione", eventArr);

                };
                vm.addToRec = function () {
                    $uibModalInstance.close(vm.event);
                    var eventArrWithoutFilter = localStorageService.get("polecane") || [];

                    var eventArr= eventArrWithoutFilter.filter(function (recomenndedEvent){

                        return recomenndedEvent.login === "lukasz";


                    });


                    //var recomenndedEvent = {
                    //    login: vm.login,
                    //    event: vm.event
                    //};
                    //
                    //eventArr.push(recomenndedEvent);
                    //localStorageService.set("polecane", eventArr);
                    console.log(eventArr);
                };
            },

            controllerAs: 'vm'
        });
    }

    return {
        show: show
    };

});
