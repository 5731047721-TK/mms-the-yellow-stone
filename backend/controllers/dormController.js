'use strict';

var mongoose = require('mongoose'),
  Dorm = mongoose.model('Dorms');



exports.list_all_dorm = function(req, res) {
  Dorm.find({}, function(err, dorm) {
    if (err)
      res.send(err);
    res.json(dorm);
  });
};

exports.search_dorm = function(req, res) {
  console.log(typeof(req.query.name),'name');

  var inputJson={};
  if(req.query.name)inputJson.name={ $regex: req.query.name, "$options": "i" };
  if(req.query.englishName)inputJson.englishName={ $regex: req.query.englishName, "$options": "i" };
  if(req.query.nearby)inputJson.nearby={ $regex: req.query.nearby, "$options": "i" };
  if(req.query.minPoint)inputJson.point={$gte:req.query.minPoint};
  if(req.query.maxElePrice)inputJson.electricityPrice={$lte:req.query.maxElePrice};
  if(req.query.maxWaterPrice)inputJson.waterPrice={$lte:req.query.maxWaterPrice};
  if(req.query.maxInternetPrice)inputJson.internetPrice={$lte:req.query.maxInternetPrice};

  Dorm.find(inputJson, function(err, dorm) {
    if (err) res.send(err);
    res.json(dorm);
  });
};

exports.create_a_dorm = function(req, res) {
  var new_dorm = new Dorm(req.body);
  new_dorm.save(function(err, dorm) {
    if (err)
      res.send(err);
    res.json(dorm);
  });
};

exports.read_a_dorm = function(req, res) {
  Dorm.findById(req.params.dormId, function(err, dorm) {
    if (err)
      res.send(err);
    res.json(dorm);
  });
};

exports.update_a_dorm = function(req, res) {
  Dorm.findOneAndUpdate({_id:req.params.dormId}, req.body, {new: true}, function(err, dorm) {
    if (err)
      res.send(err);
    res.json(dorm);
  });
};
// Dorm.remove({}).exec(function(){});
exports.delete_a_dorm = function(req, res) {

  Dorm.remove({
    _id: req.params.dormId
  }, function(err, dorm) {
    if (err)
      res.send(err);
    res.json({ message: 'Dorm successfully deleted' });
  });
};
