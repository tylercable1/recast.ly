
// props.videos = global videos array

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.videos[0],
      searchString: ''
      //videos: updated with returned search data (auto re-renders view)
    };

    this.onTitleClick = this.onTitleClick.bind(this);

    //pass onSubmit func with binding to Search component
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  //listener for which video is clicked on
  onTitleClick(video) {
    // updates selected prop in app state
    this.setState(() => ({
      selected: video
    }));
  }
  onChange(event) {
    this.setState(() => ({
      selected: video
    }));

  }
  //listener for search button submission / enter button
  onSubmit() {
    // calls Search, pass in input string
    search(this.state.searchString)
  }


  //callback passed to searchYouTube()
  updateContent(data) {
    //receive data from ajax call
    //update state (videos)
    //this.setState()...
  }

//search(str from onSumbit)
    //create the data objec to be passed to searchYouTube
      // options = {
        //   query: string received from search bar
        //   max: 5
        //   key: our key 
        //   videoEmbeddable: 'true'
        //   type: 'video'
        // };

    //call global searchYouTube func, passing in object & callback UpdateContent



//update Search instantiation to pass in onSubmit prop to btn
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search 
              onSubmit={this.onSubmit}
              onChange={this.onChange}
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
              videos={this.props.videos} 
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
