import { LinkedList } from './linked-list';

export interface Queue<T> {
  enqueue: (value: T) => void;
  dequeue: () => T | undefined;
  isEmpty: () => boolean;
  toArray: () => T[];
}

export class ArrayQueue<T = unknown> implements Queue<T> {
  private readonly list: T[] = [];

  enqueue(value: T): void {
    this.list.unshift(value);
  }

  dequeue(): T | undefined {
    return this.list.pop();
  }

  isEmpty(): boolean {
    return !this.list.length;
  }

  toArray(): T[] {
    return this.list.slice();
  }
}

export class LinkedListQueue<T = unknown> implements Queue<T> {
  private readonly list = new LinkedList();

  enqueue(value: T): void {
    this.list.append(value);
  }

  dequeue(): T | undefined {
    return this.list.deleteHead()?.value as T | undefined;
  }

  isEmpty(): boolean {
    return !this.list.head;
  }

  toArray(): T[] {
    return this.list
      .toArray()
      .map((item) => item.value)
      .reverse() as T[];
  }
}
