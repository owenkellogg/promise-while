
module.exports = function(Promise) {
  return function(condition, action) {
    var resolver = Promise.defer();

    var loop = function() {
      if (!condition()) return resolver.resolve();
      return Promise.resolve(action())
        .then(loop)
        .catch(resolver.reject);
    };

    process.nextTick(loop);

    return resolver.promise;
  };
}
