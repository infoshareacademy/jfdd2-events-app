app.factory('alert', function($uibModal) {

    function show(action, event) {
        return $uibModal.open({
            templateUrl: 'modalContent.html',
            controller: function($uibModalInstance) {
                var vm = this;
                vm.action = action;
                vm.event = event;
                vm.addToFav = function () {
                    $uibModalInstance.close(vm.event);
                };
                vm.addToRecomended = function () {
                    console.log(vm.friendLogin);

                }
            },
            controllerAs: 'vm'
        });
    }

    return {
        show: show
    };

});
/**
 * Created by ukasz on 04.04.16.
 */
