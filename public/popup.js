(function(){

  chrome.storage.local.get(get_spotify_token);

  function get_spotify_token(response){
    load(response.spotifyToken);
    console.log(response.spotifyToken);
  }

  function load(token){
    var spotify_token = token;
    //getUserData(spotify_token);
    return $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
       'Authorization': 'Bearer ' + token
      },
      success : function(data) {
          console.log(data);
        _.forEach(data, function(value, key) {
          console.log(key, value);
        });
      }
    });
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
