publicService = function(localStorageService) {
    var vm = this;
//Ulubione i Polecane

    var eventArrWithoutFilter = localStorageService.get("polecane") || [];
    var eventArr= eventArrWithoutFilter.filter(function (recomenndedEvent){

        return recomenndedEvent.login === "info";
    });

    vm.tabs = [
        {
            title: 'Ulubione',
            content: localStorageService.get("ulubione") || []

        },
        {
            title: 'Polecane',
            content: localStorageService.get("Polecane") || []
        },
        {
        title: 'Popularne',
        content: localStorageService.get("Popularne") || []
        }


    ];

    return {
        getFavorite: function () {
            return vm.tabs[0];
        },
        setFavorite: function(value) {
            vm.tabs[0].content.push(value);
        },
        getRecomended: function () {
            return vm.tabs;
        },
        setRecomended: function(value) {
            vm.tabs[1].content.push(value);
        },
      setPopular: function(value) {
          vm.tabs[2].content.push(value);
      },

        checkIfThereIsNotEvent: function(eventID, eventsFromLocalStorage) {

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

};
};

app.service('sharedFavorite', publicService);
