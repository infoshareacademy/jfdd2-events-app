app.service('sharedFavorite', sharedFavorite );
function sharedFavorite () {
  var vm = this;
  user = {
    "login": USER,
    "favourite": [],
    "recommended": []
  };



//Ulubione i Polecane
  return {
    setFavToServerWithValidation: function (currentEvent) {
        $.ajax({
            type: "GET",
            url: URL + '/favs?filter[where][appId]=events&filter[where][id]=' + currentEvent.id + '&filter[where][userId]=' + USER,
            dataType: 'json',
        success: function (result) {
            if (result.length === 0) {
                // debugger;
                console.log("tego wydarzenia nie ma w ulubuionych");
                toFav = {
                    "appId": "events",
                    "objectType": "favourite",
                    "objectId": currentEvent.title,
                    "userId": USER,
                    "id": currentEvent.id

                };

                $.ajax({
                    type: 'POST',
                    url: URL + '/favs',
                    dataType: 'json',
                    data: toFav,
                    success: function () {
                        checkLogIn();
                        // user.favourite.push(currentEvent.title);
                    }
                });
            }
        }
        })


    },
      setRecToServerWithValidation: function (currentEvent,receiverLogin) {
          $.ajax({
              type: 'get',
              url: URL + '/recommendations?filter[where][appId]=events&filter[where][id]=' + currentEvent.id +
              '&filter[where][receiverId]=' + receiverLogin + '&filter[where][senderId]=' + USER,
              dataType: 'json',
              success: function (result) {
                  if (result.length === 0) {
                      toRec = {
                          "appId": "events",
                          "senderId": USER,
                          "receiverId": receiverLogin,
                          "objectType": "recommendation",
                          "objectId": currentEvent.title,
                          "id": currentEvent.id
                      };

                      $.ajax({
                          type: 'POST',
                          url: URL + '/recommendations',
                          dataType: 'json',
                          data: toRec,
                          success: function () {

                              checkLogIn();
                              // user.recommended.push(currentEvent.title);
                          }
                      });
                  }
              }
          });
          
      }
  };
}



// $scope.AddToFavourites = function () {
//     $.ajax({
//         type: 'get',
//         url: URL + '/favs?filter[where][appId]=monuments&filter[where][objectId]=' + object.name + '&filter[where][userId]=' + login,
//         dataType: 'json',
//         success: function (result) {
//             if (result.length === 0) {
//                 debugger;
//                 toAdd = {
//                     "appId": "monuments",
//                     "objectType": "favourite",
//                     "objectId": object.name,
//                     "userId": login,
//                     "id": 0
//                 };
//                 $.ajax({
//                     type: 'POST',
//                     url: URL + '/favs',
//                     dataType: 'json',
//                     data: toAdd,
//                     success: function () {
//                         checkOnLogin();
//                     }
//                 });
//             }
//         }
//     });
//
//
// };