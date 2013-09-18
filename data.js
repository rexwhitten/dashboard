
function _db () {
    var self = {};
    
    // Database Queries
    self.GetData = function (query, callback) {
        // Get the Data from the Database since it wasnt in the cache 
        var sql = require('mssql');
        config = {
            user: 'ssrs_user',
            password: '!QAZxsw2',
            server: '192.168.12.25',
            database: 'RPT',
            port: 49657
        }

        sql.connect(config, function (err) {
            console.log('Executing query...');
            var request = new sql.Request();
            request.query(query, function (err, recordset) {
                console.log('..Query complete');
                sql.close();
                callback(recordset);
            });
        });
    };

    // Database Queries
    self.GetDataDev = function (query, callback) {
        // Get the Data from the Database since it wasnt in the cache 
        var sql = require('mssql');
        config = {
            user: 'ssrs_user',
            password: '!QAZxsw2',
            server: '192.168.12.25',
            database: 'RPT_R',
            port: 49657
        }

        sql.connect(config, function (err) {
            console.log('Executing query...');
            var request = new sql.Request();
            request.query(query, function (err, recordset) {
                console.log('..Query complete');
                sql.close();
                callback(recordset);
            });
        });
    };

    self.RGet = function (query, callback) {
        var redis = require('redis');
        var r = redis.createClient(6379);
    }

    self.RSet = function (query, callback){
        
    }

    return self;
}

exports.data = _db;