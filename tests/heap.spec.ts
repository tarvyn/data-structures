import { MaxHeap } from '../src/max-heap';

let heap: MaxHeap;

describe('Heap', () => {
  beforeEach(() => {
    heap = new MaxHeap();
    heap.insert(40);
    heap.insert(101);
    heap.insert(197);
    heap.insert(12);
    heap.insert(15);
    heap.insert(85);
    heap.insert(250);
  });

  it('should correctly build the heap structure', () => {
    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[1]);
    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[2]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[3]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[4]);
    expect(heap.heapElements[2]).toBeGreaterThan(heap.heapElements[5]);
    expect(heap.heapElements[2]).toBeGreaterThan(heap.heapElements[6]);
  });

  it('should correctly process the heap structure', () => {
    heap.process();

    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[1]);
    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[2]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[3]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[4]);
    expect(heap.heapElements[2]).toBeGreaterThan(heap.heapElements[5]);

    heap.process();

    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[1]);
    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[2]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[3]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[4]);

    heap.process();

    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[1]);
    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[2]);
    expect(heap.heapElements[1]).toBeGreaterThan(heap.heapElements[3]);

    heap.process();

    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[1]);
    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[2]);

    heap.process();

    expect(heap.heapElements[0]).toBeGreaterThan(heap.heapElements[1]);
  });
});
