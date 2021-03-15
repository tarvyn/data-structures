import { BinaryTree } from '../src/binary-tree';

let tree: BinaryTree;

describe('Binary Tree', () => {
  beforeEach(() => {
    tree = new BinaryTree();

    tree.add(10);
    tree.add(8);
    tree.add(9);
    tree.add(15);
    tree.add(7);
    tree.add(4);
    tree.add(5);
    tree.add(12);
    tree.add(13);
    tree.add(14);
    tree.add(11);
  });

  it('should build correct tree structure', () => {
    expect(tree.root.value).toBe(10);
    expect(tree.root.left?.value).toBe(8);
    expect(tree.root.left?.left?.value).toBe(7);
    expect(tree.root.left?.right?.value).toBe(9);
    expect(tree.root.right?.value).toBe(15);
    expect(tree.root.left?.left?.left?.value).toBe(4);
    expect(tree.root.left?.left?.left?.right?.value).toBe(5);
    expect(tree.root.right?.left?.value).toBe(12);
    expect(tree.root.right?.left?.right?.value).toBe(13);
    expect(tree.root.right?.left?.right?.right?.value).toBe(14);
    expect(tree.root.right?.left?.left?.value).toBe(11);
  });

  describe('find method', () => {
    it('should find the correct node', () => {
      expect(tree.find(10)?.value).toBe(10);
      expect(tree.find(8)?.value).toBe(8);
      expect(tree.find(9)?.value).toBe(9);
      expect(tree.find(15)?.value).toBe(15);
      expect(tree.find(7)?.value).toBe(7);
      expect(tree.find(4)?.value).toBe(4);
      expect(tree.find(5)?.value).toBe(5);
      expect(tree.find(14)?.value).toBe(14);
      expect(tree.find(13)?.value).toBe(13);
      expect(tree.find(6)?.value).toBeUndefined();
    });
  });

  describe('remove method', () => {
    it('should remove the leaf node', () => {
      tree.remove(5);

      expect(tree.find(5)).toBeUndefined();
    });

    it('should remove the branch node with correctly rebuilt tree', () => {
      tree.remove(15);

      expect(tree.root.right?.value).toBe(12);
      expect(tree.root.right?.right?.value).toBe(13);
      expect(tree.root.right?.left?.value).toBe(11);
      expect(tree.root.right?.right?.right?.value).toBe(14);
    });

    it('should remove the branch node with correctly rebuilt tree', () => {
      tree.remove(12);

      expect(tree.root.right?.left?.value).toBe(13);
      expect(tree.root.right?.left?.right?.value).toBe(14);
      expect(tree.root.right?.left?.left?.value).toBe(11);
    });
  });
});
