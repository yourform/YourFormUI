
var React                 = require('react');
var Validator             = require('validatorjs');
var classSet              = require('./utils/classSet');
var LandingElement        = require('./components/Landing');
var ProgressElement       = require('./components/Progress');
var CancerFormElement     = require('./components/cancer/Form');
var StrokeFormElement     = require('./components/stroke/Form');
var inputDatas      = require('./datas/CancerInputDatas');      // default
var inputCancerDatas      = require('./datas/CancerInputDatas');
var inputStrokeDatas      = require('./datas/StrokeInputDatas');

var Popup = React.createClass( {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>Close message</button>
        </div>
      </div>
    );
  }
});

var Content = React.createClass({
  getInitialState: function () {

    return {
      showPopup: false,
      screenShift: false,
      inputDatas: [],
      progressPercent: 0,
      message: "This is interesting, there seems to be a problem with the server."
    }

  },
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  },
  componentDidMount: function () {

    var inputCancerDatas = this.props.inputCancerDatas;
    var inputStrokeDatas = this.props.inputStrokeDatas;
    this.setState( { inputDatas: inputCancerDatas,  //default
                     inputCancerDatas: inputCancerDatas,
                     inputStrokeDatas: inputStrokeDatas,
                     selectedScreen: true,  // true: cancer, false: stroke
                     screenShift: false} );
    this._initialInputVerification();
  },
  render: function () {

    return (

      <div>
      {
        this.state.screenShift ?
        <div>
        <ProgressElement percent={this.state.progressPercent} />
        <FormElement

          inputs={this.state.selectedScreen ? this.state.inputCancerDatas : this.state.inputStrokeDatas}

          onChangeInputHandler={this._onChangeInputHandler}
          onSubmitFormHandler={this._onSubmitFormHandler}
          percent={this.state.progressPercent} />
          {this.state.showPopup ?
          <Popup
            text={this.state.message}
            closePopup={this.togglePopup} />
          : null }
          </div>
        : <div>
          <LandingElement screenShift={this.state.screenShift} />
          </div>
      }
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

    if(this.state.selectedScreen == true){    // selected screen is cancer

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

      console.log("MY STATE NOW: ", this.state);

      fetch("http://yourform.westus.cloudapp.azure.com:3000/api/predict",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
      })
      .then(res => res.json())
      .then(
        (result) => {
          var finalMessage = "You're at the lowest risk of contracting cervical cancer."; // default message
          if(parseInt(result) == 0){
            finalMessage = "You're at the lowest risk of contracting cervical cancer.";
          }
          if(parseInt(result) == 1){
            finalMessage = "You are at low risk of contracting cervical cancer.";
          }
          if(parseInt(result) == 2){
            finalMessage = "You could contract cervical cancer in the next 5 years.";
          }
          if(parseInt(result) == 3){
            finalMessage = "You're at high risk of contracting cervical cancer.";
          }
          if(parseInt(result) == 4){
            finalMessage = "You're at the highest risk of contracting cervical cancer.";
          }
          this.setState({
            isLoaded: true,
            items: result,
            showPopup: true,
            message: finalMessage
          });
          console.log("MY STATE FINALLY: ", this.state);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    }

    else{   // selected screen is stroke

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

      console.log("MY STATE NOW: ", this.state);

      fetch("http://yourform.westus.cloudapp.azure.com:3000/api/predict",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
      })
      .then(res => res.json())
      .then(
        (result) => {
          var finalMessage = "You're at the lowest risk of contracting cervical cancer."; // default message
          if(parseInt(result) == 0){
            finalMessage = "You're at the lowest risk of contracting cervical cancer.";
          }
          if(parseInt(result) == 1){
            finalMessage = "You are at low risk of contracting cervical cancer.";
          }
          if(parseInt(result) == 2){
            finalMessage = "You could contract cervical cancer in the next 5 years.";
          }
          if(parseInt(result) == 3){
            finalMessage = "You're at high risk of contracting cervical cancer.";
          }
          if(parseInt(result) == 4){
            finalMessage = "You're at the highest risk of contracting cervical cancer.";
          }
          this.setState({
            isLoaded: true,
            items: result,
            showPopup: true,
            message: finalMessage
          });
          console.log("MY STATE FINALLY: ", this.state);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    }

    if ( this.state.progressPercent >= 100 ) {
      this._resetInputDatas();
      this._calculatePercent();
    }

  }

});

React.render( <Content inputDatas={inputDatas} />, document.body );
