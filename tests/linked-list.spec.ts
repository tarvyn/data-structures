import { LinkedList } from "../src/linked-list";

let list: LinkedList;

const fakeValue1 = Symbol();
const fakeValue2 = Symbol();
const fakeValue3 = Symbol();

describe('LinkedList', () => {
    beforeEach(() => {
        list = new LinkedList();
    })

    describe('append method', () => {
        it('should assign the first appended value to the head and tail', () => {
            list.append(fakeValue1);

            expect(list.head?.value).toBe(fakeValue1);
            expect(list.tail?.value).toBe(fakeValue1);
        });

        it('should append and link the element', () => {
            list.append(fakeValue1);
            list.append(fakeValue2);
            list.append(fakeValue3);

            expect(list.head?.value).toBe(fakeValue1);
            expect(list.head?.next?.value).toBe(fakeValue2);
            expect(list.head?.next?.next?.value).toBe(fakeValue3);
            expect(list.tail?.value).toBe(fakeValue3);
        });
    });

    describe('prepend method', () => {
        it('should assign the first prepended value to the head and tail', () => {
            list.prepend(fakeValue1);

            expect(list.head?.value).toBe(fakeValue1);
            expect(list.tail?.value).toBe(fakeValue1);
        });

        it('should prepend and link the element', () => {
            list.prepend(fakeValue1);
            list.prepend(fakeValue2);
            list.prepend(fakeValue3);

            expect(list.head?.value).toBe(fakeValue3);
            expect(list.head?.next?.value).toBe(fakeValue2);
            expect(list.head?.next?.next?.value).toBe(fakeValue1);
            expect(list.tail?.value).toBe(fakeValue1);
        });
    });

    describe('delete method', () => {
        beforeEach(() => {
            list.append(fakeValue1);
            list.append(fakeValue2);
            list.append(fakeValue3);
        });

        it('should delete singular value', () => {
            list.delete(fakeValue1);

            expect(list.head?.value).toBe(fakeValue2);
            expect(list.head?.next?.value).toBe(fakeValue3);
            expect(list.tail?.value).toBe(fakeValue3);
        });
    });
});


