const assert = require('assert');
const changeLetter = require('../js/changeLetter');

describe('change', () => {
  it('1', () => {
    const change = changeLetter('А');
    assert.deepEqual(change, 'A');
  });

  it('2', () => {
    const change = changeLetter('В');
    assert.deepEqual(change, 'B');
  });

  it('3', () => {
    const change = changeLetter('С');
    assert.deepEqual(change, 'C');
  });

  it('4', () => {
    const change = changeLetter('Е');
    assert.deepEqual(change, 'E');
  });
});
