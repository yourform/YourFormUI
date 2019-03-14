
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
    hasError: false,
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
    hasError: false,
    errorMessage: ''
  },
  {
    id: "numberSexual",
    label: "Number of Sexual Partners",
    value: "",
    validation: {
      rules: { numberSexual: [ "required", "integer" ] },
      messages: { "required.numberSexual": 'How many sexual partners have you had uptil now?', 'numberSexual.numberSexual': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "firstSex",
    label: "Age during first Sexual Intercourse",
    value: "",
    validation: {
      rules: { firstSex: [ "required", "integer" ] },
      // rules: { lang: [ "required", "regex:/^javascript$/" ] },
      messages: { "required.firstSex": 'Your age during first sexual intercourse', 'integer.firstSex': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "numberPregnancies",
    label: "Number of Pregnancies",
    value: "",
    validation: {
      rules: { numberPregnancies: [ "required", "integer" ] },
      messages: { "required.numberPregnancies": 'How many pregnancies have you undergone (successful and unsuccessful) uptil now?', 'integer.numberPregnancies': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "smokeYears",
    label: "How many years have you been smoking (if at all) for?",
    value: "",
    validation: {
      rules: { smokeYears: [ "required", "integer" ] },
      messages: { "required.smokeYears": 'How many years have you been smoking (if at all) from?', 'integer.smokeYears': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "smokePacks",
    label: "Number of packs you smoke per year?",
    value: "",
    validation: {
      rules: { smokePacks: [ "required", "integer" ] },
      messages: { "required.numberPregnancies": 'How many packs of cigarettes in a year?', 'integer.smokePacks': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "contraceptiveYears",
    label: "Number of years you've been consuming contraceptives (if at all)?",
    value: "",
    validation: {
      rules: { contraceptiveYears: [ "required", "integer" ] },
      messages: { "required.contraceptiveYears": 'How many years have you been consuming contraceptives from?', 'integer.contraceptiveYears': 'Please enter a valid number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "iud",
    label: "Since how many years do you have an IUD (if at all)?",
    value: "",
    validation: {
      rules: { iud: [ "required", "integer" ] },
      messages: { "required.iud": 'Do you have an IUD?', 'integer.iud': 'Please enter a number' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "std",
    label: "Have you been diagnosed with any STDs?",
    value: "",
    validation: {
      rules: { std: [ "required", "regex:/Yes|No|yes|no/" ] },
      messages: { "required.std": 'Have you been diagnosed with any STD?', 'regex.std': 'Please enter Yes/No' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  }
];

module.exports = datas;
