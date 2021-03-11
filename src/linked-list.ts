export interface LinkedListItem {
    next: LinkedListItem | null;
    value: unknown;
}

export class LinkedList {
    head: LinkedListItem | null = null;
    tail: LinkedListItem | null = null;

    append(value: unknown): void {
        const newItem: LinkedListItem = { value, next: null };

        if (!this.head) {
            this.head = newItem;
        }

        if (this.tail) {
            this.tail.next = newItem;
        }

        this.tail = newItem;
    }

    prepend(value: unknown): void {
        const newItem: LinkedListItem = { value, next: this.head };

        this.head = newItem;

        if (!this.tail) {
            this.tail = newItem;
        }
    }

    insertAfter(value: unknown, valueAfter: unknown): void {
        const item = this.find(valueAfter);

        if (item) {
            item.next = { value, next: item.next };
        }
    }

    find(value: unknown): LinkedListItem | null {
        if (!this.head) {
            return null;
        }

        let currentItem: LinkedListItem | null  = this.head;

        while (currentItem) {
            if (currentItem.value === value) {
                return currentItem;
            }
            currentItem = currentItem.next;
        }

        return null;
    }

    delete(value: unknown): void {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentItem: LinkedListItem | null = this.head;

        while (currentItem?.next) {
            if (currentItem?.next.value === value) {
                currentItem.next = currentItem.next.next;
            } else {
                currentItem = currentItem.next;
            }
        }

        if (this.tail?.value === value) {
            this.tail = currentItem;
        }
    }

    toArray(): LinkedListItem[] {
        const array: LinkedListItem[] = [];
        let currentItem = this.head;

        while (currentItem) {
            array.push(currentItem);
            currentItem = currentItem.next;
        }

        return array;
    }
}
