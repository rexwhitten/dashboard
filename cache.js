// Powered by : Redis

function cache () {
    var self = {};
    var _data_ = require('./data.js');
    var data = new _data_.data();
    var _cache_ = require('node-cache');
    var cache = new _cache_({ stdTTL: 60 * 20, checkperiod: 60 * 20 });
    self.index = [];

    self.Get = function (path, query, callback) {
        // This value is in the Index and therefore in the cache.
        self.Message('cache.get(' + query + ')');
        // REDIS 
        var redis = require("redis");
        client = redis.createClient();
        client.on("error", function (err) {
            console.log(err);
        });
        client.get(query, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('getting...');
                callback(data);
            }
        });
    }

     self.GetDev = function (path, query, callback) {
        // This value is in the Index and therefore in the cache.
        self.Message('cache.get(' + query + ')');
        // REDIS 
        var redis = require("redis");
        client = redis.createClient();
        client.on("error", function (err) {
            console.log(err);
        });
        client.get(query, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('getting...');
                callback(data);
            }
        });
    }

    /*
    self.GetDev = function (path, query, callback) {
        console.log('querying DEV');

        if (self.index.indexOf(path) > -1) {
            // This value is in the Index and therefore in the cache.
            self.Message('cache.get(' + path + ')');
            cache.get(path, function (err, value) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('cached data retrieved');
                    callback(value);
                }
            });
        } else {
            // this value is not in cache and we need to pull it 
            data.GetDataDev(query, function (data) {
                cache.set(path, data, function () {
                    console.log('saving ' + path + ' to cache (DEV)');
                    self.index.push(path);
                    console.log('Cache size is now:' + self.index.length);
                    callback(data);
                });
            });
        }
    }
    */
    self.Set = function (path, obj, callback) {
        self.Message('cache.set(' + path + ')');
        cache.set(path, obj, callback);
    }

    self.Flush = function () {
        self.Message('cache.flush');
        cache.flushAll();
    }

    self.Message = function (msg) {
        console.log(msg);
    }

    self.GetCacheStatus = function () {
        return cache.getStats();
    }

    return self;
}

exports.Cache = cache;