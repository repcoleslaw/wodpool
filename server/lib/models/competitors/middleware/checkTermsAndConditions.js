const { exception } = require('q3-core-responder');
const Schema = require('../schema');

function checkTermsAndConditions() {
  if (this.isNew && !this.termsAccepted)
    exception('Validation')
      .msg('C001')
      .field('termsAccepted')
      .throw();
}

Schema.pre('save', checkTermsAndConditions);

module.exports = {
  checkTermsAndConditions,
};
