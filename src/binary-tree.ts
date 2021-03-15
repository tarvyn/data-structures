export class Node {
  left: Node | null = null;
  right: Node | null = null;

  constructor(public value: number | null, public parent: Node | null = null) {}

  add(value: number): void {
    if (this.value === null) {
      this.value = value;
      return;
    }

    if (value > this.value) {
      this.right = Node.setValue(this.right, this, value);
    } else if (value < this.value) {
      this.left = Node.setValue(this.left, this, value);
    }
  }

  remove(value: number): void {
    const node = this.find(value);

    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      node.parent?.removeChild(node);
      return;
    }

    if (node.left && node.right) {
      const nextBiggerNode = node.right.findNextBiggerNode() as Node;

      if (nextBiggerNode.value !== node.right.value) {
        this.remove(nextBiggerNode.value as number);
        node.value = nextBiggerNode.value;
      } else {
        node.value = node.right.value;
        node.right = node.right.right;
      }
    } else {
      const childNode = node.left || (node.right as Node);

      node.left = childNode.left;
      node.right = childNode.right;
      node.value = childNode.value;
    }

    if (node.left) {
      node.left.parent = node;
    }

    if (node.right) {
      node.right.parent = node;
    }
  }

  removeChild(node: Node): void {
    if (this.left && this.left === node) {
      this.left = null;
      return;
    }

    if (this.right && this.right === node) {
      this.right = null;
      return;
    }
  }

  find(value: number): Node | undefined {
    if (this.value === value) {
      return this;
    }

    if (this.value === null) {
      return;
    }

    if (this.right && value > this.value) {
      return this.right.find(value);
    }

    if (this.left && value < this.value) {
      return this.left.find(value);
    }
  }

  private findNextBiggerNode(): Node {
    if (!this.left) {
      return this;
    }

    return this.left.findNextBiggerNode();
  }

  private static setValue(
    node: Node | null,
    parent: Node,
    value: number
  ): Node {
    if (node) {
      node.add(value);
      return node;
    }

    return new Node(value, parent);
  }
}

export class BinaryTree {
  readonly root = new Node(null);

  add(value: number): void {
    this.root.add(value);
  }

  remove(value: number): void {
    this.root.remove(value);
  }

  find(value: number): Node | undefined {
    return this.root.find(value);
  }
}
