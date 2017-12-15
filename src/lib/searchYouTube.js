// passed in from App.jsx
// options = {
//   query: string received from search bar
//   max: 5
//   key: our key 
//   videoEmbeddable: 'true'
//   type: 'video'
// };

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      //rename first 3 keys to suit Youtube's expected key names on output to Youtube, 
      //no matter how the keys are named in the input
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      console.log('SUCCESS');
      callback(data.items);
    },
    error: function() {
      console.log('ERROR');
    }
  });
};

window.searchYouTube = searchYouTube;
