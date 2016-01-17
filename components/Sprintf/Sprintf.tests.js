const proxyquire = require('proxyquire').noCallThru();
const assert = require('assert');
const sinon = require('sinon');
const rct = require('react-component-tester');
const Sprintf = require('./Sprintf');
const SprintfProxy = proxyquire('./Sprintf', {
  'sprintf-js': {
    sprintf: () => 'bad proxy test',
  },
});
const TYPES = require('../../types');

const chocolateProps = {
  type: TYPES.CHOCOLATE,
  i18n: new Map([
    ['foodStuff', 'I really love %(foodStuff)s'],
  ]),
};

const tester = rct.create({
  spyOnDefault: false,
}).use(Sprintf);

const CHOCOLATE_TEST = tester.addFlavour('CHOCOLATE_TEST', chocolateProps);

const proxyTester = rct.create({
  spyOnDefault: false,
}).use(SprintfProxy);

const CHOCOLATE_PROXY_TEST = proxyTester.addFlavour('CHOCOLATE_PROXY_TEST', chocolateProps);

describe('the Sprintf component tests should', () => {
  it('test the actual output', () => {
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

    sandbox.restore();
  });

  it('not test the dependency', () => {
    const actual = CHOCOLATE_PROXY_TEST.component.value;
    const expected = 'bad proxy test';

    assert.deepEqual(actual, expected);
  });
});
