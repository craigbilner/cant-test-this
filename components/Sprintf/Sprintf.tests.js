import assert from 'assert';
import rct from 'react-component-tester';
import Sprintf from './Sprtinf';
import TYPES from '../../types';

const tester = rct.create().use(Sprintf);

const CHOCOLATE_TEST = tester.addFlavour('CHOCOLATE_TEST', {
  type: TYPES.CHOCOLATE,
});

describe('the Sprintf component should', () => {
  it('return the expected value if the type is chocolate', () => {
    const actual = CHOCOLATE_TEST.component.value;
    const expected = 'I really love chocolate';

    assert.deepEqual(actual, expected);
  });
});
