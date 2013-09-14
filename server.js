// Dashboard Application

var __title__ = '.-.-.-.-.-.-.- (( D A S H )) .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-'

console.log(__title__);

var web = function (port) {
    var web = {};
    var express = require('express');
    var app = express();

    // Static Content. Set everything in the Client Application folder to static. 
    // The Root Path of the Application is now listening here. 
    app.use('/',express.static(__dirname + '/client'));

    // REST API 
    app.listen(port);


    
    return web;
};





/// Server Instance Creation
var web_server = new web(3003);




console.log('server load complete.');