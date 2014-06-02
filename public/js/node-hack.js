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


var t = require('./telemetry');