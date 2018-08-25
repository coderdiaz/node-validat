const Validator = require('validatorjs');

const data = {
  data: {
    type: 'components',
    attributes: {}
  }
}

const rules = {
  data: {
    type: 'required|string|in:components',
    attributes: 'required'
  }
}

const validation = new Validator(data, rules)

if (validation.fails()) {
  throw new Error(JSON.stringify(validation.errors))
}

console.log('OK');