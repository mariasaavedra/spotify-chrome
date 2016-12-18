var client_id = "d7e329cc49014af5924452ef81c63f77";
var client_secret = "ed0f5a910acb4b12be20b2c869d5170a";
var client_request = "https://accounts.spotify.com/authorize";
var client_redirect = "https://naaemjpfoncajeopegapflmhadcceiki.chromiumapp.org/?callback";
var client_url = client_request + "/?client_id=" + client_id + "&response_type=code&redirect_uri=" + client_redirect + "&show_dialog=true";

var token;

function get_redirect_url () {
    return chrome.identity.getRedirectURL();
}

function launchAuthFlow () {
  redirect_url = get_redirect_url() + "spotify";
  chrome.identity.launchWebAuthFlow(
    {'url': client_url, 'interactive': true},
    function(redirect_url) {
        //Get access token
    });
}

window.onload = function(){
  launchAuthFlow();
}
