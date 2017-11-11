'use strict';

module.exports = function(app) {
    var roomList = require('../controllers/roomController');

    // todoList Routes
    app.route('/api/room')
        .get(roomList.list_all_room)//ok
        .post(roomList.create_a_room);//ok

    app.route('/api/room/:roomId')
        .get(roomList.read_a_room)
        .put(roomList.update_a_room)
        .delete(roomList.delete_a_room);
};