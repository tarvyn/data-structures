import { FAKE_VALUES } from './constants';
import { ArrayQueue, LinkedListQueue, Queue } from '../src/queue';

let stack: Queue<unknown>;

describe('ArrayQueue', () => {
  spec(ArrayQueue);
});

describe('LinkedListQueue', () => {
  spec(LinkedListQueue);
});

function spec(queueConstructor: new () => Queue<unknown>): void {
  beforeEach(() => {
    stack = new queueConstructor();
  });

  describe('enqueue method', () => {
    it('should push value to the stack', () => {
      stack.enqueue(FAKE_VALUES[0]);

      expect(stack.toArray()).toEqual([FAKE_VALUES[0]]);

      stack.enqueue(FAKE_VALUES[1]);

      expect(stack.toArray()).toEqual([FAKE_VALUES[1], FAKE_VALUES[0]]);
    });
  });

  describe('dequeue method', () => {
    beforeEach(() => {
      stack.enqueue(FAKE_VALUES[0]);
      stack.enqueue(FAKE_VALUES[1]);
      stack.enqueue(FAKE_VALUES[2]);
    });

    it('should delete head value of the stack', () => {
      expect(stack.toArray()).toEqual([
        FAKE_VALUES[2],
        FAKE_VALUES[1],
        FAKE_VALUES[0],
      ]);
      expect(stack.dequeue()).toBe(FAKE_VALUES[0]);
      expect(stack.toArray()).toEqual([FAKE_VALUES[2], FAKE_VALUES[1]]);
      expect(stack.dequeue()).toBe(FAKE_VALUES[1]);
      expect(stack.toArray()).toEqual([FAKE_VALUES[2]]);
    });
  });
}
