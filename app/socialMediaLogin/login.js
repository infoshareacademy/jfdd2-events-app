/**
 * Created by ScipioAfricanus on 2016-04-10.
 */
function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());

}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
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

function setURL(url){
    document.getElementById('logoutframe').src = url;
}

function onFailure(error) {
    console.log(error);
}

var button = document.getElementById('logoutButton');
button.addEventListener('click', function() {
        window.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://events.jfdd2.infoshareaca.nazwa.pl/";

});