import { LinkedList } from "../src/linked-list";

let list: LinkedList;

const fakeValues = new Array(5).fill(null).map((...[, index]) => Symbol(index + 1));

describe('LinkedList', () => {
    beforeEach(() => {
        list = new LinkedList();
    })

    describe('append method', () => {
        it('should assign the first appended value to the head and tail', () => {
            list.append(fakeValues[0]);

            expect(list.head?.value).toBe(fakeValues[0]);
            expect(list.tail?.value).toBe(fakeValues[0]);
        });

        it('should append and link the element', () => {
            list.append(fakeValues[0]);
            list.append(fakeValues[1]);
            list.append(fakeValues[2]);

            expect(list.head?.value).toBe(fakeValues[0]);
            expect(list.head?.next?.value).toBe(fakeValues[1]);
            expect(list.head?.next?.next?.value).toBe(fakeValues[2]);
            expect(list.tail?.value).toBe(fakeValues[2]);
        });
    });

    describe('prepend method', () => {
        it('should assign the first prepended value to the head and tail', () => {
            list.prepend(fakeValues[0]);

            expect(list.head?.value).toBe(fakeValues[0]);
            expect(list.tail?.value).toBe(fakeValues[0]);
        });

        it('should prepend and link the element', () => {
            list.prepend(fakeValues[0]);
            list.prepend(fakeValues[1]);
            list.prepend(fakeValues[2]);

            expect(list.head?.value).toBe(fakeValues[2]);
            expect(list.head?.next?.value).toBe(fakeValues[1]);
            expect(list.head?.next?.next?.value).toBe(fakeValues[0]);
            expect(list.tail?.value).toBe(fakeValues[0]);
        });
    });

    describe('delete method', () => {
        beforeEach(() => {
            list.append(fakeValues[0]);
            list.append(fakeValues[1]);
            list.append(fakeValues[2]);
        });

        it('should delete singular value', () => {
            list.delete(fakeValues[0]);

            expect(list.head?.value).toBe(fakeValues[1]);
            expect(list.head?.next?.value).toBe(fakeValues[2]);
            expect(list.tail?.value).toBe(fakeValues[2]);
        });

        it('should delete duplicated values', () => {
            list.prepend(fakeValues[1]);
            list.append(fakeValues[1]);
            list.delete(fakeValues[1]);

            expect(list.head?.value).toBe(fakeValues[0]);
            expect(list.head?.next?.value).toBe(fakeValues[2]);
            expect(list.tail?.value).toBe(fakeValues[2]);
        });
    });

    describe('find method', () => {
        beforeEach(() => {
            list.append(fakeValues[0]);
            list.append(fakeValues[1]);
            list.append(fakeValues[2]);
        });

        it('should find the first occurrence', () => {
            expect(list.find(fakeValues[0])?.value).toBe(fakeValues[0]);
            expect(list.find(fakeValues[1])?.value).toBe(fakeValues[1]);
            expect(list.find(fakeValues[2])?.value).toBe(fakeValues[2]);
        });
    });

    describe('insertAfter method', () => {
        beforeEach(() => {
            list.append(fakeValues[0]);
            list.append(fakeValues[1]);
            list.append(fakeValues[2]);
        });

        it('should insert new value after specified', () => {
            list.insertAfter(fakeValues[3], fakeValues[1]);
            list.insertAfter(fakeValues[4], fakeValues[3]);

            expect(list.head?.value).toBe(fakeValues[0]);
            expect(list.head?.next?.value).toBe(fakeValues[1]);
            expect(list.head?.next?.next?.value).toBe(fakeValues[3]);
            expect(list.head?.next?.next?.next?.value).toBe(fakeValues[4]);
            expect(list.head?.next?.next?.next?.next?.value).toBe(fakeValues[2]);
            expect(list.tail?.value).toBe(fakeValues[2]);
        });
    });
});


