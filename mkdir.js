#!/usr/bin/env node

require('./helper')
var fs = require('fs').promise

function* mkdir() {
  var dirnames = process.argv[2]

  var current_dir = __dirname
  if(dirnames) {
    var dirs = dirnames.split('/')
    for(var i = 0; i < dirs.length; i++) {
      var dirname = dirs[i]
      if( dirs[i] == '.') {
        continue
      }
      //read files in current directory
      var files = yield fs.readdir(current_dir)
      var alreadyexists = false;
      if(files) {

        for(var f = 0; f < files.length; f++) {
          if(files[f] == dirname) {
            alreadyexists = true;
          }
        }
      }
      if(alreadyexists == false) {
       yield fs.mkdir(current_dir + '/' +  dirname)
      }
      current_dir = current_dir + '/' + dirname
    }
  }

}

module.exports = mkdir
