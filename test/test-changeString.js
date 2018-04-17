const assert = require('assert');
const changeString = require('../js/changeString');

describe('string', () => {
  it('1', () => {
    const string = changeString('aabbccddeeff');
    assert.deepEqual(string, 'AA:BB:CC:DD:EE:FF');
  });

  it('2', () => {
    const string = changeString('qwertyuiopasdfghjklzxcvbnm;\/?"|');
    assert.deepEqual(string, 'EA:DF:CB');
  });

  it('3', () => {
    const string = changeString('йцукенгшщзхфывапролджэячсмитьбю');
    assert.deepEqual(string, 'EB:AC');
  });

  it('4', () => {
    const string = changeString('AABBCCDDEEFFAACCDDFFBBAAEECC');
    assert.deepEqual(string, 'AA:BB:CC:DD:EE:FF');
  });

  it('5', () => {
    const string = changeString('aayywПРwbbjjkkllcХЖЭcrr1nnmm3фяитенгшЧИТЬзжэемюьтсячфыцйбнгхзж,ю?эдбв');
    assert.deepEqual(string, 'AA:BB:CC:13:EE:CB');
  });
});
