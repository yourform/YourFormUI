
var React    = require('react');

var LandingElement = React.createClass({
  render: function(){
    return(
      <div style={{display: "flex", align: "center"}}>
      <button style={{margin:"20px"}}>
        <img src="./resources/ad1.png" alt="my image" onClick={this._onSubmit1} />
        </button>
      <button style={{margin:"20px"}}>
        <img src="./resources/ad2.png" alt="my image" onClick={this._onSubmit2} />
        </button>
      </div>
    );
  },
  _onSubmit1: function(){
    console.log("CALLED CANCER AD");
    this.props._onSubmit(true);
  },
  _onSubmit2: function(){
    console.log("CALLED STROKE AD");
    this.props._onSubmit(false);
  }
});

module.exports = LandingElement;
