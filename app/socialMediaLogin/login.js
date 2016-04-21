/**
 * Created by ScipioAfricanus on 2016-04-10.
 */
var USER;
var URL = 'http://isa-api-sl.herokuapp.com/api';

var user = {
    "favourite": [],
    "recommended": []
};
function checkLogIn() {
    var favPromise = $.ajax({
          type: 'GET',
          url: URL + '/favs?filter[where][appId]=events&filter[where][userId]=' + USER,
          dataType: 'json'

      })
      .done(function (result) {
          user.favourite = result;

          //console.log('favs loaded');
          //if (result.length != 0) {
          //    user.favourite = [];
          //    result.forEach(function (val) {
          //        user.favourite.push(val);
          //
          //    });
          //
          //}
      }).error(function (msg) {
          console.log(msg)
      });


    var recPromise = $.ajax({
            type: 'GET',
            url: URL + '/recommendations?filter[where][appId]=events&filter[where][receiverId]=' + USER,
            dataType: 'json'
        })
        .done(function (result) {
            user.recommended = result;
            //console.log('recomended loaded');
            //if (result.length != 0) {
            //    user.recommended = [];
            //    result.forEach(function (val) {
            //        user.recommended.push(val);
            //    });
            //
            //
            //}

        })
        .error(function (msg) {
            console.log(msg)
        });

    return $.when(favPromise, recPromise).then(function () {

    });
}

function onSuccess(googleUser) {

    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());


}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    USER = profile.getEmail();
    $("#loginWindow").hide();
    $("#backcover").hide();

    checkLogIn();


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
