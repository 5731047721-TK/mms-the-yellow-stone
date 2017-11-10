'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DormSchema = new Schema({
  name: {//dorm name
    type: String,
    required: 'please fill dorm name',
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  englishName: {
      type: String
  },
  nearby:String,
  detail:String,
  englishDetail:String,
  internetPrice:Number,
  electricityPrice:Number,
  pic:String,
  waterPrice:Number,
  point:Number,
//   apartmentId:{
//       type:Number,
//       unique:true,
//       required:true
//   },
  rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
  
});


module.exports = mongoose.model('Dorms', DormSchema); 