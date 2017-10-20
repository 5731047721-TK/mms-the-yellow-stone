'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required:true
  },
  email:String,
});


module.exports = mongoose.model('Tasks', TaskSchema);