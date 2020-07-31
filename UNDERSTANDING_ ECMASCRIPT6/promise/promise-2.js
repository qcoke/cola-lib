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

promise.then(function(contents) {
  console.log('读取文件成功', contents)
}, function(err) {
  console.error(err)
})

promise.then(function(contents) {
  console.log('2===>', contents)
})

promise.then(null, function(err) {
  console.log('3===>', err)
})