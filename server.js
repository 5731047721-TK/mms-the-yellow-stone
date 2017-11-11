var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./backend/models/todoListModel'),
    Dorm = require('./backend/models/dormModel'),
    Room = require('./backend/models/roomModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ys-service:1234@ds157723.mlab.com:57723/ys-service?readPreference=primary');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 
var routes = require('./backend/routes/todoListRoutes');
routes(app);
var routes = require('./backend/routes/dormRoutes');
routes(app);
var routes = require('./backend/routes/roomRoutes');
routes(app);
var routes = require('./frontend/routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);