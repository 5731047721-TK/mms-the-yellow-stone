'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  dorm: {
    type: Schema.Types.ObjectId, ref: "Dorms",
    required: "ใส่เบอร์หอสิเห้ยยย"
  },
  type:String,
  price: Number,
  deposit: Number,
  pic: String
});


module.exports = mongoose.model('Rooms', RoomSchema); 