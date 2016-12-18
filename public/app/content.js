var client_id = "d7e329cc49014af5924452ef81c63f77";
var client_secret = "ed0f5a910acb4b12be20b2c869d5170a";
var client_request = "https://accounts.spotify.com/authorize";
var client_redirect = "http://192.168.33.10/popup.html?callback";
var client_url = client_request + "/?client_id=" + client_id + "&response_type=code&redirect_uri=" + client_redirect + "&show_dialog=true";
var token;

chrome.storage.local.get('spotifyToken', function (result) {
      token = result.spotifyToken;
      console.log(result);
  });
