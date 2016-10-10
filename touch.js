#!/usr/bin/env node
"use strict";
require('./helper')
var fs = require('fs').promise
let  path = require('path')

function* touch() {
    var filename = process.argv[2] ? process.argv[2] : __filename
    var dt = new Date();
    var fd = yield fs.open(path.join(process.cwd(), filename), 'a')
    yield fs.utimes(filename,  dt, dt)
}

module.exports = touch
