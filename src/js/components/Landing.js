
var React    = require('react');

var LandingElement = React.createClass({
  render: function(){
    return(
      <div style={{display: "flex", align: "center"}}>
      <button style={{margin:"20px"}}>
        <img src="./resources/ad1.png" alt="my image" onClick={this._onSubmit} />
        </button>
      <button style={{margin:"20px"}}>
        <img src="./resources/ad2.png" alt="my image" onClick={this._onSubmit} />
        </button>
      </div>
    );
  },
  _onSubmit: function(){
    this.setState({
      screenShift: !this.props.screenShift
    });
    // Shifting screen
    console.log(" I just clicked the button. Good for me.");
    console.log("Props: ", this.props);
  }
});

module.exports = LandingElement;
