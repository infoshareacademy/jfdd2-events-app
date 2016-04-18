app.factory('alert', function ($uibModal, localStorageService, sharedFavorite) {

    function checkIfThereIsEvent(eventID, eventsFromLocalStorage) {
        var putOnFavorite = true;

        if (eventsFromLocalStorage.length === 0) {
            putOnFavorite = true;
        } else {
            eventsFromLocalStorage.map(function (value, index) {

                for (prop in eventsFromLocalStorage[index]) {

                    if (eventsFromLocalStorage[index].event.id === eventID) {
                        putOnFavorite = false;

                    }

                }
            });
        }
        return putOnFavorite ? true : false;
    }

    function checkIfRecomended(eventID, eventsFromLocalStorage, login) {
        var putOnFavorite = true;

        if (eventsFromLocalStorage.length === 0) {
            putOnFavorite = true;
        } else {
            eventsFromLocalStorage.map(function (value, index) {

                for (prop in eventsFromLocalStorage[index]) {

                    if (eventsFromLocalStorage[index].event.id === eventID && eventsFromLocalStorage[index].login === login) {
                        putOnFavorite = false;
                    }
                }
            });
        }
        return putOnFavorite ? true : false;

    }

    function sendFavoriteToServer(recomenndedEvent){
          //$.ajax({
          //    url:'http://10.58.78.32:3000/posts',
          //    method: 'PATH',
          //    data: recomenndedEvent,
          //    dataType:"json",
          //    success: function(result) {
          //        console.log(result)}
          //    });

        $.ajax({
            url:'http://localhost:8030/people/add',
            method: 'POST',
              data: recomenndedEvent,
              // data: {"event":{"title":recomenndedEvent.event.title}},
              dataType:"json",
              success: function(result) {
                  console.log(result)}
              });
        //console.log(recomenndedEvent.event.id);
    }
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
                    var eventArrWithoutFilter = localStorageService.get("ulubione") || [];
                    console.log(eventArrWithoutFilter);

                    var recomenndedEvent = {
                        // login: "info", to można dodaca jak już będzie na serwerze i bedzie sciagać ulubione akurat tego uzytkwinika
                        event: vm.event


                    };


                    if (checkIfThereIsEvent(event.id, eventArrWithoutFilter) === true) {
                        
                        // event.like++;

                        eventArrWithoutFilter.push(recomenndedEvent);

                        //localStorageService.set("ulubione", eventArrWithoutFilter);

                        sendFavoriteToServer(recomenndedEvent);





                        sharedFavorite.setFavorite(recomenndedEvent);
                        
                        $uibModalInstance.close(vm.event);
                    } else {
                        showStatement("Te wydarzenie jest juz w ulubionych!");

                    }
                };
                vm.addToRec = function () {
                    if (vm.login === "") {
                        showStatement("Należy podać login znajomego!");


                    } else {


                        var eventArrWithoutFilter = localStorageService.get("polecane") || [];
                        var recomenndedEvent = {
                            login: vm.login,
                            event: vm.event

                        };
                        if (checkIfRecomended(event.id, eventArrWithoutFilter, recomenndedEvent.login) === true) {

                            // event.recomended++;

                            eventArrWithoutFilter.push(recomenndedEvent);
                            localStorageService.set("polecane", eventArrWithoutFilter);
                            //dopisuje tylko gdy login sie zgadza
                            if (recomenndedEvent.login === "info") {
                                sharedFavorite.setRecomended(recomenndedEvent);
                            }

                            $uibModalInstance.close(vm.event);
                        } else {
                            showStatement("Temu znajomemu juz poleciles te wydarzenie!");


                        }

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
