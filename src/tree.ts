type PathString = `${string | never}/${string}`;

export class Node {
  readonly children: Node[] = [];

  constructor(public value: unknown, readonly parent: Node | null = null) {}

  addNodeByPath(path: PathString): Node | undefined {
    const segments = path.split('/');

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const node = new Node(segments[0], this);

      this.children.push(node);

      return node;
    }

    const existingChildNode = this.children.find(
      (node) => node.value === segments[0]
    );
    const nextNodePathString = Node.transformIntoPathString(segments.slice(1));

    if (existingChildNode) {
      existingChildNode.addNodeByPath(nextNodePathString);
    } else {
      const node = new Node(segments[0], this);

      this.children.push(node);
      node.addNodeByPath(nextNodePathString);
    }
  }

  removeNode(index: number): void {
    this.children.splice(index, 1);
  }

  removeNodeByPath(path: PathString): void {
    const segments = path.split('/');
    const [firstSegment] = segments;

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const removeNodeIndex = this.children.findIndex(
        (node) => node.value === firstSegment
      );

      this.removeNode(removeNodeIndex);

      return;
    }

    const nextChildNode = this.children.find(
      (node) => node.value === firstSegment
    );
    const nextPath = Node.transformIntoPathString(segments.slice(1));

    return nextChildNode?.removeNodeByPath(nextPath);
  }

  findDepthFirst(value: string): Node | undefined {
    if (this.value === value) {
      return this;
    }

    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }

      return child.findDepthFirst(value);
    }
  }

  findBreadthFirst(value: string): Node | undefined {
    if (this.value === value) {
      return this;
    }

    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }
    }

    for (const child of this.children) {
      const nestedChildNode = child.findBreadthFirst(value);

      if (nestedChildNode?.value === value) {
        return nestedChildNode;
      }
    }
  }

  private static transformIntoPathString(segments: string[]): PathString {
    return segments.join('/') as PathString;
  }
}

export class Tree {
  readonly root: Node;

  constructor(rootNodeValue: unknown) {
    this.root = new Node(rootNodeValue);
  }

  addNodeByPath(path: PathString): void {
    this.root.addNodeByPath(path);
  }

  removeNodeByPath(path: PathString): void {
    this.root.removeNodeByPath(path);
  }

  findDepthFirst(value: string): Node | undefined {
    return this.root.findDepthFirst(value);
  }

  findBreadthFirst(value: string): Node | undefined {
    return this.root.findBreadthFirst(value);
  }
}
