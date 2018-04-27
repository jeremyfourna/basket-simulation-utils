const assert = require('chai').assert;
const {
  generateId,
  generateName
} = require('../index.js');

describe('index.js', () => {
  describe('Function generateId()', () => {
    it('Must return string', () => {
      assert.isString(generateId());
    });
  });
  describe('Function generateName([array])', () => {
    it('Must return "a a"', () => {
      const firstNames = ['a'];
      assert.isString(generateName([firstNames, firstNames]));
    });
    it('Must return string', () => {
      const firstNames = ['a'];
      assert.isString(generateName([firstNames, firstNames]));
    });
  });
});
