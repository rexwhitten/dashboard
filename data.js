
var _db = function () {
    var self = {};

    self.LoadChart = function (month) {
        console.log('loading chart:' + month);
    }

    return self;
}

exports.data = {};
exports.data.db = _db;