export interface LinkedListItem {
  next: LinkedListItem | null;
  value: unknown;
}

export class LinkedList {
  private _head: LinkedListItem | null = null;
  private _tail: LinkedListItem | null = null;

  get head(): LinkedListItem | null {
    return this._head;
  }

  get tail(): LinkedListItem | null {
    return this._tail;
  }

  append(value: unknown): void {
    const newItem: LinkedListItem = { value, next: null };

    if (!this._head) {
      this._head = newItem;
    }

    if (this._tail) {
      this._tail.next = newItem;
    }

    this._tail = newItem;
  }

  prepend(value: unknown): void {
    const newItem: LinkedListItem = { value, next: this._head };

    this._head = newItem;

    if (!this._tail) {
      this._tail = newItem;
    }
  }

  insertAfter(value: unknown, valueAfter: unknown): void {
    const item = this.find(valueAfter);

    if (item) {
      item.next = { value, next: item.next };
    }
  }

  find(value: unknown): LinkedListItem | null {
    if (!this._head) {
      return null;
    }

    let currentItem: LinkedListItem | null = this._head;

    while (currentItem) {
      if (currentItem.value === value) {
        return currentItem;
      }
      currentItem = currentItem.next;
    }

    return null;
  }

  delete(value: unknown): void {
    if (!this._head) {
      return;
    }

    while (this._head && this._head.value === value) {
      this._head = this._head.next;
    }

    let currentItem: LinkedListItem | null = this._head;

    while (currentItem?.next) {
      if (currentItem?.next.value === value) {
        currentItem.next = currentItem.next.next;
      } else {
        currentItem = currentItem.next;
      }
    }

    if (this._tail?.value === value) {
      this._tail = currentItem;
    }
  }

  deleteHead(): LinkedListItem | null {
    if (!this._head) {
      return null;
    }

    const deletedItem = this._head;

    if (deletedItem.next) {
      this._head = deletedItem.next;
    } else {
      this._head = null;
      this._tail = null;
    }

    return deletedItem;
  }

  toArray(): LinkedListItem[] {
    const array: LinkedListItem[] = [];
    let currentItem = this._head;

    while (currentItem) {
      array.push(currentItem);
      currentItem = currentItem.next;
    }

    return array;
  }
}
