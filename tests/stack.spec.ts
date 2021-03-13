import { ArrayStack, LinkedListStack, Stack } from '../src/stack';
import { FAKE_VALUES } from './constants';

let stack: Stack<unknown>;

describe('ArrayStack', () => {
  spec(ArrayStack);
});

describe('LinkedListStack', () => {
  spec(LinkedListStack);
});

function spec(stackConstructor: new () => Stack<unknown>): void {
  beforeEach(() => {
    stack = new stackConstructor();
  });

  describe('push method', () => {
    it('should push value to the stack', () => {
      stack.push(FAKE_VALUES[0]);

      expect(stack.toArray()).toEqual([FAKE_VALUES[0]]);

      stack.push(FAKE_VALUES[1]);

      expect(stack.toArray()).toEqual([FAKE_VALUES[1], FAKE_VALUES[0]]);
    });
  });

  describe('pop method', () => {
    beforeEach(() => {
      stack.push(FAKE_VALUES[0]);
      stack.push(FAKE_VALUES[1]);
      stack.push(FAKE_VALUES[2]);
    });

    it('should delete head value of the stack', () => {
      expect(stack.toArray()).toEqual([
        FAKE_VALUES[2],
        FAKE_VALUES[1],
        FAKE_VALUES[0],
      ]);
      expect(stack.pop()).toBe(FAKE_VALUES[2]);
      expect(stack.toArray()).toEqual([FAKE_VALUES[1], FAKE_VALUES[0]]);
      expect(stack.pop()).toBe(FAKE_VALUES[1]);
      expect(stack.toArray()).toEqual([FAKE_VALUES[0]]);
    });
  });
}
