// Dashboard Application

var __title__ = '.-.-.-.-.-.-.- (( D A S H )) .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-'
console.log(__title__);

var web = function (port) {
    var web = {};
    var express = require('express');
    var app = express();
    var _cache_ = require('./cache.js');
    var cache = new _cache_.Cache();
    var queryList = {};

    // Static Content. Set everything in the Client Application folder to static. 
    // The Root Path of the Application is now listening here. 
    app.use('/', express.static(__dirname + '/client'));

    // -----------------------------------------------------------------------------
    // REST API 
    // -----------------------------------------------------------------------------
    app.get('/SC/Aged', function (req, res) {
        var query = 'SELECT * FROM rpt_AgedCasesAgg';
        cache.Get('/SC/Aged', query, function (data) {
            console.log("HTTP:/SC/Aged:Response");
            res.send(data);
            //res.end();
            //res.json(data);
        });
    });

    app.get('/SC/Ticker', function (req, res) {
        var query = 'SELECT * FROM rpt_dashboard_ticker';
        cache.Get('/SC/Ticker', query, function (data) {
            console.log("HTTP:/SC/Ticker/:Response");
            res.send(data);
            //res.end();
            //res.json(data);
        });
    });

    app.get('/SC/Timeline/Cases', function (req, res) {
        var query = 'SELECT * FROM rpt.TimelineAggregate';
        cache.GetDev('/SC/Timeline/Cases', query, function (data) {
            console.log("HTTP:/SC/Timeline/Cases:Response");
            res.send(data);
            res.end();
           // res.json(data);
        });
    });

    app.get('/Cache/Preload', function (req, res) {
        console.log('Preloading data into cache');

        queryList["/SC/Aged"](function (data) { });
        queryList["/SC/Ticker"](function (data) { });
        queryList["/SC/Timeline/Cases"](function (data) { });
        console.log('Preloading data complete');
        res.send("Cache Loaded");
    });

    app.get('/Cache/Stats', function (req, res) {
        res.send(cache.GetCacheStatus());
    });

    // Start Server
    app.listen(port);

    return web;
};

/// Server Instance Creation
var web_server = new web(3004);
console.log('server listening at Port: 3004.');