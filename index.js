
module.exports = function(Promise) {
  return function(condition, action) {
    var resolver = Promise.defer();

    var loop = function() {
      if (!condition()) return resolver.resolve();
      return Promise.cast(action())
        .then(loop)
        .catch(function (e) {
          resolver.reject(e);
        });
    };

    process.nextTick(loop);

    return resolver.promise;
  };
}
