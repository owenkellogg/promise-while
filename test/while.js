var Promise = require('bluebird');
var promiseWhile = require(__dirname + '/../')(Promise);
var should = require('should');

describe('Promise While', function () {

  it('should loop three times asynchronously', function (done) {
    var i = 0;

    promiseWhile(function () {
        return i < 3
      },
      function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log('aye', i);
            resolve(i++);
          }, 500)
        })
      })
      .then(function () {
        done();
      })
  });

  it('should propagate rejection', function (done) {

    function TestError() {}

    promiseWhile(function () {
        return true;
      },
      function () {
        return new Promise(function (resolve, reject) {
          reject(new TestError());
        });
      })
      .catch(function (err) {
        err.should.be.instanceof(TestError);
        done();
      })
    ;
  });

});

