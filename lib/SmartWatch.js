var Watch = require('../lib/Watch.js');
var Tablet = require('../lib/Tablet.js');

function SmartWatch (  ){
  Watch.call(this)
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype, Watch.prototype)
extend(SmartWatch.prototype, Tablet.prototype)


module.exports = SmartWatch;