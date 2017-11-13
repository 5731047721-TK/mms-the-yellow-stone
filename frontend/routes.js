'use strict';
var express = require('express');
var request = require('request');

module.exports = function(app) {

    app.use(express.static(__dirname + '/'));

    app.route('/register/submit')
        .post((req,res)=>{
            console.log("poj see" , req.body);
            request.post(
                {url:'https://ys2.herokuapp.com/api/user/',
                form: req.body},
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body)
                    }
                }
            );
        });

};

