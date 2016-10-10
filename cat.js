#!/usr/bin/env node

require('./helper')
var fs = require('fs').promise

function* cat() {
    var filename = process.argv[2] ? process.argv[2] : __filename
    var data = yield fs.readFile(filename)
    process.stdout.write(data + '\n')
}

module.exports = cat
