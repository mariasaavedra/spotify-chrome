var client_id = "d7e329cc49014af5924452ef81c63f77";
var client_secret = "ed0f5a910acb4b12be20b2c869d5170a";
var client_request = "https://accounts.spotify.com/authorize";
var client_redirect = "https://naaemjpfoncajeopegapflmhadcceiki.chromiumapp.org/?callback";
var client_url = client_request + "/?client_id=" + client_id + "&response_type=code&redirect_uri=" + client_redirect + "&show_dialog=true";

function get_redirect_url () {
    return chrome.identity.getRedirectURL();
}

function launch_auth_flow () {
  redirect_url = get_redirect_url();
  chrome.identity.launchWebAuthFlow(
    {'url': client_url, 'interactive': true},
    function(responseUrl) {
        //Get access token
        var regex = /=(.+)/; // match '=' and capture everything that follows
        var token = responseUrl.match(regex);
        token = token[1];
        if (token) {
           chrome.storage.local.set({'spotifyToken': token});
        }
    });
}


window.onload = function(){
  launch_auth_flow();
}
