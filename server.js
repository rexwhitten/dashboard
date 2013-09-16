// Dashboard Application

var __title__ = '.-.-.-.-.-.-.- (( D A S H )) .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-'

console.log(__title__);

var _sql = function () {
    var self = {};

    self.Query = function (query) {
        var result = [];
        var db = require('mssql');
        var _config = {
            user: '',
            passowrd: '',
            server: '',
            database: ''
        };

        db.connect(config, function (err) {
            var request = new db.Request();
            request.query(query, function (err, recordset) {
                if (err) console.log(err);
                console.log('Query Complete');
                result = recordset;
            });
        });

        return result;
    }

    return self;
};




var web = function (port) {
    var web = {};
    var express = require('express');
    var app = express();

    // Static Content. Set everything in the Client Application folder to static. 
    // The Root Path of the Application is now listening here. 
    app.use('/', express.static(__dirname + '/client'));


    // REST API 
    app.get('/SC', function (req, res) {
        var _sc_data_1 = [];
        var _sc_data_2 = [];
        var _sc_data_3 = [];
        var _sc_data_4 = [];
        var _sc_data_5 = [];

        // Connect to SQL and get the View Dat fro the Reports/Dashboards
        var sql = new _sql();
        _sc_data_1 = sql.Query('SELECT * FROM ');
        _sc_data_2 = sql.Query('SELECT * FROM ');
        _sc_data_3 = sql.Query('SELECT * FROM ');
        _sc_data_4 = sql.Query('SELECT * FROM ');
        _sc_data_5 = sql.Query('SELECT * FROM ');

        // Build Body 
        var body = [];
        body.push(_sc_data_1);
        body.push(_sc_data_2);
        body.push(_sc_data_3);
        body.push(_sc_data_4);
        body.push(_sc_data_5);

        // Return JSON Objects 
        res.send(body);
    });

    app.listen(port);

    return web;
};

/// Server Instance Creation
var web_server = new web(3003);




console.log('server listening at Port: 3003.');