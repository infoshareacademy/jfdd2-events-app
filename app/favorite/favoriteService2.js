app.service('sharedFavorite', function () {
    var vm = this;
    var URL = 'https://isa-api2.herokuapp.com/fav/events-';
    var USER = "info";
    vm.user = {
        "login": USER,
        "favourite": [],
        "recommended": []
    };
    // function checkIfAccountIsEmpty(){
    //     $.ajax({
    //             type: 'GET',
    //             url: URL + USER,
    //             dataType: 'json'
    //         })
    //         .done(function (favAndRecThisUser) {
    //             debugger
    //
    //             if(favAndRecThisUser.result == Object){
    //
    //             }
    //             favAndRecThisUser.result = vm.user;
    //             console.log(favAndRecThisUser.result)
    //             $.ajax({
    //                     type: 'POST',
    //                     url: URL + USER,
    //                     data: favAndRecThisUser.result,
    //                     dataType: 'json'
    //                 })
    //                 .done(function () {
    //                     console.log("Dane inicjalizacyjne zostały wysłane na serwer");
    //                 })
    //                 .error(function (msg) {
    //                     console.error(msg);
    //                 })
    //
    //         }).error(function (msg) {
    //         console.error(msg);
    //     })
    // }


    function checkIfThereIsNotEvent(event) {
        var putOnFavorite = true;
// debugger
        if (vm.user.favourite == undefined) {
            // debugger
            console.log("wykryl ze jest undefined");
            $.ajax({
                    type: 'POST',
                    url: URL + USER,
                    data: {"login" : USER, "favourite" : [""],"recommended": [""]},
                    dataType: 'json'
                })
                .done(function () {
                    // angular.copy(event,vm.user.favourite);
                    // angular.copy([""],vm.user.recommended);

                })
                .error(function (msg) {
                    console.error(msg);
                });
            putOnFavorite = true;
        }
        else if (vm.user.favourite.length === 0) {
            putOnFavorite = true;
        } else {
            vm.user.favourite.map(function (value, index) {

                for (prop in vm.user.favourite[index]) {

                    if (vm.user.favourite[index].id == event.id) {
                        putOnFavorite = false;

                    }

                }
            });
        }
        return putOnFavorite;
    }

    function setFavToServer(currentlyEvent) {
        return $.ajax({
                type: 'GET',
                url: URL + USER,
                dataType: 'json'
            })
            .done(function (favAndRecThisUser) {
                console.log(favAndRecThisUser);

                    // favAndRecThisUser.result.favourite = currentlyEvent;

                favAndRecThisUser.result.favourite.push(currentlyEvent);
                $.ajax({
                        type: 'POST',
                        url: URL + USER,
                        data: favAndRecThisUser.result,
                        dataType: 'json'
                    })
                    .done(function () {
                        console.log("Dane zostały wysłane na serwer");
                    })
                    .error(function (msg) {
                        console.error(msg);
                    })

            }).error(function (msg) {
                console.error(msg);
            })


    }


//Ulubione i Polecane
    return {

        emptyFavoriteBox: function () {
            return vm.user
        },

        getFavAndRecFromServer: function () {
            return $.ajax({
                    type: 'GET',
                    url: URL + USER,
                    dataType: 'json'
                })
                .done(function (favAndRecThisUser) {

                    vm.user.favourite = favAndRecThisUser.result.favourite;
                    vm.user.recommended = favAndRecThisUser.result.recommended;
                })
                .error(function (msg) {
                    console.error(msg);
                })
        },

        setFavToServerWithValidation: function (currentlyEvent) {
            // checkIfAccountIsEmpty();
            if (checkIfThereIsNotEvent(currentlyEvent) === true) {
                setFavToServer(currentlyEvent);
                vm.user.favourite.push(currentlyEvent);
                return true;
            } else {
                console.log("to wydarzenie jest juz w ulubionych");
                return false;
            }


        }
    };
});