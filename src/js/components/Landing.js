
var React    = require('react');

var LandingElement = React.createClass({
  render: function(){
    return(
      <div>
      <button><img src="../../resources/ad.png" alt="my image" onClick={this._onSubmit} /></button>
      <button>WHATS UP</button>
      </div>
    );
  },
  _onSubmit: function(){
    console.log(" I just clicked the button. Good for me.");
  }
});

module.exports = LandingElement;
