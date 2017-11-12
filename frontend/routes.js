'use strict';
var express = require('express')

module.exports = function(app) {

    app.use(express.static(__dirname + '/'));

    app.post('/test', function(request, response){
        console.log(request.body);
        //console.log(request.body.description,'des');
    });
};