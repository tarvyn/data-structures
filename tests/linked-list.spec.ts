import { LinkedList } from '../src/linked-list';
import { FAKE_VALUES } from './constants';

let list: LinkedList;

describe('LinkedList', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  describe('append method', () => {
    it('should assign the first appended value to the head and tail', () => {
      list.append(FAKE_VALUES[0]);

      expect(list.head?.value).toBe(FAKE_VALUES[0]);
      expect(list.tail?.value).toBe(FAKE_VALUES[0]);
    });

    it('should append and link the element', () => {
      list.append(FAKE_VALUES[0]);
      list.append(FAKE_VALUES[1]);
      list.append(FAKE_VALUES[2]);

      expect(list.head?.value).toBe(FAKE_VALUES[0]);
      expect(list.head?.next?.value).toBe(FAKE_VALUES[1]);
      expect(list.head?.next?.next?.value).toBe(FAKE_VALUES[2]);
      expect(list.tail?.value).toBe(FAKE_VALUES[2]);
    });
  });

  describe('prepend method', () => {
    it('should assign the first prepended value to the head and tail', () => {
      list.prepend(FAKE_VALUES[0]);

      expect(list.head?.value).toBe(FAKE_VALUES[0]);
      expect(list.tail?.value).toBe(FAKE_VALUES[0]);
    });

    it('should prepend and link the element', () => {
      list.prepend(FAKE_VALUES[0]);
      list.prepend(FAKE_VALUES[1]);
      list.prepend(FAKE_VALUES[2]);

      expect(list.head?.value).toBe(FAKE_VALUES[2]);
      expect(list.head?.next?.value).toBe(FAKE_VALUES[1]);
      expect(list.head?.next?.next?.value).toBe(FAKE_VALUES[0]);
      expect(list.tail?.value).toBe(FAKE_VALUES[0]);
    });
  });

  describe('delete method', () => {
    beforeEach(() => {
      list.append(FAKE_VALUES[0]);
      list.append(FAKE_VALUES[1]);
      list.append(FAKE_VALUES[2]);
    });

    it('should delete singular value', () => {
      list.delete(FAKE_VALUES[0]);

      expect(list.head?.value).toBe(FAKE_VALUES[1]);
      expect(list.head?.next?.value).toBe(FAKE_VALUES[2]);
      expect(list.tail?.value).toBe(FAKE_VALUES[2]);
    });

    it('should delete duplicated values', () => {
      list.prepend(FAKE_VALUES[1]);
      list.append(FAKE_VALUES[1]);
      list.delete(FAKE_VALUES[1]);

      expect(list.head?.value).toBe(FAKE_VALUES[0]);
      expect(list.head?.next?.value).toBe(FAKE_VALUES[2]);
      expect(list.tail?.value).toBe(FAKE_VALUES[2]);
    });
  });

  describe('find method', () => {
    beforeEach(() => {
      list.append(FAKE_VALUES[0]);
      list.append(FAKE_VALUES[1]);
      list.append(FAKE_VALUES[2]);
    });

    it('should find the first occurrence', () => {
      expect(list.find(FAKE_VALUES[0])?.value).toBe(FAKE_VALUES[0]);
      expect(list.find(FAKE_VALUES[1])?.value).toBe(FAKE_VALUES[1]);
      expect(list.find(FAKE_VALUES[2])?.value).toBe(FAKE_VALUES[2]);
    });
  });

  describe('insertAfter method', () => {
    beforeEach(() => {
      list.append(FAKE_VALUES[0]);
      list.append(FAKE_VALUES[1]);
      list.append(FAKE_VALUES[2]);
    });

    it('should insert new value after specified', () => {
      list.insertAfter(FAKE_VALUES[3], FAKE_VALUES[1]);
      list.insertAfter(FAKE_VALUES[4], FAKE_VALUES[3]);

      expect(list.head?.value).toBe(FAKE_VALUES[0]);
      expect(list.head?.next?.value).toBe(FAKE_VALUES[1]);
      expect(list.head?.next?.next?.value).toBe(FAKE_VALUES[3]);
      expect(list.head?.next?.next?.next?.value).toBe(FAKE_VALUES[4]);
      expect(list.head?.next?.next?.next?.next?.value).toBe(FAKE_VALUES[2]);
      expect(list.tail?.value).toBe(FAKE_VALUES[2]);
    });
  });
});
