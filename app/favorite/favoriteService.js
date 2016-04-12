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
            content: eventArr
        }
    ];

    return {
        getFavorite: function () {
            return vm.tabs;
        },
        setFavorite: function(value) {
            vm.tabs[0].content.push(value);
        },
        getRecomended: function () {
            return vm.tabs;
        },
        setRecomended: function(value) {
            vm.tabs[1].content.push(value);
        }

    };
};

app.service('sharedFavorite', publicService);
