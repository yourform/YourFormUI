
var datas = [
  {
    id: "name",
    label: "Name",
    value: "",
    validation: {
      rules: { name: [ "required", "regex:/^([a-zA-z]{3,10} [a-zA-z ]{3,})$/" ] },
      messages: { "required.name": 'Enter your first and last name', 'regex.name': 'First name and Last Name' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "age",
    label: "Age",
    value: "",
    validation: {
      rules: { age: [ "required", "integer" ] },
      messages: { "required.age": 'Enter your age', 'integer.age': 'Please enter a number' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "gender",
    label: "Your Gender",
    value: "",
    validation: {
      rules: { gender: [ "required", "regex:/Female|F|female|Male|male|M|Other|other/" ] },
      messages: { "required.gender": 'What is your gender?', 'regex.gender': 'Please enter Female/Male/Other' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "hypertension",
    label: "Have you been diagnosed with Hypertension?",
    value: "",
    validation: {
      rules: { hypertension: [ "required", "regex:/Yes|No|yes|no/" ] },
      messages: { "required.hypertension": 'Do you have Hypertension?', 'regex.hypertension': 'Please enter Yes/No' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "heartDisease",
    label: "Have you been diagnosed with Heart Disease?",
    value: "",
    validation: {
      rules: { heartDisease: [ "required", "regex:/Yes|No|yes|no/" ] },
      messages: { "required.heartDisease": 'Do you have Heart Disease?', 'regex.heartDisease': 'Please enter Yes/No' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "everMarried",
    label: "Have you ever been married / Are you married?",
    value: "",
    validation: {
      rules: { everMarried: [ "required", "regex:/Yes|No|yes|no/" ] },
      messages: { "required.everMarried": 'Are you married or are divorced', 'regex.everMarried': 'Please enter Yes/No' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "workType",
    label: "What kind of job do you have? [Government Job / Never worked / Private / Self Employed / Other]",
    value: "",
    validation: {
      rules: { workType: [ "required", "regex:/Government Job|Never worked|Private|Self Employed|Other/" ] },
      messages: { "required.workType": 'Write the category of your job', 'regex.workType': 'Please type a valid option' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "residence",
    label: "What kind of residence do you live in? [Rural/Urban]",
    value: "",
    validation: {
      rules: { residence: [ "required", "regex:/Rural|rural|Urban|urban/" ] },
      messages: { "required.residence": 'What kind of home do you live in?', 'regex.residence': 'Please type a valid option' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "hFeet",
    label: "Please enter your height (in feet)",
    value: "",
    validation: {
      rules: { hFeet: [ "required", "float" ] },
      messages: { "required.hFeet": 'Your height', 'float.hFeet': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  },
  {
    id: "wPounds",
    label: "Please enter your weight (in pounds)",
    value: "",
    validation: {
      rules: { wPounds: [ "required", "integer" ] },
      messages: { "required.wPounds": 'Your weight', 'integer.wPounds': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: true,
    errorMessage: ''
  }
];

module.exports = datas;
