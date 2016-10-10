#!/usr/bin/env node

require('./helper')
var fs = require('fs').promise

function* grep() {
    var regex = process.argv[2] ? process.argv[2] : __filename
    var filename = process.argv[3] ? process.argv[3] : __filename
    var rf = yield fs.readFile(filename)

    if(rf) {
      var lines = rf.toString().split('\n')
      for(var i = 0; i < lines.length; i++) {
        if(lines[i].match(regex)) {
          console.log(lines[i])
        }
      }
    }
}

module.exports = grep
