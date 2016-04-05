(function() {
    app.directive('favorite', favorite);


    function favorite() {
        return {
            restrict: 'EAC',
            templateUrl: 'favorite/favorite.html'
        }
    }
})();