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
