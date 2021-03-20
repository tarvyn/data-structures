import { Node } from '../src/binary-tree';
import { AvlTree } from '../src/avl-tree';

function removeParents(node: Node | null): void {
  if (!node) {
    return;
  }

  node.parent = null;
  removeParents(node.left);
  removeParents(node.right);
}

export function logTree(tree: AvlTree): void {
  removeParents(tree.root);
  console.log(JSON.stringify(tree, null, 4));
}
