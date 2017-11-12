'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: 'please fill username'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    userType: {
        type: [{
            type: String,
            enum: ['renter', 'rentee']
        }]
    },
    fName: String,
    lName: String,
    email: String,
    phoneNo: String,
    pic: String,
    password: String,
    status: {
        type: [{
            type: String,
            enum: ['pending', 'verifyed']
        }],
        default: ['pending']
    }
});


module.exports = mongoose.model('Users', UserSchema);