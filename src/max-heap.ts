export class MaxHeap {
  heapElements: number[] = [];

  insert(value: number): void {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = MaxHeap.getParentElementIndex(currentElementIndex);

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex] >
        this.heapElements[parentElementIndex]
    ) {
      const parentElement = this.heapElements[parentElementIndex];

      this.heapElements[parentElementIndex] = value;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = MaxHeap.getParentElementIndex(currentElementIndex);
    }
  }

  process(): number | null {
    if (!this.heapElements.length) {
      return null;
    }

    if (this.heapElements.length === 1) {
      return this.heapElements.pop() ?? null;
    }
    const [topElement] = this.heapElements;
    this.heapElements[0] = this.heapElements.pop() as number;

    let currentElementIndex = 0;
    let leftChildIndex = MaxHeap.getLeftElementIndex(currentElementIndex);
    let rightChildIndex = MaxHeap.getRightElementIndex(currentElementIndex);
    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[leftChildIndex] &&
      this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex] <=
        this.heapElements[childElementIndex]
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
