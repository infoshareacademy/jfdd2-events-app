app.factory('alert', function($uibModal) {

    function show(action, event) {
        return $uibModal.open({
            templateUrl: 'event/modalContent.html',
            controller: function($uibModalInstance) {
                var vm = this;
                vm.action = action;
                vm.event = event;
                vm.addToFav = function () {
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
