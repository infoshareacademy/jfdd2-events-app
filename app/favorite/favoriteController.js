app.controller('favorite', function(sharedFavorite,alert) {
    var vm = this;
//Ulubione i Polecane

    vm.tabs = sharedFavorite.getFavorite();
    vm.clicked = function (whichEvent) {
        alert.show('Clicked', whichEvent);
    }
});

