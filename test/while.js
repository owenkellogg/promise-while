var Promise      = require('bluebird')
var promiseWhile = require(__dirname+'/../')(Promise) 

describe('Promise While', function() {

  it('should loop three times asynchronously', function(done) {
    var i = 0;

    promiseWhile(function() { return i < 3 },
      function() {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            console.log('aye', i)
            resolve(i++)
          }, 500)
        })
    })
    .then(function() { done() })
  });
})

