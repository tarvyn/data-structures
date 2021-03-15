import { Tree } from '../src/tree';

let tree: Tree;

describe('Tree', () => {
  beforeEach(() => {
    tree = new Tree('/');
  });

  (() => {
    beforeEach(() => {
      tree.addNodeByPath('1/1.1/1.1.1');
      tree.addNodeByPath('1/1.1/1.1.2');
      tree.addNodeByPath('1/1.1/1.1.3');
    });

    describe('addNodeByPath method', () => {
      it('should automatically create intermediate nodes by path', () => {
        expect(tree.root.children[0]?.value).toBe('1');
        expect(tree.root.children[0]?.children[0]?.value).toBe('1.1');
        expect(tree.root.children[0]?.children[0]?.children[0]?.value).toBe(
          '1.1.1'
        );
        expect(tree.root.children[0]?.children[0]?.children[1]?.value).toBe(
          '1.1.2'
        );
        expect(tree.root.children[0]?.children[0]?.children[2]?.value).toBe(
          '1.1.3'
        );
      });
    });

    describe('removeNodeByPath method', () => {
      it('should automatically create intermediate nodes by path', () => {
        tree.removeNodeByPath('1/1.1/1.1.2');

        expect(tree.root.children[0]?.children[0]?.children[0]?.value).toBe(
          '1.1.1'
        );
        expect(tree.root.children[0]?.children[0]?.children[1]?.value).toBe(
          '1.1.3'
        );

        tree.removeNodeByPath('1/1.1/1.1.1');

        expect(tree.root.children[0]?.children[0]?.children[0]?.value).toBe(
          '1.1.3'
        );
      });
    });
  })();

  describe('findDepthFirst method', () => {
    it('should find the node by looping depth-first', () => {
      tree.addNodeByPath('1/1.1/1.1.1/target');
      tree.addNodeByPath('1/target/1.1.1');

      const node = tree.findDepthFirst('target');

      expect(node?.parent?.value).toBe('1.1.1');
    });
  });

  describe('findBreadthFirst method', () => {
    it('should find the node by looping breadth-first', () => {
      tree.addNodeByPath('1/1.1/1.1.1/target');
      tree.addNodeByPath('1/target/1.1.1');

      const node = tree.findBreadthFirst('target');

      expect(node?.parent?.value).toBe('1');
    });
  });
});
