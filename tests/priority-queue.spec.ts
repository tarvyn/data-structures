import { PriorityQueue } from '../src/priority-queue';

let queue: PriorityQueue;

describe('Priority Queue', () => {
  beforeEach(() => {
    queue = new PriorityQueue();
  });

  it('should correctly prioritize queue', () => {
    queue.insert('clean room', 5);
    queue.insert('go shopping', 2);
    queue.insert('implement priority queue', 10);

    expect(queue.process()?.value).toBe('implement priority queue');
    expect(queue.process()?.value).toBe('clean room');
    expect(queue.process()?.value).toBe('go shopping');
  });
});
