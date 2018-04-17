const assert = require('assert');
const addDivider = require('../js/addDivider');

describe('divider', () => {
  it('1', () => {
    const divider = addDivider('AAAA');
    assert.deepEqual(divider, 'AA:AA');
  });

  it('2', () => {
    const divider = addDivider('CCCCCC');
    assert.deepEqual(divider, 'CC:CC:CC');
  });

  it('3', () => {
    const divider = addDivider('BBBBBBBB');
    assert.deepEqual(divider, 'BB:BB:BB:BB');
  });

  it('4', () => {
    const divider = addDivider('11AACC33FF');
    assert.deepEqual(divider, '11:AA:CC:33:FF');
  });

  it('5', () => {
    const divider = addDivider('AABBCCDDEEFF');
    assert.deepEqual(divider, 'AA:BB:CC:DD:EE:FF');
  });
});
