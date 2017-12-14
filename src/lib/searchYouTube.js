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
    data: options,
    success: function(data) {
      console.log('SUCCESS!!!!!!!!!!');
      console.log(data);
      callback(data);
    },
    error: function() {
      console.log('error');
    }
  });
};

window.searchYouTube = searchYouTube;
