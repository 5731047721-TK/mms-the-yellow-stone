'use strict';

var mongoose = require('mongoose'),
  Room = mongoose.model('Rooms');



exports.list_all_room = function(req, res) {
  Room.find({}, function(err, room) {
    if (err)
      res.send(err);
    res.json(room);
  });
};


exports.create_a_room = function(req, res) {
  var new_room = new Room(req.body);
  new_room.save(function(err, room) {
    if (err)
      res.send(err);
    res.json(room);
  });
};

exports.read_a_room = function(req, res) {
  Room.findById(req.params.roomId, function(err, room) {
    if (err)
      res.send(err);
    res.json(room);
  });
};

exports.update_a_room = function(req, res) {
  Room.findOneAndUpdate({_id:req.params.roomId}, req.body, {new: true}, function(err, room) {
    if (err)
      res.send(err);
    res.json(room);
  });
};
// Room.remove({}).exec(function(){});
exports.delete_a_room = function(req, res) {

  Room.remove({
    _id: req.params.roomId
  }, function(err, room) {
    if (err)
      res.send(err);
    res.json({ message: 'Room successfully deleted' });
  });
};
