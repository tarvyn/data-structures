import { BinaryTree, Node } from './binary-tree';

export class AvlTree extends BinaryTree {
  add(value: number): void {
    super.add(value);

    let currentNode = this.root.find(value);

    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent as Node;
    }
  }

  balance(node: Node): void {
    if (node.balanceFactor < -1) {
      if (node.right && node.right.balanceFactor < 0) {
        this.rotateLeft(node);
      } else if (node.right && node.right.balanceFactor > 0) {
        this.rotateRightLeft(node);
      }
    } else if (node.balanceFactor > 1) {
      if (node.left && node.left.balanceFactor < 0) {
        this.rotateLeftRight(node);
      } else if (node.left && node.left.balanceFactor > 0) {
        this.rotateRight(node);
      }
    }
  }

  remove(value: number): void {
    super.remove(value);
    this.balance(this.root);
  }

  rotateLeft(node: Node): void {
    const rightNode = node.right as Node;

    if (!node.right) {
      return;
    }

    node.right = null;

    if (node.parent) {
      node.parent.right = rightNode;
      node.parent.right.parent = node.parent;
    } else if (node === this.root) {
      this.root = rightNode;
      this.root.parent = null;
    }

    if (rightNode.left) {
      node.right = rightNode.left;
      node.right.parent = node;
    }

    rightNode.left = node;
    rightNode.left.parent = rightNode;
  }

  rotateRight(node: Node): void {
    const leftNode = node.left as Node;

    if (!node.left) {
      return;
    }

    node.left = null;

    if (node.parent) {
      node.parent.left = leftNode;
      node.parent.left.parent = node.parent;
    } else if (node === this.root) {
      this.root = leftNode;
      this.root.parent = null;
    }

    if (leftNode.right) {
      node.left = leftNode.right;
      node.left.parent = node;
    }

    leftNode.right = node;
    leftNode.right.parent = leftNode;
  }

  rotateLeftRight(node: Node): void {
    const leftNode = node.left as Node;

    if (!node.left) {
      return;
    }

    node.left = null;

    const leftRightNode = leftNode.right as Node;
    leftNode.right = null;

    if (leftRightNode?.left) {
      leftNode.right = leftRightNode.left;
      leftNode.right.parent = leftNode;
      leftRightNode.left = null;
    }

    node.left = leftRightNode as Node;
    node.left.parent = node;

    leftRightNode.left = leftNode;
    leftRightNode.left.parent = leftRightNode;

    this.rotateRight(node);
  }

  rotateRightLeft(node: Node): void {
    const rightNode = node.right as Node;

    if (!node.right) {
      return;
    }

    node.right = null;

    const rightLeftNode = rightNode.left as Node;
    rightNode.left = null;

    if (rightLeftNode?.right) {
      rightNode.left = rightLeftNode.right;
      rightNode.left.parent = rightNode;
      rightLeftNode.right = null;
    }

    node.right = rightLeftNode as Node;
    node.right.parent = node;

    rightLeftNode.right = rightNode;
    rightLeftNode.right.parent = rightLeftNode;

    this.rotateLeft(node);
  }
}
