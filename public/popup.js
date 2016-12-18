(function(){

  chrome.storage.local.get(get_spotify_token);

  function get_spotify_token(response){
    load(response.spotifyToken);
    console.log(response.spotifyToken);
  }

  function load(token, callback){
    var spotify_token = token;
    loadHTML();
    //getUserData(spotify_token);
/*
    return $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
       'Authorization': 'Bearer ' + token
      },
      success : function(data) {
        loadHTML(data);
        console.log(data);
      }
    });*/
  }

  function loadHTML(content){
    /*
    var person = {
      name: "Maria Saavedra",
      photo: content.images[0].url,
      birthday: content.birthdate
    };*/
    var person = {
      id: "1283146871",
      name: "Maria Saavedra",
      photo: "https://profile-images.scdn.co/images/userprofile/default/9f02f1ce3e408675be5f935eb506e9e488c1f778",
      birthday: "03/16/1992",
      follows: 21
    };
    $("#profile")
      .append("<img class='photo' src='" + person.photo + "'/>")
      .append("<p class='name'>" + person.name + "</p>")
      .append("<p class='follows'>" + "followers " + "(" + person.follows +")" + "</p>")
      .append("<p class='birthday'>" + person.birthday + "</p>")
      .append("<a href='#' class='add-song'>Add Current Song</a>");
    console.log(person);
  }

  function getUserData(token) {
    return $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {'Authorization': 'Bearer ' + token },
      type : 'GET',
      success : function(data) {
          alert('Data: '+ data);
      }
    });
  }
  function getPlaylists(token) {
    return $.ajax({
      url: 'https://api.spotify.com/v1/	/v1/me/playlists',
      headers: {'Authorization': 'Bearer ' + token },
      type : 'GET',
      success : function(data) {
          alert('Data: '+ data);
      }
    });
  }
  function searchSong(q, token) {
    return $.ajax({
      url: 'https://api.spotify.com/v1/search?q=' + q + '&type=track',
      headers: {'Authorization': 'Bearer ' + token },
      type : 'GET',
      success : function(data) {
          alert('Data: '+ data);
      }
    });
  }
  function addSongToPlaylist(user_id, playlist_id, token) {
    return $.ajax({
      url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists/' + playlist_id + '/tracks',
      headers: {'Authorization': 'Bearer ' + token },
      type : 'POST',
      success : function(data) {
          alert('Data: '+ data);
      }
    });
  }
})();


/*
getUserData(spotify_token)
  .then(function(response){
    console.log(response);
  });

  function getUserData(token) {
    return $.ajax({
         url: 'https://api.spotify.com/v1/me',
         headers: {
            'Authorization': 'Bearer ' + token
         }
    });
  }
   */
