/**
 * Created by ScipioAfricanus on 2016-04-10.
 */


var urlPrefix = 'http://isa-api-sl.herokuapp.com/api';
var userFavRec;
var usernameStr;
var accumulator = {};
var items = [];
var userName = $.Deferred();
var user = $.Deferred();


userName.done(function (userNameString) {
    var favourite = $.Deferred();
    var recommended = $.Deferred();
    var popular = $.Deferred();


    usernameStr = angular.copy(userNameString);
    $.ajax({
        type: 'GET',
        url: urlPrefix + '/favs?filter[where][appId]=events&filter[where][userId]=' + userNameString,
        dataType: 'json'
    }).done(function (result) {
        favourite.resolve(result);
    });

    $.ajax({
        type: 'GET',
        url: urlPrefix + '/recommendations?filter[where][appId]=events&filter[where][receiverId]=' + userNameString,
        dataType: 'json'
    }).done(function (result) {
        recommended.resolve(result);
    });


    $.ajax({
        type: 'GET',
        url: urlPrefix + '/favs?filter[where][appId]=events',
        dataType: 'json'
    }).done(function (result) {
        result.forEach(function (item) {
            accumulator[item.objectType] = {
                occurrences: (accumulator[item.objectType] && accumulator[item.objectType].occurrences || 0) + 1,
                title: item.objectId,
                id: item.id
            };
            // console.log('to jest polunienie obiektu',  item.objectType);

            events.forEach(function (eventObject) {
                if (eventObject.id == item.objectType) {
                    eventObject["numLike"] = accumulator[item.objectType].occurrences;
                }
            })
            // console.log(events)

        });

        $.ajax({
                type: 'GET',
                url: urlPrefix + '/recommendations?filter[where][appId]=events',
                dataType: 'json'
            })
            .done(function (result) {
                result.forEach(function (item) {
                    accumulator[item.objectType] = {
                        occurrences: (accumulator[item.objectType] && accumulator[item.objectType].occurrences || 0) + 1,
                        title: item.objectId

                    };
                    events.forEach(function (eventObject) {
                        if (eventObject.id == item.objectType) {
                            if(isNaN(eventObject.numLike)){
                            eventObject["numRec"] = accumulator[item.objectType].occurrences}
                            else{
                                eventObject["numRec"] = accumulator[item.objectType].occurrences-eventObject.numLike;
                            }
                        }
                    })
                });
                for (var itemName in accumulator) {
                    if (accumulator.hasOwnProperty(itemName)) {
                        items.push({
                            name: itemName,
                            occurrences: accumulator[itemName].occurrences,
                            title: accumulator[itemName].title,
                            id: accumulator[itemName].id

                        })
                    }
                }
                items.sort(function (a, b) {
                    return b.occurrences - a.occurrences;
                });
                popular.resolve(items);
            });

    });


    $.when(favourite, recommended, popular).done(function (favoriteData, recommendedData, popularData) {

        favoriteData.forEach(function (favouriteObject) {
            events.forEach(function (eventObject) {
                if (eventObject.id == favouriteObject.objectType) {
                    favouriteObject["image"] = eventObject.image;
                    favouriteObject["title"] = eventObject.title;
                    favouriteObject["description"] = eventObject.description;
                }
            })
        });
console.log(favoriteData)
        recommendedData.forEach(function (favouriteObject) {
            events.forEach(function (eventObject) {
                if (eventObject.id == favouriteObject.objectType) {
                    favouriteObject["image"] = eventObject.image;
                    favouriteObject["title"] = eventObject.title;
                    favouriteObject["description"] = eventObject.description;
                }
            })
        });

        popularData.forEach(function (favouriteObject) {
            events.forEach(function (eventObject) {
                if (eventObject.id == favouriteObject.name) {
                    favouriteObject["image"] = eventObject.image;
                    favouriteObject["title"] = eventObject.title;
                    favouriteObject["description"] = eventObject.description;
                }
            })
        });

        user.resolve({
            favorite: favoriteData,
            recommended: recommendedData,
            popular: popularData

        });
        // console.log(favoriteData)
    });

});


function onSuccess(googleUser) {

    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());


}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    userName.resolve(profile.getEmail());
    $("#loginWindow").hide();
    $("#backcover").hide();
}


function renderButton() {
    gapi.signin2.render('g-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}


function onFailure(error) {
    console.log(error);
}
