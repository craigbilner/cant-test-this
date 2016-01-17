import assert from 'assert';
import rct from 'react-component-tester';
import NestedChildren from './NestedChildren';
import RandomChildOne from './RandomChildOne';
import RandomChildTwo from './RandomChildTwo';
import RandomChildThree from './RandomChildThree';

const tester = rct.create().use(NestedChildren);

const BASIC_TEST = tester.addFlavour('BASIC_TEST', {});

describe('nested children tests should', () => {
  describe('be able to find each child easily', () => {
    it('found child one', () => {
      const actual = BASIC_TEST.countComponents(RandomChildOne);
      const expected = 1;

      assert.deepEqual(actual, expected);
    });

    it('found child two', () => {
      const actual = BASIC_TEST.countComponents(RandomChildTwo);
      const expected = 1;

      assert.deepEqual(actual, expected);
    });

    it('found child three', () => {
      const actual = BASIC_TEST.countComponents(RandomChildThree);
      const expected = 1;

      assert.deepEqual(actual, expected);
    });
  });

  describe('not dive into a ton of nested props', () => {
    it('looking for child one', () => {
      const actual =
        BASIC_TEST
          .component
          .props
          .children
          .props
          .children[0]
          .props
          .children
          .type;
      const expected = RandomChildOne;

      assert.deepEqual(actual, expected);
    });

    it('looking for child two', () => {
      const actual =
        BASIC_TEST
          .component
          .props
          .children
          .props
          .children[1]
          .props
          .children
          .props
          .children[0]
          .props
          .children[1]
          .props
          .children
          .props
          .children
          .type;
      const expected = RandomChildTwo;

      assert.deepEqual(actual, expected);
    });

    it('looking for child three', () => {
      const actual =
        BASIC_TEST
          .component
          .props
          .children
          .props
          .children[1]
          .props
          .children
          .props
          .children[1]
          .props
          .children
          .props
          .children
          .type;
      const expected = RandomChildThree;

      assert.deepEqual(actual, expected);
    });
  });

  describe('but if we really have to', () => {
    it('found child one', () => {
      const actual = BASIC_TEST.findChild('0.0.0').type;
      const expected = RandomChildOne;

      assert.deepEqual(actual, expected);
    });

    it('found child two', () => {
      const actual = BASIC_TEST.findChild('0.1.0.0.1.0.0').type;
      const expected = RandomChildTwo;

      assert.deepEqual(actual, expected);
    });

    it('found child three', () => {
      const actual = BASIC_TEST.findChild('0.1.0.1.0.0').type;
      const expected = RandomChildThree;

      assert.deepEqual(actual, expected);
    });
  });
});
