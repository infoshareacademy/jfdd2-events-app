app.service('sharedFavorite', sharedFavorite);
function sharedFavorite() {
//Ulubione i Polecane
    return {
        setFavToServerWithValidation: function (currentEvent, showStatement) {
            $.ajax({
                type: "GET",
                url: urlPrefix + '/favs?filter[where][appId]=events&filter[where][objectType]=' + currentEvent.id + '&filter[where][userId]=' + usernameStr,
                dataType: 'json',
                success: function (result) {
                    if (result.length === 0) {
                        console.log("tego wydarzenia nie ma w ulubuionych");
                        toFav = {
                            "appId": "events",
                            "objectType": currentEvent.id,
                            "objectId": currentEvent.title,
                            "userId": usernameStr

                        };

                        console.log('to jest curEvent');
                        console.log(currentEvent);
                        console.log('przed wyslaneim na server');
                        $.ajax({
                            type: 'POST',
                            url: urlPrefix + '/favs',
                            dataType: 'json',
                            data: toFav,
                            success: function () {
                                currentEvent.objectId = currentEvent.title;
                                userFavRec.favorite.push(currentEvent);

                            }
                        });
                    } else {
                        showStatement("To wydarzenie jest już w ulubionych!");
                    }
                }
            });


        },
        setRecToServerWithValidation: function (currentEvent, receiverLogin, showStatement) {
            $.ajax({
                type: 'get',
                url: urlPrefix + '/recommendations?filter[where][appId]=events&filter[where][objectType]=' + currentEvent.id +
                '&filter[where][receiverId]=' + receiverLogin + '&filter[where][senderId]=' + usernameStr,
                dataType: 'json',
                success: function (result) {


                    if (result.length === 0) {
                        toRec = {
                            "appId": "events",
                            "senderId": usernameStr,
                            "receiverId": receiverLogin,
                            "objectType": currentEvent.id,
                            "objectId": currentEvent.title
                        };

                        console.log("to rec" + toRec);

                        $.ajax({
                            type: 'POST',
                            url: urlPrefix + '/recommendations',
                            dataType: 'json',
                            data: toRec,
                            success: function () {
                                currentEvent.objectId = currentEvent.title;
                                userFavRec.recommended.push(currentEvent);
                            }
                        });

                    } else {
                        showStatement("Te wydarzenie już zostało polecone uzytkownikowi " + receiverLogin);
                    }
                }
            });


        }
    };
}
