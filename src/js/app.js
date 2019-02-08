
var React           = require('react');
var Validator       = require('validatorjs');
var classSet        = require('./utils/classSet');
var ProgressElement = require('./components/Progress');
var FormElement     = require('./components/Form');
var inputDatas      = require('./datas/InputDatas');

var Content = React.createClass({
  getInitialState: function () {

    return {
      inputDatas: [],
      progressPercent: 0
    }

  },
  componentDidMount: function () {

    var inputDatas = this.props.inputDatas;
    this.setState( { inputDatas: inputDatas } );
    this._initialInputVerification();

  },
  render: function () {

    return (
      <div>
        <ProgressElement percent={this.state.progressPercent} />
        <FormElement
          inputs={this.state.inputDatas}
          onChangeInputHandler={this._onChangeInputHandler}
          onSubmitFormHandler={this._onSubmitFormHandler}
          percent={this.state.progressPercent} />
      </div>
    );

  },
  _initialInputVerification: function () {

    var self = this;
    this.state.inputDatas.forEach( function ( item, index ) {
      self._setAndValidateInput( index, item.value );
    });
    this._calculatePercent();

  },
  _resetInputDatas: function () {

    var inputDatas = this.state.inputDatas.map( function ( item ) {
      item.value = '';
      item.pristine = true;
      item.hasError = false;
      return item;
    });
    this.setState( { inputDatas: inputDatas } );
    this._initialInputVerification();

  },
  _calculatePercent: function () {

    var total = this.state.inputDatas.length;
    var done = 0;
    var progressPercent;
    this.state.inputDatas.forEach( function( item ) {
      if( item.hasError === false ) {
        done += 1;
      }
    });
    progressPercent = done/total*100;
    this.setState( { progressPercent: progressPercent } );

  },
  _setAndValidateInput: function ( index, value, noMorePristine ) {

    var pristine = noMorePristine ? false : true;
    var inputDatas = this.state.inputDatas;
    var item = inputDatas[index];
    var data = {};
    var validation;

    inputDatas[index].value = value;
    inputDatas[index].pristine = pristine;
    inputDatas[index].hasError = false;
    inputDatas[index].errorMessage = '';

    data[item.id] = value || '';

    validation = new Validator( data, item.validation.rules, item.validation.messages );
    if( validation.fails() ) {
      inputDatas[index].hasError = true;
      inputDatas[index].errorMessage  = validation.errors.first( item.id );
    }
    this.setState( { inputDatas: inputDatas } );

  },
  _onChangeInputHandler: function ( index, value ) {

    this._setAndValidateInput( index, value, true );
    this._calculatePercent();

  },
  _onSubmitFormHandler: function () {

    let query = {"name": this.state.inputDatas[0].value,
                 "age": parseInt(this.state.inputDatas[1].value),
                 "partners": parseInt(this.state.inputDatas[2].value),
                 "intercourse": parseInt(this.state.inputDatas[3].value),
                 "pregnancies": parseInt(this.state.inputDatas[4].value),
                 "smokes": parseInt(this.state.inputDatas[5].value),
                 "smokePacks": parseInt(this.state.inputDatas[6].value),
                 "contraceptives": parseInt(this.state.inputDatas[7].value),
                 "iud": parseInt(this.state.inputDatas[8].value),
                 "stds": 0,
                 "stdsNum": 0,
                 "condyl": 0,
                 "vCondyl": 0,
                 "pid": 0,
                 "hiv": 0,
                 "cCondyl": 0,
                 "vpc": 0,
                 "gHerpes": 0,
                 "hepB": 0,
                 "syphilis": 0,
                 "molCont": 0,
                 "hpv": 0,
                 "aids": 0
                };

    let myfinalestimate;

    fetch("http://yourform.westus.cloudapp.azure.com:3000/api/predict",
    {
      method: "POST",
      mode: "cors",
      headers: {
                'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log("RESULT: "+result);
        this.setState({
          isLoaded: true,
          items: result.items
        });
        myfinalestimate = result;
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );

    console.log("My final estimate: ", myfinalestimate);

    if ( this.state.progressPercent >= 100 ) {
      this._resetInputDatas();
      this._calculatePercent();
    }

  }

});

React.render( <Content inputDatas={inputDatas} />, document.body );
