
# Promise While

While loops for asynchronous javascript

## Usage

````
var promiseWhile = require('promise-while')(Promise)

promiseWhile(
  function() {
    return true // infinite loop
  }, 
  function() {
    // return Promise
  }
)
.then(function() {
  // while loop completed, conditional returned false
})
````
