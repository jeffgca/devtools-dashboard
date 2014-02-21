var Promise = require('promise');
var _ = require('underscore');

var stupid = {
  init: function(options, callback) {
    // do something
    setTimeout(function() {
      callback(null, options.foo);
    }, 200);
  }
};

var DevtoolsTelemetry = function(options) {
  this.initTelemetry = new Promise(function(resolve, reject) {
    stupid.init({foo: 'bar'}, function(err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });

  this.initTelemetry.done(options.onInit.call(this));
};

DevtoolsTelemetry.prototype.extra = function(n) {
  console.log('in extra');
  console.log(
    _.map(_.range(n), function() {
      return 'bugs';
    }).join('! ')
  );
};

var devtools = new DevtoolsTelemetry({
  onInit: function() {
    console.log('initialized');
    // maybe set up some other infrastructure we need
  },
  onError: function(err) {
    console.log('Error: '+err);
  }
});

devtools.initTelemetry.then(function() { console.log("done"); });