
// props.videos = global videos array

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.videos[0]
      //videos: updated with returned search data (auto re-renders view)
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  //listener for which video is clicked on
  onTitleClick(video) {
    // updates selected prop in app state
    this.setState(() => ({
      selected: video
    }));
  }


  //search/fetch 
    //fetch new data
    //update this.state.videos

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
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
