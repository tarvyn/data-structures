import { LinkedList } from './linked-list';

export interface Stack<T> {
  push: (value: T) => void;
  pop: () => T | undefined;
  isEmpty: () => boolean;
  toArray: () => T[];
}

export class ArrayStack<T = unknown> implements Stack<T> {
  private readonly list: T[] = [];

  push(value: T): void {
    this.list.push(value);
  }

  pop(): T | undefined {
    return this.list.pop();
  }

  isEmpty(): boolean {
    return !this.list.length;
  }

  toArray(): T[] {
    return this.list.slice().reverse();
  }
}

export class LinkedListStack<T = unknown> implements Stack<T> {
  private readonly list = new LinkedList();

  push(value: T): void {
    this.list.prepend(value);
  }

  pop(): T | undefined {
    return this.list.deleteHead()?.value as T | undefined;
  }

  isEmpty(): boolean {
    return !this.list.head;
  }

  toArray(): T[] {
    return this.list.toArray().map((item) => item.value) as T[];
  }
}
