app.service('sharedFavorite', sharedFavorite );
function sharedFavorite () {
  var vm = this;



//Ulubione i Polecane
  return {
    setFavToServerWithValidation: function (currentEvent) {
        $.ajax({
            type: "GET",
            url: urlPrefix + '/favs?filter[where][appId]=events&filter[where][id]=' + currentEvent.id + '&filter[where][userId]=' + usernameStr,
            dataType: 'json',
        success: function (result) {
            if (result.length === 0) {
                console.log("tego wydarzenia nie ma w ulubuionych");
                toFav = {
                    "appId": "events",
                    "objectType": "favourite",
                    "objectId": currentEvent.title,
                    "userId": usernameStr,
                    "id": currentEvent.id

                };
                console.log(userFavRec);

                $.ajax({
                    type: 'POST',
                    url: urlPrefix + '/favs',
                    dataType: 'json',
                    data: toFav,
                    success: function () {
                        currentEvent.objectId = currentEvent.title;
                        userFavRec.favorite.push(currentEvent);
                        console.log("uFR",userFavRec.favorite);
                        console.log("CV",currentEvent)

                    }
                });
            }
        }
        })


    },
      setRecToServerWithValidation: function (currentEvent,receiverLogin) {
          $.ajax({
              type: 'get',
              url: urlPrefix + '/recommendations?filter[where][appId]=events&filter[where][id]=' + currentEvent.id +
              '&filter[where][receiverId]=' + receiverLogin + '&filter[where][senderId]=' + usernameStr,
              dataType: 'json',
              success: function (result) {
                  if (result.length === 0) {
                      toRec = {
                          "appId": "events",
                          "senderId": usernameStr,
                          "receiverId": receiverLogin,
                          "objectType": "recommendation",
                          "objectId": currentEvent.title,
                          "id": currentEvent.id
                      };

                      $.ajax({
                          type: 'POST',
                          url: urlPrefix + '/recommendations',
                          dataType: 'json',
                          data: toRec,
                          success: function () {

                              //checkLogIn();
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