var DashClient = function () {
    var self = {};

    self.LoadDashboard = function () {
        console.log('Loading Dashboard');


    };

    self.createChart = function (path, chartType, selector, xScale, yScale, className) {
        self.getDataset(path, function (data) {
            console.log('creating chart ' + path);

            var chart_data = self.CreateChartObject(function () {
                var _dataItems = [];
                for (var table_index in data) {
                    var table = data[table_index];
                    for (var row_index in table) {
                        var row = table[row_index];
                        _dataItems.push({x: row.X , y: row.Y });
                    }
                }
                return _dataItems;
            }, xScale, yScale, chartType, className);
            new xChart(chartType, chart_data, selector);
        });
    };

    self.getDataset = function (path, callback) {
        console.log('loading dataset (' + path + ')');
    }

    self.CreateChartObject = function (dataItems, xScale, yScale, type, className) {
        var _cdata = {};
        _cdata.xScale = xScale;
        _cdata.yScale = yScale;
        _cdata.type = type;
        _cdata.main = [];

        var _main = [];
        _main.className = className;
        _main.data = dataItems;

        return _cdata;
    }

    return self;
}



function GetTrendData_TitleCompleted(){
  

    var data = {
          "xScale": "time",
          "yScale": "linear",
          "type": "line",
          "main": [
            {
              "className": ".trends",
              "data": [
                {
                  "x": "2013-01-01",
                  "y": 5.2
                },
                {
                  "x": "2013-02-02",
                  "y": 2.7
                },
                {
                  "x": "2013-03-03",
                  "y": 39.4
                },
                {
                  "x": "2013-04-04",
                  "y": 3.1
                },
                {
                  "x": "2013-05-05",
                  "y": 1.8
                },
                {
                  "x": "2013-06-06",
                  "y": 1.5
                },
                {
                  "x": "2013-07-07",
                  "y": 8.8
                },
                {
                  "x": "2013-08-08",
                  "y": 10.9
                },
                {
                  "x": "2013-09-09",
                  "y": 8.5
                }
              ]
            }
          ]
        };
    
    return data;
}



function GetTrendData_ComplaintFiled(){
  

    var data = {
          "xScale": "time",
          "yScale": "linear",
          "type": "line",
          "main": [
            {
              "className": ".trends",
              "data": [
                {
                  "x": "2013-01-01",
                  "y": 12.7
                },
                {
                  "x": "2013-02-02",
                  "y": 9.1
                },
                {
                  "x": "2013-03-03",
                  "y": 8.4
                },
                {
                  "x": "2013-04-04",
                  "y": 33.9
                },
                {
                  "x": "2013-05-05",
                  "y": 32.4
                },
                {
                  "x": "2013-06-06",
                  "y": 38.6
                },
                {
                  "x": "2013-07-07",
                  "y": 31
                },
                {
                  "x": "2013-08-08",
                  "y": 62
                },
                {
                  "x": "2013-09-09",
                  "y": 23
                }
              ]
            }
          ]
        };
    
    return data;
}


function GetTrendData_OORSent(){
  

    var data = {
          "xScale": "time",
          "yScale": "linear",
          "type": "line",
          "main": [
            {
              "className": ".trends",
              "data": [
                {
                  "x": "2013-01-01",
                  "y": 9.2
                },
                {
                  "x": "2013-02-02",
                  "y": 25.9
                },
                {
                  "x": "2013-03-03",
                  "y": 15.6
                },
                {
                  "x": "2013-04-04",
                  "y": 16.3
                },
                {
                  "x": "2013-05-05",
                  "y": 8.6
                },
                {
                  "x": "2013-06-06",
                  "y": 5.4
                },
                {
                  "x": "2013-07-07",
                  "y": 17.4
                },
                {
                  "x": "2013-08-08",
                  "y": 26.8
                },
                {
                  "x": "2013-09-09",
                  "y": 39.3
                }
              ]
            }
          ]
        };
    
    return data;
}

function GetTrendData_DeedSent(){
  

    var data = {
          "xScale": "time",
          "yScale": "linear",
          "type": "line",
          "main": [
            {
              "className": ".trends",
              "data": [
                {
                  "x": "2013-01-01",
                  "y": 25.6
                },
                {
                  "x": "2013-02-02",
                  "y": 19.6
                },
                {
                  "x": "2013-03-03",
                  "y": 15.3
                },
                {
                  "x": "2013-04-04",
                  "y": 27.5
                },
                {
                  "x": "2013-05-05",
                  "y": 1
                },
                {
                  "x": "2013-06-06",
                  "y": 1
                },
                {
                  "x": "2013-07-07",
                  "y": 1.25
                },
                {
                  "x": "2013-08-08",
                  "y": 2.7
                },
                {
                  "x": "2013-09-09",
                  "y": 2.1
                }
              ]
            }
          ]
        };
    
    return data;
}