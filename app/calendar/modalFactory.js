app.factory('alert', function ($uibModal, localStorageService, sharedFavorite) {


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


                }

                vm.addToRec = function () {
                    if (vm.login === "") {
                        showStatement("Należy podać login znajomego!");

                    } else{

                        sharedFavorite.setRecToServerWithValidation(event,vm.login,showStatement);
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
