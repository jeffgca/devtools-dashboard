var Telemetry = require('telemetry-js-node'),
  _ = require('underscore'),
  async = require('async'),
  moment = require('moment-range');


function _makeVersionHash(versions) {
  var _version_map = {};
  _.each(versions, function(v) {
    var _v = v.split('/');
    if (!_version_map[_v[0]]) {
      _version_map[_v[0]] = [];
    }
    // console.log((_v[1] === '0'));
    if (_v[1] === '0' || _v[1] === 'UNKNOWN' || _v[1] < 22) {
      // console.log("skipping", _v[1]);
    }
    else {
      _version_map[_v[0]].push(_v[1]);
    }
  });

  return _.omit(_version_map, 'OTHER');
}

function getCurrentVersions(versions) {
  var hash = _makeVersionHash(versions);
  var keys = ['nightly', 'aurora', 'beta', 'release'];
  var latest_nightly = _.last(hash.nightly);
  var latest_versions = _.map(keys, function(k, i) {
    return k + '/' + (latest_nightly - i);
  });
  return _.object(keys, latest_versions);
}

/*

Spec:
1. get number of users for a day - toolbox boolean
2. get number of seconds open - active_seconds
3. report on number of times opened per day, total time spent per day, sessions per day

*/

function mapHistogram(evolution, outer, inner) {
  var collected = evolution.map(function(date, histogram, index) {
    var _outer = histogram.map(function(count, start, end, index) {
      return inner(count, start, end, index);
    });
    return outer(date, _outer);
  });
  return collected;
}

function main(channel_version, callback) {

  var functions = [
    function(callback) {
      var measure = 'DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS';
      Telemetry.loadEvolutionOverBuilds(channel_version, measure, function(histogram) {
        var result = mapHistogram(histogram, function(date, data) {
          var sum = 0;
          _.each(data, function(row) {
            if (row[1] > 0) {
              sum += row[0];
            }
          });

          return {date: date, data: sum};
        }, function(count, start, end, index) {
          return [].slice.call(arguments);
        });

        callback(null, {version: channel_version, measure: measure, data: result});
      });
    },
    function(callback) {
      var measure = 'DEVTOOLS_TOOLBOX_OPENED_PER_USER_FLAG';
      Telemetry.loadEvolutionOverBuilds(channel_version, measure, function(histogram) {
        var result = mapHistogram(histogram, function(date, data) {
          return {date: date, data: data};
        }, function(count, start, end, index) {
          if (start === 1) {
            return count;
          }
        });

        var filtered = _.map(result, function(item) {
          return {date: item.date, data: item.data[1]};
        });
        callback(null, {version: channel_version, measure: measure, data: filtered});
      });
    }
  ];

  async.parallel(functions, callback);
}

if (!module.parent) {
  Telemetry.init(function() {
    var _versions = Telemetry.versions();
    var versions = getCurrentVersions(_versions);
    versions = _.omit(versions, 'release');
    _.each(versions, function(version) {
      main(version, function(err, result) {
        if (err) throw err;
        var total = 0;
        _.each(result[0].data, function(item) {
          total += item.data;
        });

        var sessionTotal = 0;
        _.each(result[1].data, function(item) {
          sessionTotal += item.data;
        });
        var hours = Math.round(((total/60)/60));
        console.log(hours +
          " hours /  " +
          sessionTotal +
          " users for "+version+" - " + Math.round(total / sessionTotal) + " seconds per user."
        );
      });
    });
  });
}

// console.log(_.size(time_active_seconds_daily), _.size(session_daily));