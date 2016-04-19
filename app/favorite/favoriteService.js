app.service('sharedFavorite', function (localStorageService) {
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
            return vm.tabs;
        },
        setFavorite: function(value) {
            vm.tabs[0].content.push(value);
            console.info('Added to favs');
        },
        getRecomended: function () {
            return vm.tabs;
        },
        setRecomended: function(value) {
            vm.tabs[1].content.push(value);
            console.info('Added recommendation');
        },
        setPopular: function(value) {
            vm.tabs[2].content.push(value);

        }
        
    };
});