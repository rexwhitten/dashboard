// redis server .js 
// Sync between Sql and Redis 

 // Database Queries
 function GetDataRPT(query) {
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
                var redis = require("redis");
				client = redis.createClient();
				client.on("error", function (err) {
					console.log(err);
				});
				client.set(query, JSON.stringify(recordset), redis.print);
            });
        });
    };


function GetSql (_query) {
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
			console.log(_query);
            var request = new sql.Request();
            request.query(_query, function (err, recordset) {
			if (err) { console.log(err); }
                console.log('..Query complete');
                sql.close();
                var redis = require("redis");
				client = redis.createClient();
				client.on("error", function (err) {
					console.log(err);
				});
				client.set(_query, JSON.stringify(recordset), redis.print);
            });
        });
	};

	console.log("Starting Program....");
	GetSql("SELECT * FROM rpt.TimelineAggregate");
	//GetDataRPT("SELECT * FROM rpt_AgedCasesAgg");
	//GetDataRPT("SELECT * FROM rpt_dashboard_ticker");
	
	