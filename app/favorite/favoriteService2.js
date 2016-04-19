app.service('sharedFavorite', function () {
  var vm = this;
  var URL ='https://isa-api2.herokuapp.com/fav/events-info';
  USER = 'info';
  vm.user = {
    login: USER,
    favourite: [],
    recommended:[]
  };

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
        //url: URL +'/people',//tutaj dodac konkretnego uzytkownika
        url: URL,
        dataType: 'json',
        success: function (favAndRecThisUser) {
          vm.user.favourite = favAndRecThisUser.result.favourite;
          vm.user.recommended = favAndRecThisUser.result.recommended;
          //console.log(favAndRecThisUser.result.recommended);
        }
      });
    },

    emptyFavoriteBox: function () {
      return vm.user
    }
  };


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