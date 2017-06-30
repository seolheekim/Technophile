var GameConsole = require('../lib/GameConsole.js');
var WebBrowser = require('../lib/WebBrowser.js');

function NintendoDS() {
  GameConsole.call(this, "Nintendo DS")

}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(NintendoDS.prototype, GameConsole.prototype)
extend(NintendoDS.prototype, WebBrowser.prototype)


module.exports = NintendoDS;