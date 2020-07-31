let fs = require('fs')

function readFile(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, {encoding: "utf-8"}, function(err, contents){
      if(err) {
        reject(err);
        return ;
      }
      resolve(contents);
    })
  })
}

let promise = readFile('LICENSE.txt')
promise.then(function(contents){
  console.log(contents)
},function(err){
  console.error(err.message)
})