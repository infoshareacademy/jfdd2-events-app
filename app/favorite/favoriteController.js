app.controller('favorite', function(sharedFavorite) {
    var vm = this;
//Ulubione i Polecane

    vm.tabs = sharedFavorite.getFavorite();

});