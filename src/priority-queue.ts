class Node {
  constructor(
    public readonly value: unknown,
    public readonly priority: number
  ) {}
}

export class PriorityQueue {
  heapElements: Node[] = [];

  insert(value: unknown, priority: number): void {
    const newNode = new Node(value, priority);
    this.heapElements.push(newNode);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = PriorityQueue.getParentElementIndex(
      currentElementIndex
    );

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex].priority >
        this.heapElements[parentElementIndex].priority
    ) {
      const parentElement = this.heapElements[parentElementIndex];

      this.heapElements[parentElementIndex] = newNode;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = PriorityQueue.getParentElementIndex(
        currentElementIndex
      );
    }
  }

  process(): Node | null {
    if (!this.heapElements.length) {
      return null;
    }

    if (this.heapElements.length === 1) {
      return this.heapElements.pop() ?? null;
    }
    const [topElement] = this.heapElements;
    this.heapElements[0] = this.heapElements.pop() as Node;

    let currentElementIndex = 0;
    let leftChildIndex = PriorityQueue.getLeftElementIndex(currentElementIndex);
    let rightChildIndex = PriorityQueue.getRightElementIndex(
      currentElementIndex
    );
    let childElementIndex =
      this.heapElements[rightChildIndex]?.priority &&
      this.heapElements[leftChildIndex]?.priority &&
      this.heapElements[rightChildIndex].priority >=
        this.heapElements[leftChildIndex].priority
        ? rightChildIndex
        : leftChildIndex;

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex].priority <=
        this.heapElements[childElementIndex].priority
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];

      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }

    return topElement;
  }

  private static getParentElementIndex(index: number): number {
    return Math.floor((index + 1) / 2) - 1;
  }

  private static getLeftElementIndex(index: number): number {
    return 2 * index + 1;
  }

  private static getRightElementIndex(index: number): number {
    return 2 * index + 2;
  }
}
