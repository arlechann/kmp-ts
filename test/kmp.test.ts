import { assert } from 'chai';
import { it } from 'mocha';

import { KMP } from '../src/kmp.js';

it('find', function () {
  assert.equal(KMP('abracadabra').find('bra'), 1);
});

it('findAll', function () {
  assert.deepEqual(KMP('abracadabra').findAll('bra'), [1, 8]);
});

