/**
 * Created by ScipioAfricanus on 2016-04-10.
 */
var USER;
var URL = 'https://isa-api2.herokuapp.com/fav/events-';
function onSuccess(googleUser) {

    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());


}

function onSignIn(googleUser,sharedFavorite) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    USER = profile.getEmail();
    $("#loginWindow").hide();
    $("#backcover").hide();






    checkOnLogin = function() {
        $.ajax({
            type: 'GET',
            url: URL + USER,
            dataType: 'json',
            success: function(favAndRecThisUser) {
                debugger
                if (favAndRecThisUser.result != undefined){
                    if (favAndRecThisUser.result.favourite != undefined){
                        //sharedFavorite.vm.user.favourite = favAndRecThisUser.result.favourites;
                    }
                    if (favAndRecThisUser.result.recommended != undefined){
                        //recommended = favAndRecThisUser.result.recommended;
                    }
                } else {
                    $.ajax({
                        type: 'POST',
                        url: URL + USER,
                        dataType: 'json',
                        data: favAndRecThisUser.result,
                        success: function () {
                            console.log("dodano nowego użytkownika")

                        },
                        error: function (){
                            console.log("dodano nowego użytkownika")

                        }

                    });
                }
            }
        });
    };
    checkOnLogin();
    //console.log(sharedFavorite.emptyFavoriteBox())
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
