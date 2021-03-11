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

    delete(value: unknown): void {

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
