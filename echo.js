#!/usr/bin/env node
require('./helper')

function* echo() {
   var data = process.argv[2] ? process.argv[2] : 'Default content: Hello World'
    process.stdout.write(data + '\n')
}

module.exports = echo
