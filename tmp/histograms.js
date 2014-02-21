#!/usr/bin/env node

var util = require('util'),
  fs = require('fs'),
  path = require('path'),
  _ = require('underscore');

var L = console.log,
    D = function(o) { L(util.inspect(o)); },
    F = function(s) { return util.format.apply(null, arguments); },
    K = function(o) { return Object.keys(o) },
    A = function(args) { return [].slice.call(args); };

fs.readFile('./histograms.json', {encoding: 'utf8'}, function(err, data) {
  var parsed = JSON.parse(data);
  var devtools_probes = _.filter(_.keys(parsed), function(k) {
    if ((k.indexOf('DEVTOOLS_') !== -1) && /(JSDEBUGGER|RESPONSIVE|NETMONITOR|INSPECTOR|STYLEEDITOR|TOOLBOX|WEBCONSOLE)/.test(k)) {
      return true;
    }
    return false;
  });
  console.log(devtools_probes);

  var _webconsole_keys = _.filter(devtools_probes, function(k) {
    // return /.+_WEBCONSOLE_.+/.test(k);
    return /.+(OPENED_PER_USER_FLAG|TIME_ACTIVE_SECONDS|OPENED_BOOLEAN)$/.test(k);
  });

  _.each(_webconsole_keys, function(k) {
    // console.log(k, parsed[k]);
    console.log(k);
  });
});
