
var React         = require('react');
var classSet      = require('../../utils/classSet');
var StrokeInputElement  = require('./Input');
var SubmitElement = require('../Submit');

var StrokeFormElement = React.createClass({
  render: function() {
    var props = this.props;
    var inputNodes = props.inputs.map( function ( item, index  ) {
      return <StrokeInputElement
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

module.exports = StrokeFormElement;
