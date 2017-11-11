'use strict';

module.exports = function(app) {
    var dormList = require('../controllers/dormController');

    app.route('/api/dorm/search')
        .get(dormList.search_dorm);

    // todoList Routes
    app.route('/api/dorm')
        .get(dormList.list_all_dorm)
        .post(dormList.create_a_dorm);

    app.route('/api/dorm/:dormId')
        .get(dormList.read_a_dorm)
        .put(dormList.update_a_dorm)
        .delete(dormList.delete_a_dorm);
};