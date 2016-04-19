app.service('sharedFavorite', function () {
  var vm = this;

  vm.user = {
    login: "info",
    favourite: [],
    recommended:[]
  };
    //  vm.user = {
  //  login: "info",
  //  favourite: [{
  //               title: 'Koncert',
  //               type: 'koncert', //6 typow wydarzen koncert, sztuka, teatr, kino, sport, rozrywka
  //               startsAt: new Date("April 01, 2016 18:00:00"), // data koniecznie w takim formacie
  //               endsAt: new Date("April 01, 2016 22:00:00"), // data koniecznie w takim formacie
  //               description : "opis",//tekst
  //               image: "image URL",//link do obrazka
  //               like: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
  //               recomended: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
  //               id: 1 //losowa wartosc
  //            },
  //            {
  //              title: 'Koncert',
  //              type: 'koncert', //6 typow wydarzen koncert, sztuka, teatr, kino, sport, rozrywka
  //              startsAt: new Date("April 01, 2016 18:00:00"), // data koniecznie w takim formacie
  //              endsAt: new Date("April 01, 2016 22:00:00"), // data koniecznie w takim formacie
  //              description : "opis",//tekst
  //              image: "image URL",//link do obrazka
  //              like: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
  //              recomended: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
  //              id: 1 //losowa wartosc
  //            }],
  //  recommended:[{
  //    title: 'Koncert',
  //    type: 'koncert', //6 typow wydarzen koncert, sztuka, teatr, kino, sport, rozrywka
  //    startsAt: new Date("April 01, 2016 18:00:00"), // data koniecznie w takim formacie
  //    endsAt: new Date("April 01, 2016 22:00:00"), // data koniecznie w takim formacie
  //    description : "opis",//tekst
  //    image: "image URL",//link do obrazka
  //    like: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
  //    recomended: 0,//zainicjalizowane zerem, mozliwosc wpisywania danych przez nas na serwer
  //    id: 1 //losowa wartosc
  //  }]
  //};


  function checkIfThereIsNotEvent(eventID) {
    var putOnFavorite = true;

    if (vm.tabs[0].content.length === 0) {
      putOnFavorite = true;
    } else {
      vm.tabs[0].content.map(function (value, index) {

        for (prop in vm.tabs[0].content[index]) {

          if (vm.tabs[0].content[index].event.id === eventID) {
            putOnFavorite = false;

          }

        }
      });
    }
    return putOnFavorite ? true : false;
  }

//Ulubione i Polecane
  return {
    getFavAndRecFromServer: function () {
      return $.ajax({
        type: 'GET',
        url: 'http://localhost:8030/people',
        dataType: 'json',
        success: function (favoriteThisUser) {

          vm.user.favourite = favoriteThisUser.favourite;
          vm.user.recommended = favoriteThisUser.recommended;

        }

      });
    },
    emptyFavoriteBox: function () {
      return vm.user


    }
  }


  // $.when(getFavoriteFromServer())
  //     .done(function(favoriteThisUser){
  //         vm.tabs[0].content.push(favoriteThisUser);
  // console.log(favoriteThisUser);
  // })

  // .error(function(error){
  //     console.log(error);
  // })


  // setFavorite = function (currentEvent) {
  //     $.ajax({
  //         url: "http://api/wyslanieUlubionych na server",
  //         method: "POST",
  //         dataType: "json",
  //         data: currentEvent
  //     })
  // };
  //
  // setFavoritePlusValidation = function (eventID, currentEvent) {
  //     if(checkIfThereIsNotEvent(eventID) === true){
  //         setFavorite(currentEvent);
  //         return true;
  //     }else{
  //         return false;
  //     }
  //
  // };


  // var eventArrWithoutFilter = localStorageService.get("polecane") || [];
  // var eventArr= eventArrWithoutFilter.filter(function (recomenndedEvent){
  //
  //     return recomenndedEvent.login === "info";
  // });
  //

  //
  // return {
  //     getFavorite: function () {
  //         return vm.tabs;
  //     },
  //     setFavorite: function(value) {
  //         vm.tabs[0].content.push(value);
  //     },
  //     getRecomended: function () {
  //         return vm.tabs;
  //     },
  //     setRecomended: function(value) {
  //         vm.tabs[1].content.push(value);
  //     },
  //     setPopular: function(value) {
  //         vm.tabs[2].content.push(value);
  //
  //     }
  //
  // };
});