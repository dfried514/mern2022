const assert = require('assert');

const add = (num1, num2) => num1 + num2;

assert.equal(add(2,2), 3);
assert.strictEqual(add(4,6), 10);
