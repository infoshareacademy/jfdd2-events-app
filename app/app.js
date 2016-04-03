(function(){
    var app = angular.module('Workshop', ['ngAnimate', 'ui.bootstrap']);

    app.controller('BaseController', function ($scope) {
        $scope.tabs = [
            { title:'Ulubione',
                content: [
                    { name: 'ulubiony 1' },
                    { name: 'ulubiony 2' },
                    { name: 'ulubiony 3' }
                ]

            },
            { title:'Polecane', content: [
                { name: 'polecane 1' },
                { name: 'polecane 2' },
                { name: 'polecane 3' }
            ] }
        ];


    });

})();