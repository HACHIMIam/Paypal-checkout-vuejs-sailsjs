/**
 * Payement.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    amount:{
      type: 'integer'
    },
    email:{
      type: 'string'
    },
    first_name:{
      type: 'string'
    },
    last_name:{
      type: 'string'
    }
  }
};

