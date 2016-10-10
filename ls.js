#!/usr/bin/env node

require('./helper')
var fs = require('fs').promise

function* ls() {
  // Use 'yield' in here
  //console.log('Executing ls function...')
  var dirpath = process.argv[2]
  var recursive = process.argv[3]
  var files = yield listFiles(dirpath, recursive)
}

function* listFiles(dirpath, recursive) {
  var fileNames = yield fs.readdir(dirpath)
  for(var i = 0; i < fileNames.length; i++) {
    var fileName = fileNames[i]

    if(fileName.startsWith('.')) {
      //ignore
    } else {
      var statValue = yield fs.stat(dirpath + '/'+ fileName)
       if(statValue.isDirectory()) {
          if(recursive && recursive == '-R') {
            //process.stdout.write(fileName + '\n')
            yield listFiles(dirpath + '/'+ fileName, recursive)
          } else { 
            continue
          }      
       } else {
          if(recursive && recursive == '-R') {
            //console.log(fileName)
            process.stdout.write(dirpath + '/'+ fileName + '\n')
          } else {
           //console.log(fileName)
           process.stdout.write(fileName + '\n')
          } 
       }
    }
 }
}


module.exports = ls
