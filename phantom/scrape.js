phantom.injectJs('../js/underscore-min.js');

var pp = function(o) { return JSON.stringify(o,null,'  '); };

var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

var collected = [];

var current = 0, limit = false;

// test
// limit = 4;

page.onCallback = function(data) {
  console.log("caught callback");
  console.log(data);
}

page.onLoadFinished = function(status) {
  if (status === 'success') {
    page.evaluate(function() {
      // console.log(pp(collected));

      // window.main(function(data) {
      //   console.log(data);
      // });
      console.log(typeof jQuery);
      console.log(typeof window.foo);
    });
    phantom.exit();
  }
};

page.open('http://localhost:8080/hack.html');
