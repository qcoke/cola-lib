let promise = new Promise(function(resolve, reject){
  try {
    throw new Error("try 方法被调用了。");
  } catch(ex) {
    reject(ex);
  }
})

promise.catch(function(error) {
  console.log('catch 方法被调用了。', error.message);
})