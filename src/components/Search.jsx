//props:   onSubmit 
        // onChange 
        // onEnterKey
var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={props.onChange} 
      onKeyPress={props.onEnterKey} 
      className="form-control" 
      type="text" 
      ref={input => input && input.focus()} />
    <button onClick={props.onSubmit} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


//button needs to trigger input element to execute func & send value back to app