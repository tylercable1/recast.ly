class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      selected: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };

    this.onTitleClick = this.onTitleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEnterKey = this.onEnterKey.bind(this);
    this.updateContent = this.updateContent.bind(this);
    
  }

  //this func will run automatically when app is initialized (similar to Backbone's initialize)
  componentDidMount() {
    //default search query upon app start-up until search is entered
    this.search('kitty', 5);
  }

  //listener for which video is clicked on
  onTitleClick(video) {
    // updates selected prop in app state
    this.setState(() => ({
      selected: video
    }));
  }

  onChange(event) {
    this.setState({
      searchString: event.target.value
    });
    this.search(this.state.searchString);
  }

  onSubmit() {
    // calls Search, pass in input string
    this.search(this.state.searchString);
  }

  onEnterKey(e) {
    if (e.key === 'Enter') {
      this.search(this.state.searchString);
    }
  } 

  //callback passed to searchYouTube()
  updateContent(data) {
    //receive data from ajax call
    //update state (videos)
    this.setState({
      videos: data,
      selected: data[0]
    });
  }

//search(str from onSumbit)
  search(query, maxResults) {
    //create the data object to be passed to searchYouTube
    //call global searchYouTube func, passing in object & callback UpdateContent
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY, 
      query: query,
      max: maxResults || 5
    }, this.updateContent);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search 
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              onEnterKey={this.onEnterKey}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer 
              video={this.state.selected}
            />
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.videos} 
              onTitleClick={this.onTitleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
