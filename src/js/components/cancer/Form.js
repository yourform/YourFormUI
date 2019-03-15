
var React         = require('react');
var classSet      = require('../../utils/classSet');
var CancerInputElement  = require('./Input');
var SubmitElement = require('../Submit');

var CancerFormElement = React.createClass({
  render: function() {
    var props = this.props;
    console.log("MY PROPS: ", props);
    var inputNodes = props.inputs.map( function ( item, index  ) {
      return <CancerInputElement
                key={index}
                index={index}
                item={item}
                onChangeInputHandler={props.onChangeInputHandler} />;
    });
    return (
      <form className="form clearfix" onSubmit={this._onSubmit}>
        {inputNodes}
        <SubmitElement percent={this.props.percent}/>
      </form>
    );
  },
  _onSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmitFormHandler();
  }
});

module.exports = CancerFormElement;
