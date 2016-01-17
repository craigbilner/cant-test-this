import assert from 'assert';
import sinon from 'sinon';
import rct from 'react-component-tester';
import Sprintf from './Sprintf';
import TYPES from '../../types';


const tester = rct.create({
  spyOnDefault: false,
}).use(Sprintf);

const CHOCOLATE_TEST = tester.addFlavour('CHOCOLATE_TEST', {
  type: TYPES.CHOCOLATE,
  i18n: new Map([
    ['foodStuff', 'I really love %(foodStuff)s'],
  ]),
});

describe('the Sprintf component should', () => {
  it('be tested with the actual value', () => {
    const actual = CHOCOLATE_TEST.component.value;
    const expected = 'I really love chocolate';

    assert.deepEqual(actual, expected);
  });

  it('not test the implementation', () => {
    const sandbox = sinon.sandbox.create();

    sandbox.stub(Sprintf.prototype, 'getText', () => 'something random');

    const sinonTester = rct.create({
      spyOnDefault: false,
    }).use(Sprintf);

    const STUB_TEST = sinonTester.addFlavour('STUB_TEST', {
      type: TYPES.CHOCOLATE,
    });

    const actual = STUB_TEST.component.value;
    const expected = 'something random';

    assert.deepEqual(actual, expected);
  });
});
