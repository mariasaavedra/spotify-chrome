/*

https://accounts.spotify.com/authorize/?client_id=d7e329cc49014af5924452ef81c63f77&response_type=code&redirect_uri=http://192.168.33.10/popup.html?callback&show_dialog=true

 document.addEventListener('DOMContentLoaded', function() {
  var client_id = "d7e329cc49014af5924452ef81c63f77";
  var client_secret = "ed0f5a910acb4b12be20b2c869d5170a";
  var client_request = "https://accounts.spotify.com/authorize";
  var client_redirect = "http://192.168.33.10/popup.html?callback";
  var client_url = client_request + "/?client_id=" + client_id + "&response_type=code&redirect_uri=" + client_redirect + "&show_dialog=true";

  var s = window.location.href;
  var regex = /=(.+)/; // match '=' and capture everything that follows
  var token = s.match(regex);
  if (token) {
    token = token[1];
    console.log(token);
    load();
  } else {
    window.location.replace(client_url);
  }

  function load(){
    console.log("loaded");
  }

}, false);



var client_id = "d7e329cc49014af5924452ef81c63f77";
var client_secret = "ed0f5a910acb4b12be20b2c869d5170a";
var client_request = "https://accounts.spotify.com/authorize";
var client_redirect = "http://192.168.33.10/popup.html?callback";
var client_url = client_request + "/?client_id=" + client_id + "&response_type=code&redirect_uri=" + client_redirect + "&show_dialog=true";


*/

var s = window.location.href;
var regex = /=(.+)/; // match '=' and capture everything that follows
var token = s.match(regex);
if (token) {
  token = token[1];
  chrome.storage.local.set({'spotifyToken': token}, function() {
    console.log(token);
  });
}
