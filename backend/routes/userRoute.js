'use strict';

module.exports = function(app) {
	var user = require('../controllers/userController');

	// todoList Routes
	app.route('/users')
		.get(user.list_all_users)
		.post(user.create_a_user);

	app.route('/users/:userId')
		//.get(todoList.read_a_task)
		//.put(todoList.update_a_task)
		//.delete(todoList.delete_a_task);
};
