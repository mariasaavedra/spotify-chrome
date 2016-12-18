chrome.storage.local.get('spotifyToken', function (result) {
      token = result.spotifyToken;
      console.log(result);
  });
