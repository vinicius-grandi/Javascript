const assert = require('assert')

const a = [1,2,3]
const b = [1,2,3]

try {assert.equal(a, b, "Os valore são diferentes")
} catch (e) {
  console.log(e.message);
}

try {assert.deepEqual(a, b, "Os valore são diferentes")
} catch (e) {
  console.log(e.message);
}