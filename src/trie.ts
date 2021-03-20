export class TrieNode {
  value: unknown;
  children = Array(26);
}

export class Trie {
  root = new TrieNode();

  insert(key: string, value: unknown): void {
    let node = this.root;

    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;

      if (!node.children[alphabetIndex]) {
        node.children[alphabetIndex] = new TrieNode();
      }

      node = node.children[alphabetIndex];
    }

    node.value = value;
  }

  find(key: string): TrieNode | null {
    let node = this.root;

    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;

      if (!node.children[alphabetIndex]) {
        return null;
      }

      node = node.children[alphabetIndex];
    }

    return node;
  }

  remove(key: string): void {
    const node = this.find(key);

    if (node) {
      node.value = null;
    }
  }
}
