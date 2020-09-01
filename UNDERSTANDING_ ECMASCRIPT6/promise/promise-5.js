let reject = Promise.reject(42)

reject.catch(function(val) {
    console.log(val);
})