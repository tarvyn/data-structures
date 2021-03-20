import { AvlTree } from '../src/avl-tree';

let tree: AvlTree;

describe('AVL Tree', () => {
  beforeEach(() => {
    tree = new AvlTree();
  });

  it('should correctly self-balance', () => {
    tree.add(20);
    tree.add(16);
    tree.add(18);

    expect(tree.root.value).toBe(18);
    expect(tree.root.left?.value).toBe(16);
    expect(tree.root.right?.value).toBe(20);

    tree.add(24);
    tree.add(22);

    expect(tree.root.right?.value).toBe(22);
    expect(tree.root.right?.left?.value).toBe(20);
    expect(tree.root.right?.right?.value).toBe(24);

    tree.add(14);
    tree.add(12);

    expect(tree.root.left?.value).toBe(14);
    expect(tree.root.left?.left?.value).toBe(12);
    expect(tree.root.left?.right?.value).toBe(16);

    tree.add(26);
    tree.add(28);

    expect(tree.root.right?.right?.value).toBe(26);
    expect(tree.root.right?.right?.left?.value).toBe(24);
    expect(tree.root.right?.right?.right?.value).toBe(28);
  });
});
